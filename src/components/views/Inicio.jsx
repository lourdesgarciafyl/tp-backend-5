import { Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import banner from "../../assets/banner2.jpeg";
import { useEffect, useState } from "react";
import { consultaListaRecetas } from "../helpers/queries";


const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultaListaRecetas().then((respuesta) => {
      console.log(respuesta);

      setRecetas(respuesta);
    });
  }, []);

  return (
    <section className="mainSection">
      <div className="position-relative">
        <img className="bannerInicio" src={banner}></img>
        <h1 className="display-4 text-center my-2 letraDestacada tituloRolling">
          Rolling Flavors
        </h1>{" "}
      </div>

      <Container>
        <p className="text-center my-3">
          <em>¡Encontrá aquí las mejores recetas para planificar tu semana!</em>
        </p>
        <hr />
        <Row>
          {recetas.map((receta) => (
            <CardReceta
              key={receta.id}
              receta={receta}
              setRecetas={setRecetas}
            ></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
