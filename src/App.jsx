import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import { styled } from '@/stitches.config';
import { Text } from '@radix-ui/themes';

// 🎨 Estilos visuales
const Wrapper = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$5',
  backgroundColor: '$background',
});

const Spinner = styled('div', {
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  border: '4px solid $syntaxFunction',
  borderTopColor: 'transparent',
  animation: 'spin 1s linear infinite',

  '@keyframes spin': {
    to: { transform: 'rotate(360deg)' },
  },
});

const ErrorText = styled(Text, {
  color: '$syntaxError',
  fontSize: '$lg',
  fontWeight: 'medium',
  textAlign: 'center',
});

const LoadingText = styled(Text, {
  color: '$muted',
  fontSize: '$lg',
  marginTop: '$3',
  textAlign: 'center',
});

export default function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, skillsRes, experiencesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects/`),
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/skills/`),
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/experience/`)
        ]);
        setProjects(projectsRes.data);
        setSkills(skillsRes.data);
        setExperiences(experiencesRes.data);
      } catch (err) {
        setError('No se pudieron cargar los datos (proyectos, habilidades o experiencia).');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Spinner />
        <LoadingText>Cargando datos...</LoadingText>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <ErrorText>{error}</ErrorText>
      </Wrapper>
    );
  }
  return <Home projects={projects} skills={skills} experiences={experiences} />;
}
