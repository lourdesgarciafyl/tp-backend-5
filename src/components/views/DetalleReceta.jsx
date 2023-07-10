import { Container, Card, Row, Col } from "react-bootstrap";
import { consultaReceta } from "../helpers/queries";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetalleReceta = () => {
  const [receta, setReceta] = useState({});
  const {id} = useParams();
  const navegacion = useNavigate();

  useEffect(() =>{
    consultaReceta(id).then((respuesta) =>{
      setReceta(respuesta);
    })
  }, [])

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={receta.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="fontoDetalle">
              <Card.Title className="letraDestacada fs-2">{receta.nombre}</Card.Title>
              <hr />
              <Card.Text>
              <span className="text-danger fw-semibold ">
                  Ingredientes: <br />
                </span>
                {receta.ingredientes}
                <br />
                <br />               

                <span className="text-danger fw-semibold ">
                  Dificultad:
                </span>{" "}
                {receta.dificultad}
                <br />
                <span className="text-danger fw-semibold ">Tiempo de preparación:</span>{" "}
                {receta.tiempo}
                <br /><br />
                <span className="text-danger fw-semibold ">
                 Receta paso a paso: <br />                             
                </span>
                {receta.instrucciones}

              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
