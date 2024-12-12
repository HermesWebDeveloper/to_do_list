import axios from "axios";
import { useEffect, useState } from "react";


function Tarefa({tarefa}){
    
    const [checked, setChecked] = useState(tarefa.checked ?? false)

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    useEffect( () => {
        // const atualizarTarefa = () => {
        //     try {
        //         const response = await axios.put('http://localhost:10000/v1/tarefas/${tarefa.id}', {
        //             tarefa
        //         });
        //     }
        // }
    }, [tarefa.checked]);

    return(
        <>
            <div className="my-3 flex flex-row items-center gap-2 border border-slate-800 rounded-lg px-3 py-2 w-[674px]">
                <div>
                    <input 
                        type="checkbox" 
                        checked={checked} 
                        onChange={handleCheckboxChange}
                    ></input>
                </div>
                <div className={checked ? 'line-through' : ''}>
                    {tarefa.descricao}
                </div>
            </div>
        </>
    )
};

export default Tarefa;