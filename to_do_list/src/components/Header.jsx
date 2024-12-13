import AlternarTema from "./AlternarTema";


function Header(){

    return(
        <>
            <div className="flex flex-row">
                <h1 className="text-4xl font-semibold dark:text-white">Lista de Tarefas</h1>
                <div className="ml-4">
                    <AlternarTema />
                </div>
            </div>
        </>
    )
};

export default Header;