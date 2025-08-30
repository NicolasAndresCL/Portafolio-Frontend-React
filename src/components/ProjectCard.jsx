import React from 'react';
import { styled } from '@/stitches.config';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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

const ImageWrapper = styled('div', {
  width: '100%',
  aspectRatio: '16 / 9',
  borderRadius: '$md',
  overflow: 'hidden',
  backgroundColor: '$border',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ProjectImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const InfoBlock = styled('div', {
  width: '100%',
  textAlign: 'center',
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

export default function ProjectCard({ project }) {
  const { title, image, description, technologies, github_link } = project;

  return (
    <Card elevation="strong" css={{ width: '100%', alignItems: 'center', gap: '$5' }}>
      <GradientTitle>{title}</GradientTitle>

      <ImageWrapper>
        <ProjectImage src={image} alt={`Imagen del proyecto ${title}`} />
      </ImageWrapper>

      <InfoBlock>
        <Description>{description}</Description>
        <TechList>
          <strong>Tecnologías:</strong> {technologies}
        </TechList>
        <Button
          as="a"
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
        >
          Ir a GitHub
        </Button>
      </InfoBlock>
    </Card>
  );
}
