import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import ContactCard from '../components/ContactCard';

vi.mock('axios');

// Silenciar errores de stitches en jsdom
vi.mock('@/stitches.config', () => ({
  styled: (tag, _styles) => {
    const Component = ({ children, ...props }) => {
      const Tag = tag;
      return <Tag {...props}>{children}</Tag>;
    };
    Component.displayName = tag;
    return Component;
  },
}));

vi.mock('@/components/ui/Card', () => ({
  Card: ({ children, ...props }) => <div data-testid="card" {...props}>{children}</div>,
}));

vi.mock('@/components/ui/Input', () => ({
  Input: ({ ...props }) => <input {...props} />,
}));

vi.mock('@/components/ui/Button', () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
}));

describe('ContactCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza el formulario con todos los campos', () => {
    render(<ContactCard />);
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
  });

  it('actualiza los campos cuando el usuario escribe', async () => {
    const user = userEvent.setup();
    render(<ContactCard />);

    await user.type(screen.getByLabelText(/nombre/i), 'Juan Pérez');
    await user.type(screen.getByLabelText(/email/i), 'juan@example.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Hola, quiero colaborar.');

    expect(screen.getByLabelText(/nombre/i)).toHaveValue('Juan Pérez');
    expect(screen.getByLabelText(/email/i)).toHaveValue('juan@example.com');
    expect(screen.getByLabelText(/mensaje/i)).toHaveValue('Hola, quiero colaborar.');
  });

  it('muestra "Enviando..." mientras el formulario se procesa', async () => {
    axios.post.mockReturnValue(new Promise(() => {})); // nunca resuelve
    const user = userEvent.setup();
    render(<ContactCard />);

    await user.type(screen.getByLabelText(/nombre/i), 'Test');
    await user.type(screen.getByLabelText(/email/i), 'test@test.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Mensaje');
    await user.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveTextContent('Enviando...');
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('muestra mensaje de éxito y limpia el formulario tras envío exitoso', async () => {
    axios.post.mockResolvedValue({ data: { status: 'ok' } });
    const user = userEvent.setup();
    render(<ContactCard />);

    await user.type(screen.getByLabelText(/nombre/i), 'Juan');
    await user.type(screen.getByLabelText(/email/i), 'juan@example.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Hola');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/mensaje enviado/i)).toBeInTheDocument();
    });

    expect(screen.getByLabelText(/nombre/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/mensaje/i)).toHaveValue('');
  });

  it('muestra mensaje de error cuando la API falla', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));
    const user = userEvent.setup();
    render(<ContactCard />);

    await user.type(screen.getByLabelText(/nombre/i), 'Juan');
    await user.type(screen.getByLabelText(/email/i), 'juan@example.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Hola');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/error al enviar/i)).toBeInTheDocument();
    });
  });

  it('llama a axios.post con la URL y datos correctos', async () => {
    axios.post.mockResolvedValue({ data: { status: 'ok' } });
    const user = userEvent.setup();
    render(<ContactCard />);

    await user.type(screen.getByLabelText(/nombre/i), 'Juan');
    await user.type(screen.getByLabelText(/email/i), 'juan@example.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Mensaje de prueba');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        expect.stringContaining('/api/contacto/'),
        { name: 'Juan', email: 'juan@example.com', message: 'Mensaje de prueba' },
        expect.objectContaining({ headers: { 'Content-Type': 'application/json' } }),
      );
    });
  });

  it('el botón vuelve a estar habilitado tras el envío', async () => {
    axios.post.mockResolvedValue({ data: { status: 'ok' } });
    const user = userEvent.setup();
    render(<ContactCard />);

    await user.type(screen.getByLabelText(/nombre/i), 'Test');
    await user.type(screen.getByLabelText(/email/i), 'test@test.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Hola');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });
  });
});
