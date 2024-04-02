function Contact(){
    return (
        <div id="contact" className="bg-hexagon2 p-28">
            <div className="container mx-auto text-center">
                <div className="projects ">
                    <h2 className="font-extrabold text-5xl tracking-wider p-3">CONTACTO</h2>
                    <div className="container mx-auto text-center bg-violet-600 rounded w-7 h-1.5 m-4"></div>
                    <div className="text-center text-xl text-gray-700 mb-14">
                        <p>No dude en ponerse en contacto conmigo, enviando el siguiente formulario y me pondré en contacto tan pronto como sea</p>
                        <p>posible</p>
                    </div>
                </div>
                <div className="container mx-auto bg-white rounded-md shadow-lg w-7/12 m-10">
                    <div className="p-8">
                        <form className="mt-4">
                            <div className="mb-10">
                                <label className="block text-gray-500 text-base font-bold mb-2 text-start" htmlFor="name">Nombre</label>
                                <input className="appearance-none border rounded w-full p-5 bg-gray-100 text-gray-800 font-semibold leading-tight focus:outline-none " id="name" type="text" placeholder="Introduce tu nombre" />
                            </div>
                            <div className="mb-10">
                                <label className="block text-gray-500 text-base font-bold mb-2 text-start" htmlFor="email">Email</label>
                                <input className="appearance-none border rounded w-full p-5 bg-gray-100 text-gray-800 font-semibold leading-tight focus:outline-none " id="email" type="email" placeholder="Introduce tu email" />
                            </div>
                            <div className="mb-10">
                                <label className="block text-gray-500 text-base font-bold mb-2 text-start" htmlFor="message">Mensaje</label>
                                <textarea className="appearance-none border rounded w-full p-5 bg-gray-100 text-gray-800 font-semibold leading-tight h-56 focus:outline-none " id="message" placeholder="Introduce tu mensaje"></textarea>
                            </div>
                            <div className="flex items-center justify-end">
                                <button className="bg-violet-600 my-3 py-4 px-12 rounded-md uppercase text-white font-bold text-base shadow-xl tracking-wider w-48" type="button">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default Contact