import { useState } from "react";
import axios from 'axios';

function NovaTarefa(){

    const [tarefa, setTarefa] = useState('');

    function handleChangeTarefa(event){
        setTarefa(event.target.value);
    };

    const sendNovaTarefa = async (tarefa) => {
        if (!tarefa) {
            console.error('Erro: A descrição da tarefa não pode estar vazia');
            return;
        }
        
        try {
            const descricao = tarefa;
            const response = await axios.post('http://localhost:10000/v1/tarefas', { 'descricao': descricao });
            console.log('Resposta da API:', response.data);
        } catch (error) {
            console.error('Erro ao enviar nova tarefa:', error);
        }
    };
    

    return(
        <>
            <div className="flex flex-row border rounded-full border-black items-center">
                <div className="pr-3 pl-5 py-1 border-r-black border-r">
                    <button className="text-2xl" onClick={sendNovaTarefa}>+</button>
                </div>
                <div className="px-3">
                    <input className="w-[600px] focus:outline-none" placeholder="Digite uma tarefa" value={tarefa} onChange={handleChangeTarefa}></input>
                </div>
            </div>
        </>
    )
};

export default NovaTarefa;