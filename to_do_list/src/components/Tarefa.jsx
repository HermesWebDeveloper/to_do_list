import { useState } from "react";


function Tarefa({tarefa}){
    

    return(
        <>
            <div className="my-3 flex flex-row items-center gap-2 border border-slate-800 rounded-lg px-3 py-2 w-[674px]">
                <div>
                    <input type="checkbox" checked={tarefa.status == 'concluido' ? true : false}></input>
                </div>
                <div className={tarefa.status == 'concluido' ? 'line-through' : ''}>
                    {tarefa.descricao}
                </div>
            </div>
        </>
    )
};

export default Tarefa;