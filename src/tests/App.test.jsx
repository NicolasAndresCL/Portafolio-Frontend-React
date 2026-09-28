import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

vi.mock('axios');

vi.mock('@/stitches.config', () => ({
  styled: (tag, _styles) => {
    const Component = ({ children, ...props }) => {
      const Tag = tag;
      return <Tag {...props}>{children}</Tag>;
    };
    Component.displayName = typeof tag === 'string' ? tag : 'Styled';
    return Component;
  },
}));

vi.mock('@radix-ui/themes', () => ({
  Text: ({ children, ...props }) => <span {...props}>{children}</span>,
}));

// Home real arrastra todo el sitio; basta con ver qué datos recibe.
vi.mock('../components/Home', () => ({
  default: ({ projects, skills, experiences }) => (
    <div data-testid="home">
      {projects.length}-{skills.length}-{experiences.length}
    </div>
  ),
}));

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('desenvuelve respuestas paginadas y no muestra aviso', async () => {
    axios.get.mockResolvedValue({ data: { count: 2, results: [{ id: 1 }, { id: 2 }] } });
    render(<App />);
    expect(await screen.findByTestId('home')).toHaveTextContent('2-2-2');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('recorre todas las páginas de la API (no se pierden skills tras la página 1)', async () => {
    axios.get.mockImplementation((url) => {
      if (url.endsWith('/api/skills/')) {
        return Promise.resolve({ data: { count: 3, next: 'https://x/api/skills/?page=2', results: [{ id: 1 }, { id: 2 }] } });
      }
      if (url.endsWith('?page=2')) {
        return Promise.resolve({ data: { count: 3, next: null, results: [{ id: 3 }] } });
      }
      return Promise.resolve({ data: { count: 1, next: null, results: [{ id: 1 }] } });
    });
    render(<App />);
    expect(await screen.findByTestId('home')).toHaveTextContent('1-3-1');
  });

  it('si la API cae, igual renderiza el sitio (y el botón del CV) con un aviso', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));
    render(<App />);
    expect(await screen.findByTestId('home')).toHaveTextContent('0-0-0');
    expect(screen.getByRole('alert')).toHaveTextContent(/no se pudo cargar parte del contenido/i);
  });

  it('si falla un solo endpoint, conserva los datos de los demás', async () => {
    axios.get.mockImplementation((url) =>
      url.endsWith('/api/skills/')
        ? Promise.reject(new Error('500'))
        : Promise.resolve({ data: [{ id: 1 }] }),
    );
    render(<App />);
    expect(await screen.findByTestId('home')).toHaveTextContent('1-0-1');
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
