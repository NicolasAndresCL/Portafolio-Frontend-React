import React from 'react';
import TituloCard from './TituloCard';
import MyButtonGroup from './ButtonGroup';
import SobreMi from './SobreMi';
import CarruselProjects from './CarruselProjects';
import SkillsCarousel from './SkillsCarousel';
import ContactCard from './ContactCard';

const SectionTitle = ({ children }) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 text-center max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">{children}</h2>
  </div>
);

export default function Home({ projects, skills }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-16">
        <TituloCard />
        <MyButtonGroup />
        <div id="Sobre-mi"><SobreMi /></div>
        <div id="Proyectos">
          <SectionTitle>Proyectos destacados</SectionTitle>
          {projects.length > 0 ? (
            <CarruselProjects projects={projects} />
          ) : (
            <p className="text-center text-gray-500">¡Pronto añadiré más proyectos!</p>
          )}
        </div>
        <div id="Habilidades">
          <SectionTitle>Habilidades destacadas</SectionTitle>
          {skills.length > 0 ? (
            <SkillsCarousel skills={skills} />
          ) : (
            <p className="text-center text-gray-500">¡Pronto añadiré más habilidades!</p>
          )}
        </div>
        <div id="Contactame">
          <SectionTitle>Contacto</SectionTitle>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
