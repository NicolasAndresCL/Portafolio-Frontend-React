import React, { useState } from 'react';

const BasicMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Menú
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a href="#Sobre-mi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sobre mí</a>
            <a href="#Proyectos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
            <a href="#Habilidades" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Skills</a>
            <a href="#Contactame" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contacto</a>
            <a href={`${import.meta.env.VITE_API_BASE_URL}/api/schema/swagger-ui/`} target="_blank" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Swagger UI</a>
            <a href={`${import.meta.env.VITE_API_BASE_URL}/admin/`} target="_blank" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicMenu;
