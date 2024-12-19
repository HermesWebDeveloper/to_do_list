import axios from "axios";
import { useEffect, useState } from "react";

function Tarefa({tarefa, setLoading}){
    
    // Cria variável para controlar status da tarefa
    const [checked, setChecked] = useState(tarefa.checked ?? false);

    // Função para mudar o status da tarefa
    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        // Função de atualizar os dados da tarefa na API
        const atualizarTarefa = async (sendTarefa) => {
            try {
                const { descricao } = tarefa;
                const response = await axios.put(`${import.meta.env.VITE_URL_API}/v1/tarefas/${tarefa.id}`, {
                    descricao,
                    checked
                });
                
                setLoading(true);
            } catch (error) {
                console.log('Erro ao atualizar tarefa: ', error);
            }
        };
    
        atualizarTarefa();
    }, [checked]);

    // Função para deletar a tarefa
    const deletarTarefa = async () => {

        // Exibindo informação de carregamento
        setLoading(true);

        try {
            // Deleção da tarefa na API
            const response = await axios.delete(`https://back-to-do-list.onrender.com/v1/tarefas/${tarefa.id}`);
        } catch(error) {
            console.log('Erro ao deletar tarefa: ', error);
        }
    };

    return(
        <>
            <div className="my-3 flex flex-row items-center gap-2 border border-slate-800 rounded-lg px-3 py-2 sm:w-[674px] w-[300px] dark:border-white dark:text-white">
                <div>
                    <input 
                        type="checkbox" 
                        checked={checked} 
                        onChange={handleCheckboxChange}
                    ></input>
                </div>
                <div className="flex flex-row">
                    <div className={`${checked ? 'line-through' : ''} break-words max-w-full`}>
                        {"Descrição da tarefa: " + tarefa.descricao}
                    </div>
                    <button onClick={() => deletarTarefa()} className="ml-1 align-middle text-red-200 hover:text-red-500 cursor-pointer dark:hover:text-red-500 dark:text-red-900">
                        X
                    </button>
                </div>
            </div>
        </>
    )
};

export default Tarefa;