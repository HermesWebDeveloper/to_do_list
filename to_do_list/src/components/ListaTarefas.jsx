import { useEffect, useState } from "react";
import Tarefa from "./Tarefa";
import axios from "axios";

function ListaTarefas({reload, setReload}){

    const [lista_tarefas, setLista_tarefas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchTarefas = async () => {
            try {
                const response = await axios.get('https://back-to-do-list.onrender.com/v1/tarefas/');
                setLista_tarefas(response.data);
                setReload(false);
                setLoading(false);
            } catch (error) {
                console.log('Erro ao buscar tarefas: ', error);
            }
        }

        fetchTarefas();
    }, [reload]);

    if(loading){
        return <div>Carregando...</div>
    }

    return(
        <>
            <div>
                <ul>
                    {lista_tarefas.map((tarefa) => (
                        <Tarefa tarefa={tarefa} key={tarefa.id} setReload={setReload}/>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default ListaTarefas;