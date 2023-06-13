import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navegacion from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import DetalleReceta from "./components/views/DetalleReceta";

function App() {

  return (
    <>

     <Navegacion/>
     <DetalleReceta></DetalleReceta>
    
     <Footer></Footer>

    </>
  )
}

export default App
