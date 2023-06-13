import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navegacion() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand className="letraDestacada">
          Rolling <br /> Flavors
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Administrador</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegacion;
