import Header from "../components/Header"
import ListaTarefas from "../components/ListaTarefas"
import NovaTarefa from "../components/NovaTarefa"

function Main() {

  return (
    <>
        <div className="flex flex-col items-center my-20 font-sans">
            <div className="mb-5">
                <Header />
            </div>  
            <div className="mb-5">
                <NovaTarefa />
            </div>
            <div>
              <ListaTarefas />
            </div>
        </div> 
    </>
  )
} 

export default Main
