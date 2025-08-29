import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, image, description, technologies, github_link } = project;

  return (
    <div className="w-full bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6 flex flex-col items-center space-y-6 hover:shadow-2xl transition-shadow duration-300">
      {/* Título con gradiente */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
        {title}
      </h2>

      {/* Imagen del proyecto */}
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-700 flex justify-center items-center">
        <img
          src={image}
          alt={`Imagen del proyecto ${title}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Descripción y tecnologías */}
      <div className="w-full space-y-4 text-center">
        <p className="text-gray-300 font-medium leading-relaxed">{description}</p>
        <p className="text-gray-400 text-sm font-medium">
          <span className="font-semibold">Tecnologías:</span> {technologies}
        </p>

        {/* Botón GitHub */}
        <a
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Ir a GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
