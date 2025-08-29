import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const SobreMi = () => (
  <Box bg="gray.900" color="white" rounded="xl" shadow="md" p={8}>
    <VStack spacing={4} align="start">
      <Heading size="md">Sobre mí</Heading>
      <Text fontSize="sm" color="gray.300">
        Desarrollador backend autodidacta con vocación por la arquitectura modular, la escalabilidad y la documentación profesional. Me especializo en Django, DRF, FastAPI, Flask y APIs RESTful...
      </Text>
      <Text fontSize="sm" color="gray.300">
        En transición hacia data engineering, enfoco mis avances en soluciones limpias, testeables y listas para producción...
      </Text>
    </VStack>
  </Box>
);

export default SobreMi;
