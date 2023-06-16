import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/receta/CrearReceta";
import EditarReceta from "./components/views/receta/EditarReceta";
import Error404 from "./components/views/Error404";
import Navegacion from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import DetalleReceta from "./components/views/DetalleReceta";
import Login from "./components/views/Login";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import {useState} from "react";


function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});
  // Rutas comentadas: para los componentes que aun no tenemos maquetados.
  // En ruta de administrador queda pendiente agregas las rutas protegidas, cuando tengamos la logica del login
  return (
    <>
 <BrowserRouter>
      <Navegacion usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Navegacion>
      <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
      <Route exact path="/detalle" element={<DetalleReceta></DetalleReceta>}></Route>
      <Route exact path="/administrador/*" element={<RutasAdministrador></RutasAdministrador>}> </Route>  
      <Route path="*" element={<Error404></Error404>}> </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}
export default App
