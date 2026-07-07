import React from 'react';
import { styled } from '@/stitches.config';
import ExperienceCard from './ExperienceCard';

// 🎨 Estilos con tokens VSCode Dark+
const Section = styled('section', {
  width: '100%',
  backgroundColor: '$background',
  padding: '$5 $3',
});

const Container = styled('div', {
  maxWidth: '96rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
});

const CardWrapper = styled('div', {
  width: '100%',
  maxWidth: '48rem',
});

export default function Experience({ experiences }) {
  return (
    <Section>
      <Container>
        {experiences.map((experience) => (
          <CardWrapper key={experience.id}>
            <ExperienceCard experience={experience} />
          </CardWrapper>
        ))}
      </Container>
    </Section>
  );
}
