import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitcher from '../components/ThemeSwitcher';

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

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('arranca en Cian y lo aplica sobre <html>', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByRole('button', { name: /cambiar tema \(actual: cian\)/i })).toBeInTheDocument();
    expect(document.documentElement).toHaveClass('theme-cian');
  });

  it('respeta el tema guardado', () => {
    localStorage.setItem('portafolio-theme', 'ambar');
    render(<ThemeSwitcher />);
    expect(screen.getByRole('button', { name: /actual: ámbar/i })).toBeInTheDocument();
    expect(document.documentElement).toHaveClass('theme-ambar');
  });

  it('lista los tres temas y cambia al elegido', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);
    await user.click(screen.getByRole('button', { name: /cambiar tema/i }));

    const options = await screen.findAllByRole('menuitemradio');
    expect(options).toHaveLength(3);
    expect(screen.getByRole('menuitemradio', { name: /^cian/i })).toHaveAttribute('aria-checked', 'true');

    await user.click(screen.getByRole('menuitemradio', { name: /^violeta/i }));
    await waitFor(() => expect(document.documentElement).toHaveClass('theme-violeta'));
    expect(document.documentElement).not.toHaveClass('theme-cian');
    expect(localStorage.getItem('portafolio-theme')).toBe('violeta');
    expect(screen.getByRole('button', { name: /actual: violeta/i })).toBeInTheDocument();
  });
});
