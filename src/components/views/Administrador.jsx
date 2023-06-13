import { Table, Button } from "react-bootstrap";

const Administrador = () =>{
    return(
        <section className="container mainSection">
            <h1 className="mt-2 text-center tituloDestacado letraDestacada">Administracion de recetas</h1>
            <div className="d-flex justify-content-center mt-1">
                <Button className="btn btn-primary">Agregar</Button>
            </div>
            <hr />
            <Table responsive striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Codigo</th>
              <th>Receta</th>
              <th>Dificultad</th>
              <th>Tiempo</th>
              <th>URL de Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </Table>
        </section>
    )
}

export default Administrador