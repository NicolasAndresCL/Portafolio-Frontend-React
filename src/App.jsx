import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';

// Importa tus componentes
import ProjectCard from './components/ProjectCard';
import CarruselProjects from './components/CarruselProjects'; 
import TituloCard from './components/TituloCard';
import FooterCard from './components/FooterCard';
import SkillCard from './components/SkillCard';
import SkillsCarousel from './components/SkillsCarousel';
import MyButtonGroup from './components/ButtonGroup';
import SobreMi from './components/SobreMi'; 
import ContactCard from './components/ContactCard';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const projectsResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects/`);
        console.log("✅ Respuesta de la API (Proyectos):", projectsResponse.data);
        setProjects(projectsResponse.data);

        const skillsResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/skills/`);
        console.log("✅ Respuesta de la API (Habilidades):", skillsResponse.data);
        setSkills(skillsResponse.data); 

      } catch (err) {
        setError('No se pudieron cargar los datos (proyectos o habilidades).');
        console.error("❌ Error al hacer fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  console.log("📦 Estado actual de projects:", projects); 
  console.log("📦 Estado actual de skills:", skills); 

  if (loading) return <div>Cargando datos...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="p-8">
      {/* Título */}
      <div className="mb-8">
        <TituloCard />
      </div>

      {/* Botones */}
      <div className="mb-8">
        <MyButtonGroup />
      </div>

      {/* Sobre mí */}
      <div id="Sobre-mi" className="mb-8">
        <SobreMi />
      </div>

      {/* Proyectos */}
      <h1 className="block center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mb-6">
        Proyectos destacados
      </h1>
      <div id="Proyectos">
        {projects.length > 0 ? (
          <CarruselProjects projects={projects} />
        ) : (
          <p className="text-center text-gray-500">¡Pronto añadiré más proyectos!</p>
        )}
      </div>

      {/* Habilidades */}
      <h1 className="block center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto my-6">
        Habilidades destacadas
      </h1>
      <div id="Habilidades">
        {skills.length > 0 ? (
          <SkillsCarousel skills={skills} />
        ) : (
          <p className="text-center text-gray-500">¡Pronto añadiré más habilidades!</p>
        )}
      </div>

      {/* Contacto */}
      <div id="Contactame" className="mt-8">
        <h1 className="block center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mb-6">
          Contacto
        </h1>
        <ContactCard />
      </div>

      {/* Footer */}
      <div className="mt-8">
        <FooterCard />
      </div>
    </div>
  );
}

export default App;
