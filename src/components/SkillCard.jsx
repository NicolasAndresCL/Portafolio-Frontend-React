import React from 'react';

const iconMap = {
  JavaScript: "https://img.icons8.com/color/48/javascript.png",
  Python: "https://img.icons8.com/color/48/python.png",
  Django: "https://img.icons8.com/color/48/django.png",
  MySQL: "https://img.icons8.com/color/48/mysql-logo.png",
  React: "https://img.icons8.com/color/48/react-native.png",
  FastAPI: "https://img.icons8.com/fluency/48/api.png",
  Git: "https://img.icons8.com/color/48/git.png",
  SQLAlchemy: "https://img.icons8.com/ios-filled/50/database.png",
  Docker: "https://img.icons8.com/color/48/docker.png",
  Cmder: "https://img.icons8.com/color/48/command-line.png",
  GitHub: "https://img.icons8.com/color/48/github.png",
  Postman: "https://img.icons8.com/color/48/postman.png",
  "Visual Studio Code": "https://img.icons8.com/color/48/visual-studio-code-2019.png",
  DjangoRestFramework: "https://img.icons8.com/color/48/django.png",
  Flask: "https://img.icons8.com/color/48/flask.png",
  Fastapi: "https://img.icons8.com/color/48/fastapi.png",
  Copilot: "https://img.icons8.com/color/48/copilot.png",
  CSS: "https://img.icons8.com/color/48/css3.png",
  HTML: "https://img.icons8.com/color/48/html-5.png",
  TailwindCSS: "https://img.icons8.com/color/48/tailwindcss.png",
  Bootstrap: "https://img.icons8.com/color/48/bootstrap.png",
};

const SkillCard = ({ skill }) => {
  const fallbackIcon = iconMap[skill.name] || "https://img.icons8.com/color/48/source-code.png";
  const imageUrl = skill.logo || fallbackIcon;

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6 flex flex-col items-center text-center space-y-4 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      {/* Icono */}
      <img
        src={imageUrl}
        alt={`${skill.name} icon`}
        className="w-12 h-12"
      />
      {/* Nombre */}
      <h2 className="text-orange-500 font-bold text-lg">{skill.name}</h2>
      {/* Nivel */}
      <p className="text-gray-400 text-sm font-medium">{skill.level}</p>
      {/* Categoría */}
      <p className="text-gray-500 text-xs">{skill.category}</p>
    </div>
  );
};

export default SkillCard;
