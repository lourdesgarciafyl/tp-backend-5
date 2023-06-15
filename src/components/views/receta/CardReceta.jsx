import { Col, Card, Badge } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
      <Card.Img variant="top" src=""></Card.Img>
        <Card.Body>
          <Card.Title>Pastel de Papas</Card.Title>
          <div className="d-flex justify-content-evenly">
            <Badge variant="primary">Media</Badge>
            <Badge variant="info">60 min</Badge>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
