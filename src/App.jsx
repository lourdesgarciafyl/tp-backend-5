import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/receta/CrearReceta";
import EditarReceta from "./components/views/receta/EditarReceta";

function App() {

  return (
    <>
     <Administrador></Administrador>
     <CrearReceta></CrearReceta>
     <EditarReceta></EditarReceta>
    </>
  )
}

export default App
