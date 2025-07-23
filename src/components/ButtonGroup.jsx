import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const MyButtonGroup = () => {
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button
        component="a"
        href="https://www.linkedin.com/in/nicolas-andres-cano-leal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Button>
      <Button
        component="a"
        href="https://github.com/NicolasAndresCL"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
      <Button
        component="a"
        href="https://dev.to/nicolasandrescl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dev.to
      </Button>
    </ButtonGroup>
    
  );
};

export default MyButtonGroup;
