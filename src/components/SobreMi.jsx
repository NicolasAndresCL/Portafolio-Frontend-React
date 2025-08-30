import React from 'react';
import { styled } from '@/stitches.config';
import { Card } from '@/components/ui/Card';

// 🎨 Estilos internos con tokens VSCode
const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const Title = styled('h2', {
  fontSize: '$xl',
  fontWeight: 'bold',
  fontFamily: '$mono',
  color: '$syntaxFunction',
  marginBottom: '$2',
});

const Paragraph = styled('p', {
  fontSize: '$base',
  fontFamily: '$body',
  color: '$syntaxString',
  lineHeight: 1.6,
});

const Note = styled('p', {
  fontSize: '$sm',
  fontFamily: '$mono',
  color: '$syntaxComment',
  marginTop: '$2',
});

export default function SobreMi() {
  return (
    <Card elevation="soft" css={{ maxWidth: '48rem', margin: '0 auto' }}>
      <Content>
        <Title>Sobre mí</Title>
        <Paragraph>
          Desarrollador backend autodidacta con vocación por la arquitectura modular, la escalabilidad y la documentación profesional. Me especializo en Django, DRF, FastAPI, Flask y APIs RESTful.
        </Paragraph>
        <Paragraph>
          En transición hacia data engineering, enfoco mis avances en soluciones limpias, testeables y listas para producción.
        </Paragraph>
        <Note>// Siempre aprendiendo, siempre refactorizando</Note>
      </Content>
    </Card>
  );
}
