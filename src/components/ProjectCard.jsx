import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-950 rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center">
      <h2 className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl text-indigo-100 text-center mb-2 tracking-tight">
         {project.title}
      </h2>
      <div className="flex justify-center items-center bg-gray-200 hover:bg-gray-100 h-48 w-full rounded-md overflow-hidden mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="h-full object-contain"
        />
      </div>

      <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <h3 className="text-lg font-bold text-sm text-indigo-100 text-center">Descripción: {project.description}</h3>

      <p className="text-lg font-bold text-indigo-300 text-center">Técnologias: ${project.technologies}</p>

        <a
          href={project.github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded shadow inline-block text-center"
        >
          Ir a Github
        </a>

      </div>
    </div>

  );
};

export default ProjectCard;

