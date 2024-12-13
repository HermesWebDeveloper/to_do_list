import { useEffect, useState } from "react";
import Tarefa from "./Tarefa";
import axios from "axios";

function ListaTarefas({loading, setReload, tarefas, setTarefas}){

    if(loading){
        return <div className="dark:text-white">Carregando...</div>
    }

    return(
        <>
            <div className="">
                <ul>
                    {tarefas.map((tarefa) => (
                        <Tarefa tarefa={tarefa} key={tarefa.id} setTarefas={setTarefas} tarefas={tarefas} setReload={setReload}/>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default ListaTarefas;