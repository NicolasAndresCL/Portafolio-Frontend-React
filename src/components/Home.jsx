import React from 'react';
import TituloCard from './TituloCard';
import ButtonGroup from './ButtonGroup';
import SobreMi from './SobreMi';
import CarruselProjects from './CarruselProjects';
import SkillsCarousel from './SkillsCarousel';
import ContactCard from './ContactCard';
import FooterCard from './FooterCard';

import { styled } from '@/stitches.config';

// 🎨 Estilos visuales
const Main = styled('main', {
  width: '100%',
  minHeight: '100vh',
  padding: '$6 $4',
  display: 'flex',
  flexDirection: 'column',
  gap: '$7',
  backgroundColor: '$background',
});

const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const SectionTitle = styled('h2', {
  fontSize: '$xl',
  fontWeight: 'bold',
  fontFamily: '$mono',
  textAlign: 'center',
  backgroundColor: '$panel',
  border: '1px solid $border',
  borderRadius: '$lg',
  boxShadow: '$soft',
  padding: '$4',
  maxWidth: '32rem',
  margin: '0 auto',
  color: '$syntaxFunction',
});

const PlaceholderText = styled('p', {
  textAlign: 'center',
  fontSize: '$sm',
  fontFamily: '$mono',
  color: '$syntaxComment',
});

export default function Home({ projects, skills }) {
  return (
    <Main>
      {/* Título principal */}
      <TituloCard />

      {/* Botones de contacto */}
      <ButtonGroup />

      {/* Sección Sobre mí */}
      <Section id="Sobre-mi">
        <SobreMi />
      </Section>

      {/* Sección Proyectos */}
      <Section id="Proyectos">
        <SectionTitle>Proyectos destacados</SectionTitle>
        {projects.length > 0 ? (
          <CarruselProjects projects={projects} />
        ) : (
          <PlaceholderText>¡Pronto añadiré más proyectos!</PlaceholderText>
        )}
      </Section>

      {/* Sección Habilidades */}
      <Section id="Habilidades">
        <SectionTitle>Habilidades destacadas</SectionTitle>
        {skills.length > 0 ? (
          <SkillsCarousel skills={skills} />
        ) : (
          <PlaceholderText>¡Pronto añadiré más habilidades!</PlaceholderText>
        )}
      </Section>

      {/* Sección Contacto */}
      <Section id="Contactame">
        <SectionTitle>Contacto</SectionTitle>
        <ContactCard />
      </Section>

      {/* Footer */}
      <FooterCard />
    </Main>
  );
}
