import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

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

vi.mock('@/components/ui/Button', () => ({
  Button: ({ children, as: Tag = 'button', ...props }) => <Tag {...props}>{children}</Tag>,
}));

const baseProject = {
  id: 1,
  title: 'All_in_Django',
  image: 'https://example.com/image.png',
  description: 'Proyecto integral con Django y DRF.',
  technologies: 'Django, DRF, PostgreSQL',
  github_link: 'https://github.com/NicolasAndresCL/All_in_Django',
  live_link: '',
  is_featured: false,
};

describe('ProjectCard', () => {
  it('renderiza el botón "Ir a GitHub" cuando github_link está presente', () => {
    render(<ProjectCard project={baseProject} />);
    const link = screen.getByRole('link', { name: /ir a github/i });
    expect(link).toHaveAttribute('href', baseProject.github_link);
  });

  it('no renderiza el botón "Ir a GitHub" cuando github_link está vacío', () => {
    render(<ProjectCard project={{ ...baseProject, github_link: '' }} />);
    expect(screen.queryByRole('link', { name: /ir a github/i })).not.toBeInTheDocument();
  });

  it('renderiza el botón "Ver demo en vivo" cuando live_link está presente', () => {
    const project = { ...baseProject, live_link: 'https://demo.example.com' };
    render(<ProjectCard project={project} />);
    const link = screen.getByRole('link', { name: /ver demo en vivo/i });
    expect(link).toHaveAttribute('href', 'https://demo.example.com');
  });

  it('no renderiza el botón "Ver demo en vivo" cuando live_link está vacío', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.queryByRole('link', { name: /ver demo en vivo/i })).not.toBeInTheDocument();
  });

  it('muestra el badge de destacado solo cuando is_featured es true', () => {
    const { rerender } = render(<ProjectCard project={{ ...baseProject, is_featured: true }} />);
    expect(screen.getByText(/destacado/i)).toBeInTheDocument();

    rerender(<ProjectCard project={{ ...baseProject, is_featured: false }} />);
    expect(screen.queryByText(/destacado/i)).not.toBeInTheDocument();
  });
});
