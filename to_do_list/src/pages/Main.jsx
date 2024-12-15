import { useEffect, useState } from "react";
import Header from "../components/Header"
import ListaTarefas from "../components/ListaTarefas"
import NovaTarefa from "../components/NovaTarefa"
import axios from "axios";

function Main() {

  const [reload, setReload] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchTarefas = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_API}/v1/tarefas/`);
            setTarefas(response.data);
            setReload(false);
            setLoading(false);
        } catch (error) {
            console.log('Erro ao buscar tarefas: ', error);
        }
    }

    fetchTarefas();
}, [reload]);

  return (
    <>
        <div className="flex flex-col items-center my-20 font-sans">
            <div className="mb-5">
                <Header />
            </div>  
            <div className="mb-5">
                <NovaTarefa reload={reload} setReload={setReload} tarefas={tarefas} setTarefas={setTarefas} />
            </div>
            <div>
              <ListaTarefas reload={reload} setReload={setReload} tarefas={tarefas} setTarefas={setTarefas} loading={loading} />
            </div>
        </div> 
    </>
  )
} 

export default Main
