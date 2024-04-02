export function About(){
    return(
        <div className="mx-auto p-4" id="about">

                <div className="text-center">
                    <h1 className="mt-16 font-bold text-5xl">ABOUT ME</h1>
                    <div className="border-b-8 border-violet-600 w-8 mx-auto rounded-full mb-5"></div>
                    <p className="text-gray-500 mb-4 text-lg text-center">Aquí encontrarás más información sobre mí, lo que hago, y mis habilidades 
                        actuales sobre todo en términos de programación y tecnología
                        ¡Conóceme!</p>
                </div>

                <div className="flex p-5 m-12">
                    <div className="text-2xl mt-2  w-1/2 ml-5 ">
                        <h3 className=" text-black font-bold text-3xl mb-9">Get to know me!</h3>

                        <p className="text-gray-500 mb-4 mr-2  text-lg">
                            Soy un <strong>Desarrollador Web enfocado en el Frontend</strong> construyendo y gestionando el frontend de sitios web 
                            y aplicaciones web que conducen al éxito del producto en general. 
                            Echa un vistazo a algunos de mis trabajos en la sección de <strong>Proyectos</strong>.
                        </p>

                        <p className="text-gray-500 mb-4  text-lg">                       
                            También me gusta compartir contenido relacionado con las cosas que he aprendido a lo largo de los años en <strong>Desarrollo Web</strong>, para que pueda ayudar a 
                            otras personas de la comunidad de desarrollo. No dudes en conectarte o seguirme en mi <a className="text-violet-600 decoration-violet-700 underline" href="#"><strong>Linkedin</strong></a> y <a className="text-violet-600 decoration-violet-700 underline" href="#"><strong>Instagram</strong></a>, 
                            donde publico contenido útil relacionado con el Desarrollo Web y la Programación.
                        </p>

                        <p className="text-gray-500 mb-4  text-lg">
                            Estoy abierto a oportunidades de <strong>empleo</strong> donde pueda contribuir, aprender y crecer. 
                            Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en <strong>contactarme</strong>.
                        </p>

                        <button className="py-5 px-14 mt-4 font-bold text-white bg-violet-600 rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50">
                            CONTACTO
                        </button>

                    </div>

                    <div className="mt-2  w-1/2 ml-5">
                        <h3 className="text-black font-bold text-3xl mb-9">My Skills</h3>
                        <div className="flex flex-wrap gap-4 mt-8 pr-64">
                            <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">HTML</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">CSS</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">JavaScript</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">React</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">Wordpress</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">PHP</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">SASS</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">GIT</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">Github</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">Responsive Design</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">SEO</div>
                                <div className="p-2 rounded bg-gray-200 text-center text-gray-700 font-semibold text-lg">Terminal</div>
                            </div>
                    </div>
                </div>
            </div>
           
    )
}