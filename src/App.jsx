import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, skillsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects/`),
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/skills/`)
        ]);
        setProjects(projectsRes.data);
        setSkills(skillsRes.data);
      } catch (err) {
        setError('No se pudieron cargar los datos (proyectos o habilidades).');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
        <p className="mt-4 text-gray-300 text-lg">Cargando datos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-10">
        <p className="text-red-500 font-medium text-lg">{error}</p>
      </div>
    );
  }

  return <Home projects={projects} skills={skills} />;
}
