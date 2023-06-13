import { Button } from "react-bootstrap";

const ItemReceta = () =>{
    return(
        <tr>
            <td className="text-truncate"># 1</td>
            <td className="text-truncate">Budín de zanahoria</td>
            <td className="text-truncate">Dificil</td>
            <td className="text-truncate">80 minutos</td>
            <td className="tamanioCelda text-truncate">Ingredientes</td>
            <td className="tamanioCelda text-truncate">https://www.paulinacocina.net/wp-content/uploads/2020/04/budin-de-zanahoria-800x558.jpg</td>
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