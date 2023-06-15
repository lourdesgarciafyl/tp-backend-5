import { Col, Card, Badge, Button } from "react-bootstrap";
import pastel from "../../../assets/pasteldepapas.jpg"; //después saco esta imagen

const CardReceta = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card className="cardsInicio">
        <Card.Img variant="top" src={pastel}></Card.Img>
        <Card.Body>
          <Card.Title className="text-center letraDestacada">
            Pastel de Papas
          </Card.Title>
          <hr />
          <div className="d-flex justify-content-evenly">
            <ul>
              <li>
                Dificultad:{" "}
                <Badge className="badgeInicio bg-light">Media</Badge>
              </li>
              <li>
                Tiempo de preparación:{" "}
                <Badge className="badgeInicio bg-light">60 min</Badge>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
