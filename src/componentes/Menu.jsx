export function Menu() {
    return (
      <div className="flex justify-end w-3/4 mt-6 space-x-12">
        <a href="#home" className="text-gray-700 text-lg font-bold hover:text-purple-700 transition duration-500">HOME</a>
        <a href="#about" className="text-gray-700 text-lg font-bold hover:text-purple-700 transition duration-500">ABOUT</a>
        <a href="#projects" className="text-gray-700 text-lg font-bold hover:text-purple-700 transition duration-500">PROYECTOS</a>
        <a href="#contact" className="text-gray-700 text-lg font-bold hover:text-purple-700 transition duration-500">CONTACTO</a>
      </div>
    )
  }