export function Avatar(){
    return(
        <div className="flex ml-4 mt-4 ">
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="/gerard dueñas.jpg" alt="Avatar" className="object-cover w-full h-full" />
            </div>
            <h1 className="mt-2 ml-4 text-gray-700 text-lg font-bold pt-1.5 hover:text-purple-700 transition duration-500">GERARD DUEÑAS</h1>
        </div>
    )
}