import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, image, description, technologies, github_link } = project;

  return (
    <div className="w-full bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center space-y-6 border border-slate-700">
      <div className="w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
          {title}
        </h2>
      </div>
      <div className="w-full aspect-video bg-slate-700 rounded-lg overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt={`Imagen del proyecto ${title}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="w-full space-y-4 text-center">
        <p className="text-slate-300 font-medium leading-relaxed">
          {description}
        </p>
        <p className="text-slate-400 text-sm font-medium">
          **Tecnologías:** {technologies}
        </p>
        <a
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold shadow-md transition transform hover:scale-105"
        >
          Ir a GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;