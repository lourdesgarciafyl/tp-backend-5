import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/receta/CrearReceta";
import EditarReceta from "./components/views/receta/EditarReceta";
import Navegacion from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import DetalleReceta from "./components/views/DetalleReceta";
import Login from "./components/views/Login";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navegacion></Navegacion>
      <Routes>
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}
export default App
