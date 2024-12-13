import { useState } from "react";
import Header from "../components/Header"
import ListaTarefas from "../components/ListaTarefas"
import NovaTarefa from "../components/NovaTarefa"

function Main() {

  const [reload, setReload] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
        <div className="flex flex-col items-center my-20 font-sans">
            <div className="mb-5">
                <Header />
            </div>  
            <div className="mb-5">
                <NovaTarefa reload={reload} setReload={setReload} />
            </div>
            <div>
              <ListaTarefas reload={reload} setReload={setReload} />
            </div>
        </div> 
    </>
  )
} 

export default Main
