import { Col, Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({ receta }) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card className="cardsInicio">
        <Card.Img
          className="imagenCard"
          variant="top"
          src={receta.imagen}
        ></Card.Img>
        <Card.Body>
          <Card.Title className="text-center letraDestacada">
            {receta.nombre}
          </Card.Title>
          <hr />
          <div className="d-flex justify-content-evenly">
            <ul>
              <li>
                Dificultad:{" "}
                <Badge className="badgeInicio bg-light">
                  {receta.dificultad}
                </Badge>
              </li>
              <li>
                Tiempo de preparación:{" "}
                <Badge className="badgeInicio bg-light">
                  {receta.tiempo} min
                </Badge>
              </li>
            </ul>
          </div>
          <div className="text-center">
          <Button variant="primary" as={Link} to={`/detalle/${receta._id}`}>Ver detalle</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
