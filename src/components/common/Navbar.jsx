import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink, Link} from 'react-router-dom'

function Navegacion({usuarioLogueado, setUsuarioLogueado}) {
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
            {
              (usuarioLogueado.email)? (
                <>
                <NavLink end className={'nav-item nav-link'} to={'/administrador'}>Administrador</NavLink>
                <Button variant='dark'>Logout</Button>
                </>
              ) : <NavLink end className={'nav-item nav-link'} to={'/login'}>Login</NavLink>
            }
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegacion;
