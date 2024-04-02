export function Home(){
    return(
        <div className="bg-hexagon mt-12 pt-12 relative flex flex-col items-center justify-center" id="home">
                <div className=" absolute left-0 top-1/4 mt-24  py-5 flex flex-col justify-center items-start px-4 bg-white">
                    <a href="#" className="mb-4">
                        <img src="/linkedin-dark.svg" alt="Logo 1" className="w-12 h-12" />
                    </a>
                    <a href="#" className="mb-4">
                        <img src="/twitter-dark.svg" alt="Logo 2" className="w-12 h-12" />
                    </a>
                    <a href="#" className="mb-4">
                        <img src="/yt-dark.svg" alt="Logo 3" className="w-12 h-12" />
                    </a>
                    <a href="https://github.com/duenaspelaezgerard?tab=repositories" className="mb-4">
                        <img src="/github-dark.svg" alt="Logo 4" className="w-12 h-12" />
                    </a>
                    <a href="#">
                        <img src="/book-dark.svg" alt="Logo 5" className="w-12 h-12" />
                    </a>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-black font-bold text-6xl text-center">HOLA, SOY GERARD DUEÑAS</h1>
                    <h5 className="text-gray-700 text-2xl text-center mt-6">
                        Desarrollador web orientado a resultados, construyendo y gestionando sitios web y aplicaciones web que conducen al éxito del producto en general.
                    </h5>
                    <div className="text-center mt-6">
                        <button className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                            <a href="#projects" >PROYECTOS</a>
                        </button>
                    </div>
                </div>
                <div className="rounded-xl h-10 w-6 border-2 border-slate-700 mb-8 absolute bottom-0">
                    <div style={{animation: 'bolita 1.2s infinite'}} className="w-1.5 h-1.5 rounded-lg bg-slate-500 mx-auto"></div>
                </div>
        </div>       
    )
}