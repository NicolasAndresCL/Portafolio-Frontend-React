import {
  Box,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import TituloCard from './TituloCard';
import MyButtonGroup from './ButtonGroup';
import SobreMi from './SobreMi';
import CarruselProjects from './CarruselProjects';
import SkillsCarousel from './SkillsCarousel';
import ContactCard from './ContactCard';
import FooterCard from './FooterCard';

const SectionTitle = ({ children }) => (
  <Box
    bg={useColorModeValue('white', 'gray.800')}
    border="1px"
    borderColor={useColorModeValue('gray.200', 'gray.700')}
    rounded="lg"
    shadow="md"
    p={6}
    textAlign="center"
    maxW="md"
    mx="auto"
  >
    <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('indigo.900', 'indigo.100')}>
      {children}
    </Text>
  </Box>
);

export default function Home({ projects, skills }) {
  return (
    <Box maxW="7xl" mx="auto" px={4} py={12}>
      <VStack spacing={16} align="stretch">
        <TituloCard />
        <MyButtonGroup />
        <Box id="Sobre-mi"><SobreMi /></Box>
        <Box id="Proyectos">
          <SectionTitle>Proyectos destacados</SectionTitle>
          {projects.length > 0 ? <CarruselProjects projects={projects} /> : <Text textAlign="center" color="gray.500">¡Pronto añadiré más proyectos!</Text>}
        </Box>
        <Box id="Habilidades">
          <SectionTitle>Habilidades destacadas</SectionTitle>
          {skills.length > 0 ? <SkillsCarousel skills={skills} /> : <Text textAlign="center" color="gray.500">¡Pronto añadiré más habilidades!</Text>}
        </Box>
        <Box id="Contactame">
          <SectionTitle>Contacto</SectionTitle>
          <ContactCard />
        </Box>
        <FooterCard />
      </VStack>
    </Box>
  );
}
