

function NovaTarefa(){

    return(
        <>
            <div className="flex flex-row border rounded-full border-black items-center">
                <div className="pr-3 pl-5 py-1 border-r-black border-r">
                    <button className="text-2xl">+</button>
                </div>
                <div className="px-3">
                    <input className="w-[600px] focus:outline-none" placeholder="Digite uma tarefa"></input>
                </div>
            </div>
        </>
    )
};

export default NovaTarefa;