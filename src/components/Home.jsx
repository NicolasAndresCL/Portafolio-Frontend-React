import React from 'react';
import TituloCard from './TituloCard';
import MyButtonGroup from './ButtonGroup';
import SobreMi from './SobreMi';
import CarruselProjects from './CarruselProjects';
import SkillsCarousel from './SkillsCarousel';
import ContactCard from './ContactCard';

const SectionTitle = ({ children }) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 text-center max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">{children}</h2>
  </div>
);

export default function Home({ projects, skills }) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Título principal */}
      <TituloCard />

      {/* Botones de contacto */}
      <MyButtonGroup />

      {/* Sección Sobre mí */}
      <section id="Sobre-mi">
        <SobreMi />
      </section>

      {/* Sección Proyectos */}
      <section id="Proyectos" className="space-y-6">
        <SectionTitle>Proyectos destacados</SectionTitle>
        {projects.length > 0 ? (
          <CarruselProjects projects={projects} />
        ) : (
          <p className="text-center text-gray-500">¡Pronto añadiré más proyectos!</p>
        )}
      </section>

      {/* Sección Habilidades */}
      <section id="Habilidades" className="space-y-6">
        <SectionTitle>Habilidades destacadas</SectionTitle>
        {skills.length > 0 ? (
          <SkillsCarousel skills={skills} />
        ) : (
          <p className="text-center text-gray-500">¡Pronto añadiré más habilidades!</p>
        )}
      </section>

      {/* Sección Contacto */}
      <section id="Contactame" className="space-y-6">
        <SectionTitle>Contacto</SectionTitle>
        <ContactCard />
      </section>
    </main>
  );
}
