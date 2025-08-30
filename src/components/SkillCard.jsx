import React from 'react';
import { styled } from '@/stitches.config';

// 🎨 Mapa de íconos por tecnología
const iconMap = {
  JavaScript: 'https://img.icons8.com/color/48/javascript.png',
  Python: 'https://img.icons8.com/color/48/python.png',
  Django: 'https://img.icons8.com/color/48/django.png',
  MySQL: 'https://img.icons8.com/color/48/mysql-logo.png',
  React: 'https://img.icons8.com/color/48/react-native.png',
  FastAPI: 'https://img.icons8.com/fluency/48/api.png',
  Git: 'https://img.icons8.com/color/48/git.png',
  SQLAlchemy: 'https://img.icons8.com/ios-filled/50/database.png',
  Docker: 'https://img.icons8.com/color/48/docker.png',
  Cmder: 'https://img.icons8.com/color/48/command-line.png',
  GitHub: 'https://img.icons8.com/color/48/github.png',
  Postman: 'https://img.icons8.com/color/48/postman.png',
  'Visual Studio Code': 'https://img.icons8.com/color/48/visual-studio-code-2019.png',
  DjangoRestFramework: 'https://img.icons8.com/color/48/django.png',
  Flask: 'https://img.icons8.com/color/48/flask.png',
  Fastapi: 'https://img.icons8.com/color/48/fastapi.png',
  Copilot: 'https://img.icons8.com/color/48/copilot.png',
  CSS: 'https://img.icons8.com/color/48/css3.png',
  HTML: 'https://img.icons8.com/color/48/html-5.png',
  TailwindCSS: 'https://img.icons8.com/color/48/tailwindcss.png',
  Bootstrap: 'https://img.icons8.com/color/48/bootstrap.png',
};

// 🎨 Estilos visuales
const Card = styled('div', {
  backgroundColor: '$surface',
  borderRadius: '$lg',
  boxShadow: '$strong',
  border: '1px solid $border',
  padding: '$4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '$3',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 0 50px rgba(0,0,0,0.5)',
  },
});

const Icon = styled('img', {
  width: '3rem',
  height: '3rem',
  objectFit: 'contain',
});

const Title = styled('h3', {
  fontSize: '$lg',
  fontWeight: 'bold',
  fontFamily: '$mono',
  color: '$syntaxFunction',
  margin: 0,
});

const Level = styled('p', {
  fontSize: '$sm',
  fontFamily: '$body',
  color: '$syntaxString',
  margin: 0,
});

const Category = styled('p', {
  fontSize: '$xs',
  fontFamily: '$mono',
  color: '$syntaxKeyword',
  margin: 0,
});

export default function SkillCard({ skill }) {
  const fallbackIcon = iconMap[skill.name] || 'https://img.icons8.com/color/48/source-code.png';
  const imageUrl = skill.logo || fallbackIcon;

  return (
    <Card>
      <Icon src={imageUrl} alt={`${skill.name} icon`} />
      <Title>{skill.name}</Title>
      <Level>{skill.level}</Level>
      <Category>{skill.category}</Category>
    </Card>
  );
}
