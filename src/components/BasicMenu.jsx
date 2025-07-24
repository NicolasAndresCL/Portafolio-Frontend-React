import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}><a
                href="#Sobre-mi"
                className="nav-item rounded-md"
              >
                {' '}
                Sobre mí{' '}
              </a></MenuItem>
        <MenuItem onClick={handleClose}><a
                href="#Proyectos"
                className="nav-item rounded-md"
              >
                {' '}
                Projects{' '}
              </a></MenuItem>
        <MenuItem onClick={handleClose}><a
                href="#Habilidades"
                className="nav-item rounded-md "
              >
                {' '}
                Skills{' '}
              </a></MenuItem>
        <MenuItem onClick={handleClose}><a
                href="#Contactame"
                className="nav-item rounded-md"
              >
                {' '}
                Contacto{' '}
              </a></MenuItem>
        <MenuItem onClick={handleClose}><a
                href={`${import.meta.env.VITE_API_BASE_URL}/api/schema/swagger-ui`}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item rounded-md"
                
              >
                {' '}
                Swagger Ui{' '}
              </a></MenuItem>
        <MenuItem onClick={handleClose}><a
                target="_blank"
                rel="noopener noreferrer"
                href={`${import.meta.env.VITE_API_BASE_URL}/admin/`}
                className="nav-item rounded-md"
              >
                {' '}
                Admin{' '}
              </a></MenuItem>
      </Menu>
    </div>
  );
}
