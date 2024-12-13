import { useState } from "react";
import axios from 'axios';

function NovaTarefa({reload, setReload}){

    const [tarefa, setTarefa] = useState('');

    function handleChangeTarefa(event){
        setTarefa(event.target.value);
    };

    const sendNovaTarefa = async () => {
        const dados = { descricao: tarefa }
        try {
            const response = await axios.post('http://localhost:10000/v1/tarefas/', dados);
            // console.log('Resposta da API:', response.data);
            setReload(true);
        } catch (error) {
            console.error('Erro ao enviar nova tarefa:', error);
        }   
    };    

    return(
        <>
            <div className="flex flex-row border rounded-full border-black items-center">
                <div className="pr-3 pl-5 py-1 border-r-black border-r">
                    <button className="text-2xl" onClick={() => (sendNovaTarefa(tarefa))}>+</button>
                </div>
                <div className="px-3">
                    <input className="w-[600px] focus:outline-none" placeholder="Digite uma tarefa" value={tarefa} onChange={handleChangeTarefa}></input>
                </div>
            </div>
        </>
    )
};

export default NovaTarefa;