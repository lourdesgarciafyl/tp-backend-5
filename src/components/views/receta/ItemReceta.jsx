import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemReceta = ({receta}) =>{

    const borrarReceta = ()=>{
        Swal.fire({
            title: 'Esta seguro de borrar la receta?',
            text: "No se puede revertir este paso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Receta eliminada!',
                'Su receta fue eliminada.',
                'success'
              )
            }
          })

    }
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
             <Button className="btnEliminar" onClick={borrarReceta}>
              Borrar </Button>
      </td>
        </tr>
    )
}

export default ItemReceta;