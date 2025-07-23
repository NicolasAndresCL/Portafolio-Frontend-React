import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';

// Importa tus componentes
import ProjectCard from './components/ProjectCard';
import TituloCard from './components/TituloCard';
import FooterCard from './components/FooterCard';
import SkillCard from './components/SkillCard';
import MyButtonGroup from './components/ButtonGroup';
import SobreMi from './components/SobreMi'; 
import ContactCard from './components/ContactCard';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]); // <--- NUEVO ESTADO PARA HABILIDADES
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
    <div className="p-8 ">
      <div className="mb-8">
      <TituloCard />
      </div>
      <div className="mb-8"><MyButtonGroup /></div>
      <div id="Sobre-mi" className="mb-8"><SobreMi /></div>
      <h1 className="block center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mb-6">Proyectos</h1>
      <div id="Proyectos" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.length > 0 ? ( 
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">¡Pronto añadiré más proyectos!</p>
        )}
      </div>

      <h1 className="block center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto my-6">Habilidades</h1> {/* Título para Habilidades */}
      <div id="Habilidades" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Puedes ajustar el grid para habilidades */}
        {skills.length > 0 ? ( 
          skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} /> 
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">¡Pronto añadiré más habilidades!</p>
        )}
      </div>
      <div id="Contactame" className="mt-8">
        <h1 className="block center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mb-6">Contacto</h1>
        <ContactCard />
      </div>
    
      <div className="mt-8">
      <FooterCard />
      </div>
    </div>
  );
}

export default App;