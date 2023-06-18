import { Table, Button } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";
import { useEffect, useState } from "react";
import { consultaListaRecetas } from "../helpers/queries";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultaListaRecetas().then((respuesta) => {
      console.log(respuesta);

      setRecetas(respuesta);
    });
  }, []);

  return (
    <section className="container mainSection">
      <h1 className="mt-2 text-center tituloDestacado letraDestacada">
        Administracion de recetas
      </h1>
      <div className="d-flex justify-content-center mt-1">
        <Button id="btnCrearReceta">Agregar</Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Codigo</th>
            <th>Receta</th>
            <th>Dificultad</th>
            <th>Tiempo</th>
            <th>Ingredientes</th>
            <th>URL de Imagen</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta)=>  <ItemReceta key={receta.id} receta={receta} setRecetas={setRecetas}></ItemReceta> )}
         
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
