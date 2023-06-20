import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/cocina.png";


const Navegacion = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setUsuarioLogueado({});
    sessionStorage.removeItem("usuarioLogueado");
    navegacion("/");
  };
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand  as={Link} to={"/"} className="letraDestacada logoInicio text-white">
          Rolling Flavors <span className="imgLogo" >     <img className="bannerInicio" src={logo}></img> </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={"nav-item nav-link"} to={"/"}>Inicio</NavLink>
            {
            (usuarioLogueado.nombreUsuario)? (
              <>
                <NavLink
                  className={"nav-item nav-link"}
                  to={"/administrador"}
                >
                  Administrador
                </NavLink>
                <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end className={"nav-item nav-link"} to={"/login"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegacion;
