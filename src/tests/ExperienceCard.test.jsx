import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceCard from '../components/ExperienceCard';

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

const baseExperience = {
  id: 1,
  company: 'PedidosYa',
  role: 'Live Performance Agent — LiveOps/BizOps',
  location: 'Rancagua, Chile',
  start_date: '2025-08-01',
  end_date: null,
  is_current: true,
  summary: 'Automatización de operaciones LiveOps/BizOps.',
  technologies: 'Python, Django, Docker',
  highlights: [
    { id: 1, text: 'Automatización del bot interno "Jaime".', order: 1 },
    { id: 2, text: 'Cobertura de 481 tests automatizados.', order: 2 },
  ],
};

describe('ExperienceCard', () => {
  it('renderiza company, role, summary y technologies', () => {
    render(<ExperienceCard experience={baseExperience} />);
    expect(screen.getByText('PedidosYa')).toBeInTheDocument();
    expect(screen.getByText(/live performance agent/i)).toBeInTheDocument();
    expect(screen.getByText(/automatización de operaciones/i)).toBeInTheDocument();
    expect(screen.getByText(/python, django, docker/i)).toBeInTheDocument();
  });

  it('renderiza todos los highlights como items de lista', () => {
    render(<ExperienceCard experience={baseExperience} />);
    expect(screen.getByText(/automatización del bot interno/i)).toBeInTheDocument();
    expect(screen.getByText(/cobertura de 481 tests/i)).toBeInTheDocument();
  });

  it('muestra "Presente" cuando is_current es true', () => {
    render(<ExperienceCard experience={baseExperience} />);
    expect(screen.getByText(/presente/i)).toBeInTheDocument();
  });

  it('no muestra "Presente" cuando la experiencia ya terminó', () => {
    const experienciaFinalizada = { ...baseExperience, end_date: '2024-12-01', is_current: false };
    render(<ExperienceCard experience={experienciaFinalizada} />);
    expect(screen.queryByText(/presente/i)).not.toBeInTheDocument();
  });
});
