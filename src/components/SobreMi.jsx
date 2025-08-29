import React from 'react';

const SobreMi = () => (
  <section className="bg-gray-900 text-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold">Sobre mí</h2>
      <p className="text-sm text-gray-300">
        Desarrollador backend autodidacta con vocación por la arquitectura modular, la escalabilidad y la documentación profesional. Me especializo en Django, DRF, FastAPI, Flask y APIs RESTful...
      </p>
      <p className="text-sm text-gray-300">
        En transición hacia data engineering, enfoco mis avances en soluciones limpias, testeables y listas para producción...
      </p>
    </div>
  </section>
);

export default SobreMi;
