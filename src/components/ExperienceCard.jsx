import React from 'react';
import { styled } from '@/stitches.config';
import { Card } from '@/components/ui/Card';

// 🎨 Estilos internos
const GradientTitle = styled('h2', {
  fontSize: '$xl',
  fontWeight: 'bold',
  textAlign: 'center',
  fontFamily: '$mono',
  backgroundImage: 'linear-gradient(to right, $syntaxFunction, $syntaxKeyword)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  margin: 0,
});

const Role = styled('p', {
  fontSize: '$base',
  fontFamily: '$mono',
  fontWeight: '600',
  color: '$syntaxFunction',
  textAlign: 'center',
  margin: 0,
});

const Meta = styled('p', {
  fontSize: '$sm',
  fontFamily: '$mono',
  color: '$syntaxComment',
  textAlign: 'center',
  margin: 0,
});

const InfoBlock = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const Description = styled('p', {
  fontSize: '$base',
  fontFamily: '$body',
  color: '$syntaxString',
  lineHeight: 1.6,
});

const TechList = styled('p', {
  fontSize: '$sm',
  fontFamily: '$mono',
  color: '$syntaxKeyword',
});

const HighlightList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const HighlightItem = styled('li', {
  fontSize: '$base',
  fontFamily: '$body',
  color: '$syntaxString',
  lineHeight: 1.5,
  paddingLeft: '$4',
  position: 'relative',

  '&::before': {
    content: '"▹"',
    position: 'absolute',
    left: 0,
    color: '$syntaxFunction',
  },
});

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
}

export default function ExperienceCard({ experience }) {
  const { company, role, location, start_date, end_date, is_current, summary, technologies, highlights } = experience;

  const rango = `${formatDate(start_date)} – ${is_current ? 'Presente' : formatDate(end_date)}`;

  return (
    <Card elevation="strong" css={{ width: '100%', gap: '$4' }}>
      <GradientTitle>{company}</GradientTitle>
      <Role>{role}</Role>
      <Meta>{location ? `${rango} · ${location}` : rango}</Meta>

      <InfoBlock>
        <Description>{summary}</Description>

        {technologies && (
          <TechList>
            <strong>Tecnologías:</strong> {technologies}
          </TechList>
        )}

        {highlights?.length > 0 && (
          <HighlightList>
            {highlights.map((highlight) => (
              <HighlightItem key={highlight.id}>{highlight.text}</HighlightItem>
            ))}
          </HighlightList>
        )}
      </InfoBlock>
    </Card>
  );
}
