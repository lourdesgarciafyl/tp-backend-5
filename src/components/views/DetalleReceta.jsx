import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://cdn.leonardo.ai/users/14881c64-1646-47cf-bbc7-c85d2eb01d50/generations/578dc619-0743-4648-9e01-61b2f88a8078/Leonardo_Select_Spagueti_with_meatballs_1.jpg"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>ESPAGUETI CON ALBONDIGAS</Card.Title>
              <hr />
              <Card.Text>
              <span className="text-danger fw-semibold ">
                  Ingredientes: <br />
                </span>
              300 gramos de espaguetis, 500 gramos de carne molida, 1 huevo, 1 cebolla picada, 2 dientes de ajo picados, 400 gramos de salsa de tomate, 1 cucharadita de orégano, Sal y pimienta al gusto, Aceite de oliva
                <br />
                <br />               

                <span className="text-danger fw-semibold ">
                  Dificultad:
                </span>{" "}
                Media
                <br />
                <span className="text-danger fw-semibold ">Tiempo de preparación:</span>{" "}
                1 hora
                <br /><br />
                <span className="text-danger fw-semibold ">
                 Receta paso a paso: <br />                             
                </span>
                1. Cocina los espaguetis según las instrucciones del paquete y reserva.\n2. En un recipiente, mezcla la carne molida, el huevo, la cebolla picada, el ajo picado, el orégano, la sal y la pimienta.\n3. Forma albóndigas con la mezcla de carne.\n4. Calienta un poco de aceite de oliva en una sartén grande y añade las albóndigas.\n5. Cocina las albóndigas a fuego medio-alto hasta que estén doradas por todos lados.\n6. Agrega la salsa de tomate a la sartén y reduce el fuego a medio-bajo.\n7. Cocina las albóndigas en la salsa durante unos 20-30 minutos, hasta que estén cocidas por completo.\n8. Sirve los espaguetis con las albóndigas y la salsa por encima.\n9. ¡Disfruta de este delicioso plato!

              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
