import React from 'react';
import BasicMenu from './BasicMenu';

export default function TituloCard() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 lg:pt-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-800 shadow-2xl border border-slate-700">
          <svg
            viewBox="0 0 1084 1080"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 w-64 h-64 sm:w-80 sm:h-80 -translate-y-1/2 -translate-x-1/2 sm:left-full sm:-ml-40 lg:left-1/2 lg:ml-0 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#hero-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="hero-gradient">
                <stop stopColor="#F97316" /> {/* Orange-500 */}
                <stop offset={1} stopColor="#EA580C" /> {/* Orange-600 */}
              </radialGradient>
            </defs>
          </svg>
          <div className="relative z-10 px-4 sm:px-8 lg:flex lg:gap-x-16 lg:px-16 py-12 sm:py-16">
            <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0 space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Portafolio de <br />Nicolás Andrés Cano Leal
              </h1>
              <p className="text-base sm:text-lg text-slate-300">
                Desarrollador Backend Python con experiencia en la construcción de APIs robustas y escalables.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start">
                <BasicMenu />
                <a
                  href="/NicolasCano_BackendDeveloper_CV.pdf"
                  download
                  className="text-base sm:text-lg font-bold text-orange-500 hover:text-orange-400 transition transform hover:scale-105"
                >
                  Descargar CV <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-0 lg:flex-shrink-0">
              <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl ring-1 ring-slate-700 shadow-xl w-full max-w-xs sm:max-w-sm">
                <img
                  src="/static/perfil-foto-nc.png"
                  alt="Foto de Nicolás Cano"
                  className="rounded-full mx-auto w-24 h-24 sm:w-32 sm:h-32 object-cover border-4 border-orange-500 shadow-md"
                />
                <h2 className="text-center text-white mt-4 sm:mt-6 text-lg sm:text-xl font-bold">
                  Nicolás Cano
                </h2>
                <p className="text-center text-orange-500 text-xs sm:text-sm mt-2 font-medium">
                  Backend & Data Engineering
                </p>
                <p className="text-center text-slate-400 text-xs mt-2">
                  Arquitectura modular, escalabilidad y documentación impecable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}