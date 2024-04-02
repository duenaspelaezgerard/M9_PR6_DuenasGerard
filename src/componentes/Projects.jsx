import Project from "./Project"

function Projects(){
    return (
        <div id="projects" className="">
            <div className="container mx-auto text-center p-20">
                <div className="projects ">
                    <h2 className="font-extrabold text-5xl tracking-wider p-3">PROYECTOS</h2>
                    <div className="container mx-auto text-center bg-violet-600 rounded w-7 h-1.5 m-4"></div>
                    <div className="text-center text-xl text-gray-700 mb-14">
                        <p>Aquí encontrarás algunos de los proyectos personales y de clientes que he creado con cada proyecto</p>
                        <p>Contiene su propio caso de estudio</p>
                    </div>
                </div>
                <div className="p-3">
                    <Project></Project>
                </div>
            </div>
        </div>
    )
}
  
export default Projects