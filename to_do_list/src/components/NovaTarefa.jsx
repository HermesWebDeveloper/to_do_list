

function NovaTarefa(){

    return(
        <>
            <div className="flex flex-row border rounded-full border-black items-center">
                <div className="pr-3 pl-5 py-2 border-r-black border-r">
                    <button className="text-2xl">+</button>
                </div>
                <div className="py-2 px-3">
                    <input className="w-96 focus:outline-none" placeholder="Digite uma tarefa"></input>
                </div>
            </div>
        </>
    )
};

export default NovaTarefa;