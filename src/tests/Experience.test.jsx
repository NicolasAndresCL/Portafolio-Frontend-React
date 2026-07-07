import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';

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

vi.mock('../components/ExperienceCard', () => ({
  default: ({ experience }) => <div data-testid="experience-card">{experience.company}</div>,
}));

describe('Experience', () => {
  it('renderiza una ExperienceCard por cada experiencia', () => {
    const experiences = [
      { id: 1, company: 'PedidosYa' },
      { id: 2, company: 'Empresa Anterior' },
    ];
    render(<Experience experiences={experiences} />);
    expect(screen.getAllByTestId('experience-card')).toHaveLength(2);
    expect(screen.getByText('PedidosYa')).toBeInTheDocument();
    expect(screen.getByText('Empresa Anterior')).toBeInTheDocument();
  });

  it('no rompe con un array vacío', () => {
    render(<Experience experiences={[]} />);
    expect(screen.queryByTestId('experience-card')).not.toBeInTheDocument();
  });
});
