import { Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import banner from "../../assets/banner2.jpeg";

const Inicio = () => {
  return (
    <section className="mainSection">
      <img className="bannerInicio" src={banner}></img>
      <Container>
        <h1 className="display-4 text-center my-2 letraDestacada">
          Rolling Flavors
        </h1>
        <p className="text-center my-3">
          <em>¡Encontrá aquí las mejores recetas para planificar tu semana!</em>
        </p>
        <hr />
        <Row>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
