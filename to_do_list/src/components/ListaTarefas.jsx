import Tarefa from "./Tarefa";

let lista_tarefas = [
    {descricao: 'Estudar programação', status: 'concluido'},
    {descricao: 'Terminar a tarefa', status: 'concluido'},
    {descricao: 'Seguir os criadores', status: 'pendente'}
];

function ListaTarefas(){

    return(
        <>
            <div>
                <ul>
                    {lista_tarefas.map((tarefa) => (
                        <Tarefa tarefa={tarefa} />
                    ))}
                </ul>
            </div>
        </>
    )
};

export default ListaTarefas;