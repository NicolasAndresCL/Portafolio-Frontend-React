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

const ErrorBanner = styled('div', {
  padding: '$2 $4',
  color: '$syntaxError',
  backgroundColor: '$surface',
  borderBottom: '1px solid $border',
  fontSize: '$sm',
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
      // allSettled: si falla un endpoint (o la API entera), el resto del sitio
      // —presentación, contacto y descarga del CV— sigue visible.
      const base = import.meta.env.VITE_API_BASE_URL;
      const results = await Promise.allSettled([
        axios.get(`${base}/api/projects/`),
        axios.get(`${base}/api/skills/`),
        axios.get(`${base}/api/experience/`),
      ]);
      // La API puede responder paginada ({ results: [...] }) o como lista simple.
      const unwrap = (res) => (res.status === 'fulfilled' ? res.value.data?.results ?? res.value.data : []);
      const [projectsRes, skillsRes, experiencesRes] = results;
      setProjects(unwrap(projectsRes));
      setSkills(unwrap(skillsRes));
      setExperiences(unwrap(experiencesRes));

      const failed = results.filter((res) => res.status === 'rejected');
      if (failed.length) {
        setError('No se pudo cargar parte del contenido (proyectos, habilidades o experiencia).');
        failed.forEach((res) => console.error(res.reason));
      }
      setLoading(false);
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

  return (
    <>
      {error && <ErrorBanner role="alert">{error}</ErrorBanner>}
      <Home projects={projects} skills={skills} experiences={experiences} />
    </>
  );
}
