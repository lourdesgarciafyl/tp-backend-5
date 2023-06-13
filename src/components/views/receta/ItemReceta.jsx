import { Button } from "react-bootstrap";

const ItemReceta = () =>{
    return(
        <tr>
            <td className="text-truncate"># 1</td>
            <td className="text-truncate">Budín de zanahoria</td>
            <td className="text-truncate">Dificil</td>
            <td className="text-truncate">80 minutos</td>
            <td className="tamanioCelda text-truncate">Ingredientes</td>
            <td className="tamanioCelda text-truncate">https://img-global.cpcdn.com/recipes/a86b3070ead58504/640x640sq70/photo.webp</td>
            <td className="text-center">
             <Button className="btnEditar mb-2 me-lg-1">
                Editar </Button>
             <Button className="btnEliminar">
              Borrar </Button>
      </td>
        </tr>
    )
}

export default ItemReceta;