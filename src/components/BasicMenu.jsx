import React, { useState } from 'react';
import { styled } from '@/stitches.config';

// 🎨 Estilos con tokens VSCode Dark+
const MenuWrapper = styled('div', {
  position: 'relative',
  display: 'inline-block',
  textAlign: 'left',
  zIndex: 20,
});

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

const MenuList = styled('div', {
  position: 'absolute',
  right: 0,
  marginTop: '$2',
  width: '16rem',
  backgroundColor: '$surface',
  borderRadius: '$md',
  boxShadow: '$strong',
  border: '1px solid $border',
  padding: '$2 0',
  zIndex: 30,
});

const MenuItem = styled('a', {
  display: 'block',
  padding: '$2 $4',
  fontSize: '$sm',
  fontFamily: '$mono',
  color: '$syntaxKeyword',
  textDecoration: 'none',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: '$panel',
    color: '$syntaxFunction',
  },
});

export default function BasicMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <MenuWrapper>
      <MenuButton onClick={toggleMenu}>Menú</MenuButton>

      {isOpen && (
        <MenuList>
          <MenuItem href="#Sobre-mi">Sobre mí</MenuItem>
          <MenuItem href="#Proyectos">Projects</MenuItem>
          <MenuItem href="#Habilidades">Skills</MenuItem>
          <MenuItem href="#Contactame">Contacto</MenuItem>
          <MenuItem
            href={`${import.meta.env.VITE_API_BASE_URL}/api/schema/swagger-ui/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Swagger UI
          </MenuItem>
          <MenuItem
            href={`${import.meta.env.VITE_API_BASE_URL}/admin/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </MenuItem>
        </MenuList>
      )}
    </MenuWrapper>
  );
}
