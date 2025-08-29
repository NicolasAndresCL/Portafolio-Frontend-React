import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';

const BasicMenu = () => (
  <Menu>
    <MenuButton as={Button} colorScheme="teal">
      Menú
    </MenuButton>
    <MenuList>
      <MenuItem as="a" href="#Sobre-mi">Sobre mí</MenuItem>
      <MenuItem as="a" href="#Proyectos">Projects</MenuItem>
      <MenuItem as="a" href="#Habilidades">Skills</MenuItem>
      <MenuItem as="a" href="#Contactame">Contacto</MenuItem>
      <MenuItem as="a" href={`${import.meta.env.VITE_API_BASE_URL}/api/schema/swagger-ui/`} target="_blank">Swagger UI</MenuItem>
      <MenuItem as="a" href={`${import.meta.env.VITE_API_BASE_URL}/admin/`} target="_blank">Admin</MenuItem>
    </MenuList>
  </Menu>
);

export default BasicMenu;
