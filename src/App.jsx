import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';
import Home from './components/Home';

function App() {
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
      <Box textAlign="center" py={10}>
        <Spinner size="xl" color="orange.400" />
        <Text mt={4}>Cargando datos...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="red.500" fontWeight="medium">{error}</Text>
      </Box>
    );
  }

  return <Home projects={projects} skills={skills} />;
}

export default App;
