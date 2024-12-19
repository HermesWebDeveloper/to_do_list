import { useEffect, useState } from "react";
import Tarefa from "./Tarefa";
import axios from "axios";

function ListaTarefas({setLoading, loading, tarefas, setTarefas}){

    if(loading){
        return <div className="dark:text-white">Carregando...</div>
    }

    return(
        <>
            <div className="">
                <ul>
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id}>
                            <Tarefa tarefa={tarefa} setLoading={setLoading} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default ListaTarefas;