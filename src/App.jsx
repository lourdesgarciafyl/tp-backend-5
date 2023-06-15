import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/receta/CrearReceta";
import EditarReceta from "./components/views/receta/EditarReceta";
import Navegacion from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navegacion />
      <Inicio></Inicio>
      <Footer />
    </>
  );
}
export default App;
