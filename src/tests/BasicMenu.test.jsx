import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasicMenu from '../components/BasicMenu';

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

// jsdom no trae ResizeObserver ni APIs de pointer capture, que Radix usa al posicionar.
beforeAll(() => {
  globalThis.ResizeObserver ??= class { observe() {} unobserve() {} disconnect() {} };
  Element.prototype.hasPointerCapture ??= () => false;
  Element.prototype.releasePointerCapture ??= () => {};
  Element.prototype.scrollIntoView ??= () => {};
});

describe('BasicMenu', () => {
  it('el botón anuncia un menú y arranca cerrado', () => {
    render(<BasicMenu />);
    const trigger = screen.getByRole('button', { name: 'Menú' });
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('al abrir muestra los 7 enlaces como menuitem', async () => {
    const user = userEvent.setup();
    render(<BasicMenu />);
    await user.click(screen.getByRole('button', { name: 'Menú' }));

    expect(await screen.findByRole('menu')).toBeInTheDocument();
    const items = screen.getAllByRole('menuitem');
    expect(items.map((i) => i.textContent)).toEqual([
      'Sobre mí', 'Experiencia', 'Projects', 'Skills', 'Contacto', 'Swagger UI', 'Admin',
    ]);
    expect(screen.getByRole('menuitem', { name: 'Sobre mí' })).toHaveAttribute('href', '#Sobre-mi');
    expect(screen.getByRole('menuitem', { name: 'Admin' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('menuitem', { name: 'Sobre mí' })).not.toHaveAttribute('target');
  });

  it('se cierra con Escape', async () => {
    const user = userEvent.setup();
    render(<BasicMenu />);
    await user.click(screen.getByRole('button', { name: 'Menú' }));
    await screen.findByRole('menu');
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('se cierra al elegir una sección (antes quedaba abierto tapando la página)', async () => {
    const user = userEvent.setup();
    render(<BasicMenu />);
    await user.click(screen.getByRole('button', { name: 'Menú' }));
    await user.click(await screen.findByRole('menuitem', { name: 'Experiencia' }));
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });
});
