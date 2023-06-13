import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/receta/CrearReceta";

function App() {

  return (
    <>
     <Administrador></Administrador>
     <CrearReceta></CrearReceta>
    </>
  )
}

export default App
