import { Button } from "react-bootstrap";

const ItemReceta = ({receta}) =>{
    return(
        <tr>
            <td className="text-truncate">{receta.id}</td>
            <td className="text-truncate">{receta.nombre}</td>
            <td className="text-truncate">{receta.dificultad}</td>
            <td className="text-truncate">{receta.tiempo}</td>
            <td className="tamanioCelda text-truncate">{receta.ingredientes}</td>
            <td className="tamanioCelda text-truncate">{receta.imagen}</td>
            <td className="text-center">
             <Button className="btnEditar mb-2 mb-lg-0 me-md-1">
                Editar </Button>
             <Button className="btnEliminar">
              Borrar </Button>
      </td>
        </tr>
    )
}

export default ItemReceta;