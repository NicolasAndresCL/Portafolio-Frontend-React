import React from 'react';
import { styled } from '@/stitches.config';
import { Button } from '@/components/ui/Button';

// 🎨 Layout visual centrado
const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
  marginTop: '$5',
});

export default function MyButtonGroup() {
  return (
    <ButtonGroup>
      <Button
        as="a"
        href="https://www.linkedin.com/in/nicolas-andres-cano-leal/"
        target="_blank"
        rel="noopener noreferrer"
        variant="ghost"
        css={{ color: '$syntaxFunction' }}
      >
        LinkedIn
      </Button>

      <Button
        as="a"
        href="https://github.com/NicolasAndresCL"
        target="_blank"
        rel="noopener noreferrer"
        variant="ghost"
        css={{ color: '$syntaxVariable' }}
      >
        GitHub
      </Button>

      <Button
        as="a"
        href="https://dev.to/nicolasandrescl"
        target="_blank"
        rel="noopener noreferrer"
        variant="ghost"
        css={{ color: '$syntaxKeyword' }}
      >
        Dev.to
      </Button>
    </ButtonGroup>
  );
}
