import axios from "axios";
import { useEffect, useState } from "react";


function Tarefa({tarefa, setReload}){
    
    const [checked, setChecked] = useState(tarefa.checked ?? false)
    const [isDelet, setIsDelet] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    useEffect( () => {
        if (!tarefa || !tarefa.id || isDelet) return;

        const atualizarTarefa = async (sendTarefa) => {
            try {
        
                const { descricao } = tarefa;
                const response = await axios.put(`https://back-to-do-list.onrender.com/v1/tarefas/${tarefa.id}`, {
                    descricao,
                    checked
                });

                setReload(true);
                // console.log('Tarefa atualizada: ', response.data);
            } catch (error) {
                console.log('Erro ao atualizar tarefa: ', error);
            }
        };

        atualizarTarefa();
    }, [checked, tarefa, isDelet]);

    const deletarTarefa = async () => {
        try {
            setIsDelet(true);
            const response = await axios.delete(`https://back-to-do-list.onrender.com/v1/tarefas/${tarefa.id}`);
            setReload(true);
        } catch(error) {
            console.log('Erro ao deletar tarefa: ', error);
        }
    };

    return(
        <>
            <div className="my-3 flex flex-row items-center gap-2 border border-slate-800 rounded-lg px-3 py-2 w-[674px] dark:border-white dark:text-white">
                <div>
                    <input 
                        type="checkbox" 
                        checked={checked} 
                        onChange={handleCheckboxChange}
                    ></input>
                </div>
                <div className="flex flex-row">
                    <div className={checked ? 'line-through' : ''}>
                        {tarefa.descricao}
                    </div>
                    <button onClick={() => deletarTarefa()} className="ml-1 align-middle text-white hover:text-red-600 cursor-pointer dark:text-zinc-800 dark:hover:text-red-400">
                        X
                    </button>
                </div>
            </div>
        </>
    )
};

export default Tarefa;