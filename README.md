# Portafolio Frontend - React + Vite + Radix + Stitches + Reflex
============================================================

Este proyecto representa la interfaz moderna, desacoplada y visualmente profesional de mi portafolio técnico como Backend Developer. Desarrollado con **React**, **Vite**, **Radix Themes**, **Stitches** y **Reflex**, se conecta a una API REST construida con Django/DRF y expone mis proyectos, habilidades y formulario de contacto.

> **Notas importantes**:
>
> - Reemplaza la versión anterior basada en Django Templates y TailwindCSS.
> - Refactorizado con tokens semánticos, componentes reutilizables y estilo tipo VSCode Dark+.

## Tecnologías utilizadas

| Herramienta        | Uso principal                                      |
|--------------------|----------------------------------------------------|
| **React**          | Construcción de interfaz interactiva               |
| **Vite**           | Bundler moderno para desarrollo rápido             |
| **Radix Themes**   | Sistema de diseño accesible y escalable            |
| **Stitches**       | Estilado con tokens semánticos y tipografía técnica|
| **Reflex**         | Framework Python para frontend reactivo            |
| **Django DRF**     | Backend robusto con APIs RESTful                   |

## Migraciones recientes

- Migración completa de TailwindCSS a **Radix Themes + Stitches**
- Refactor visual con tokens tipo VSCode (`$syntaxFunction`, `$syntaxString`, etc.)
- Eliminación de dependencias innecesarias y código muerto
- Integración avanzada Reflex + Django DRF con WebSockets y CORS resueltos
- Componentes base (`Button`, `Card`, `Input`) reutilizables y escalables

## Componentes clave

- `TituloCard.jsx`: presentación principal con layout tipo editor
- `ProjectCard.jsx`: muestra proyectos con imagen, descripción y enlaces
- `SkillCard.jsx`: representa habilidades con íconos y colores semánticos
- `ContactCard.jsx`: formulario visual con validación y envío a backend
- `FooterCard.jsx`: enlaces a redes sociales y cierre profesional
- `BasicMenu.jsx`: navegación accesible con foco gestionado
- `SobreMi.jsx`: presentación personal con estilo técnico

## Conexión con el Backend

Este frontend se conecta al backend a través de los siguientes endpoints:

- `GET /api/projects/` → muestra proyectos
- `GET /api/skills/` → muestra habilidades
- `POST /api/contacto/` → envía mensaje del formulario de contacto

La variable `VITE_API_BASE_URL` se configura en `.env` para consumir la API correctamente.

## Vista referencial del portafolio

![Portafolio Preview](./public/portafolio.png)

## Instalación del proyecto
