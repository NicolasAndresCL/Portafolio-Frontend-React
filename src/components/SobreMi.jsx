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
  fontFamily: '$heading',
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
          Backend Engineer en Python con la mira puesta en SRE: construyo servicios pensando en cómo se operan, no solo en cómo se escriben.
        </Paragraph>
        <Paragraph>
          Desde marzo de 2026 soy el único desarrollador del equipo de operaciones (LiveOps/BizOps) de PedidosYa. Reemplazo procesos manuales por servicios Python testeados que corren desatendidos contra BigQuery, Google Sheets y sistemas internos: un bot de operaciones en tiempo real, un recolector de dossiers de incidencias con Django/DRF y una sincronización idempotente de datos.
        </Paragraph>
        <Paragraph>
          Llevo cada proyecto hasta producción con CI/CD (GitHub Actions y Jenkins), contenedores e infraestructura como código con Terraform, Kubernetes y Helm. Este portafolio es un ejemplo: Django + React, con CI, CD y PostgreSQL en la nube.
        </Paragraph>
        <Paragraph>
          Mi objetivo es Site Reliability Engineering: sistemas que escalan, se observan y se recuperan solos.
        </Paragraph>
        <Note>// Siempre aprendiendo, siempre refactorizando</Note>
      </Content>
    </Card>
  );
}
