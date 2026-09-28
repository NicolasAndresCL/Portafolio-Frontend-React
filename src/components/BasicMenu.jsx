import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '@/stitches.config';

// Menú sobre la primitiva de Radix (sin estilos): el posicionamiento lo calcula Radix con
// detección de colisiones, así que el panel se reubica para no salir de la pantalla en
// celular y tablet vertical. Antes era un div con `position: absolute; right: 0` de 16rem
// anclado a un botón pegado al borde izquierdo: se salía ~120 px en un celular.
// Además aporta cierre al elegir, con Escape o tocando fuera, foco y navegación por teclado
// y roles ARIA (menu / menuitem).

// 🎨 Estilos con tokens VSCode Dark+
const MenuButton = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$2 $4',
  fontSize: '$base',
  fontWeight: '600',
  fontFamily: '$mono',
  color: '$syntaxFunction',
  backgroundColor: '$panel',
  border: '1px solid $border',
  borderRadius: '$md',
  boxShadow: '$soft',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, box-shadow 0.2s ease',

  '&:hover': {
    backgroundColor: '$surface',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $colors$accent',
  },
});

const MenuList = styled(DropdownMenu.Content, {
  // Nunca más ancho que el espacio libre que calcula Radix (celulares de 320 px).
  width: '16rem',
  maxWidth: 'var(--radix-dropdown-menu-content-available-width)',
  maxHeight: 'var(--radix-dropdown-menu-content-available-height)',
  overflowY: 'auto',
  backgroundColor: '$surface',
  borderRadius: '$md',
  boxShadow: '$strong',
  border: '1px solid $border',
  padding: '$2 0',
  zIndex: 30,
});

const MenuItem = styled(DropdownMenu.Item, {
  display: 'block',
  padding: '$2 $4',
  fontSize: '$sm',
  fontFamily: '$mono',
  color: '$syntaxKeyword',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  // Radix marca con data-highlighted el ítem activo (hover o teclado).
  '&:hover, &[data-highlighted]': {
    backgroundColor: '$panel',
    color: '$syntaxFunction',
  },
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const LINKS = [
  { href: '#Sobre-mi', label: 'Sobre mí' },
  { href: '#Experiencia', label: 'Experiencia' },
  { href: '#Proyectos', label: 'Projects' },
  { href: '#Habilidades', label: 'Skills' },
  { href: '#Contactame', label: 'Contacto' },
  { href: `${API_BASE_URL}/api/schema/swagger-ui/`, label: 'Swagger UI', external: true },
  { href: `${API_BASE_URL}/admin/`, label: 'Admin', external: true },
];

export default function BasicMenu() {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <MenuButton>Menú</MenuButton>
      </DropdownMenu.Trigger>

      {/* Portal: el panel se monta en <body> y no lo recorta ningún contenedor. */}
      <DropdownMenu.Portal>
        <MenuList align="start" sideOffset={8} collisionPadding={12}>
          {LINKS.map(({ href, label, external }) => (
            <MenuItem key={href} asChild>
              <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
                {label}
              </a>
            </MenuItem>
          ))}
        </MenuList>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
