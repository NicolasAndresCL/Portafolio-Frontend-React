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
          Desarrollador Backend Python que empezó construyendo APIs y hoy mira el panorama completo: no solo cómo se construye un sistema, sino cómo se opera, se automatiza y se mantiene en pie bajo carga real.
        </Paragraph>
        <Paragraph>
          Me especializo en Django y DRF para construir APIs limpias y bien documentadas. En mi día a día en operaciones (LiveOps/BizOps) convierto necesidades reales en herramientas propias —automatización con Docker y Jenkins, tableros analíticos con Streamlit— porque creo que el mejor software nace de un problema concreto que alguien necesita resolver.
        </Paragraph>
        <Paragraph>
          Mi camino apunta hacia la ingeniería de confiabilidad (SRE): sistemas que escalan, se observan y se recuperan solos.
        </Paragraph>
        <Note>// Siempre aprendiendo, siempre refactorizando</Note>
      </Content>
    </Card>
  );
}
