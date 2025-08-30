import React from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import { styled } from '@/stitches.config';

// 🎨 Estilos con tokens VSCode Dark+
const Footer = styled('footer', {
  backgroundColor: '$background',
  padding: '$5 $3',
  borderTop: '1px solid $border',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
  textAlign: 'center',
});

const Title = styled('h2', {
  fontSize: '$lg',
  fontWeight: 'bold',
  fontFamily: '$mono',
  color: '$syntaxFunction',
});

const IconRow = styled('div', {
  display: 'flex',
  gap: '$3',
});

const IconLink = styled('a', {
  color: '$syntaxComment',
  fontSize: '1.5rem',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: '$accent',
  },
});

const Copyright = styled('p', {
  fontSize: '$xs',
  fontFamily: '$mono',
  color: '$muted',
});

export default function FooterCard() {
  return (
    <Footer>
      <Wrapper>
        <Title>Mi Portafolio</Title>

        <IconRow>
          <IconLink
            href="https://github.com/NicolasAndresCL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/nicolascano-leal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </IconLink>
          <IconLink
            href="https://dev.to/nicolasandrescl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dev.to"
          >
            <FaDev />
          </IconLink>
        </IconRow>

        <Copyright>
          © 2025 Nicolás Andrés Cano Leal™. All Rights Reserved.
        </Copyright>
      </Wrapper>
    </Footer>
  );
}
