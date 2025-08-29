import { Button, ButtonGroup } from '@chakra-ui/react';

const MyButtonGroup = () => (
  <ButtonGroup variant="outline" spacing={4}>
    <Button as="a" href="https://www.linkedin.com/in/nicolas-andres-cano-leal/" target="_blank">LinkedIn</Button>
    <Button as="a" href="https://github.com/NicolasAndresCL" target="_blank">GitHub</Button>
    <Button as="a" href="https://dev.to/nicolasandrescl" target="_blank">Dev.to</Button>
  </ButtonGroup>
);

export default MyButtonGroup;
