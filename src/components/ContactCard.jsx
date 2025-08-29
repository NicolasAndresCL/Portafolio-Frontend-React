import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const ContactCard = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // lógica de envío
  };

  return (
    <Box bg="gray.900" color="white" p={8} rounded="xl" shadow="md">
      <VStack spacing={6} align="stretch">
        <Text fontSize="sm" color="gray.300">
          ¿Tienes preguntas o quieres colaborar? ¡Escríbeme!
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mensaje</FormLabel>
              <Textarea name="message" value={formData.message} onChange={handleChange} rows={5} />
            </FormControl>
            <Button type="submit" colorScheme="teal">Enviar mensaje</Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default ContactCard;
