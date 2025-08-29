import React from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';

const FooterCard = () => {
  const iconClasses = "text-gray-300 hover:text-teal-500 transition text-2xl";

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-lg font-bold">Mi Portafolio</h2>
        
        <div className="flex space-x-4">
          <a href="https://github.com/NicolasAndresCL" target="_blank" rel="noopener noreferrer">
            <FaGithub className={iconClasses} />
          </a>
          <a href="https://www.linkedin.com/in/nicolascano-leal" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={iconClasses} />
          </a>
          <a href="https://dev.to/nicolasandrescl" target="_blank" rel="noopener noreferrer">
            <FaDev className={iconClasses} />
          </a>
        </div>

        <p className="text-xs text-center">
          © 2025 Nicolás Andrés Cano Leal™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterCard;
