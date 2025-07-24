import BasicMenu from "./BasicMenu";


export default function Example() {
  return (
      <div className="mx-auto max-w-7xl py-0 sm:px-0 sm:py-0 lg:px-0">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1084 1080"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Portafolio de <br />Nicolás Andrés Cano Leal
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              Desarrollador Backend Python con experiencia en la construcción de APIs robustas y escalables.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <div className="flex items-center gap-x-4">
                <BasicMenu />
              </div>
              <a
                href="/NicolasCano_BackendDeveloper_CV.pdf"
                download="NicolasCano_BackendDeveloper_CV.pdf"
                className="text-sm/6 font-semibold text-white hover:text-gray-100"
              >
                Descargar CV
                <span aria-hidden="true">→</span>
              </a>

            </div>
          </div>
          <div className="flex justify-center items-center hover:bg-gray-800 bg-gray-950">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl ring-1 ring-white/20 shadow-md">
              <img
                alt="App screenshot"
                src="/static/perfil-foto-nc.png"
                width={400}
                height={250}
                className="rounded-md mx-auto"
              />
              <h2 className="text-center text-white mt-4 text-lg font-semibold">
                Nicolás Cano • Backend & Data Engineering
              </h2>
              <p className="text-center text-gray-300 text-sm mt-2">
                Arquitectura modular, escalabilidad y documentación impecable.
              </p>
            </div>
          </div>

        

        </div>
      </div>
  )
}