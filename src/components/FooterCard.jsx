import {
  Box,
  Flex,
  Text,
  Link,
  IconButton,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';

const FooterCard = () => (
  <Box bg="gray.900" color="gray.300" py={8}>
    <VStack spacing={4}>
      <Text fontSize="lg" fontWeight="bold">Mi Portafolio</Text>
      <HStack spacing={4}>
        <Link href="https://github.com/NicolasAndresCL" isExternal>
          <IconButton icon={<FaGithub />} aria-label="GitHub" />
        </Link>
        <Link href="https://www.linkedin.com/in/nicolascano-leal" isExternal>
          <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
        </Link>
        <Link href="https://dev.to/nicolasandrescl" isExternal>
          <IconButton icon={<FaDev />} aria-label="Dev.to" />
        </Link>
      </HStack>
      <Text fontSize="xs" textAlign="center">
        © 2025 Nicolás Andrés Cano Leal™. All Rights Reserved.
      </Text>
    </VStack>
  </Box>
);

export default FooterCard;
