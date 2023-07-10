import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  consultaBorrarReceta,
  consultaListaRecetas,
} from "../../helpers/queries";
import { Link } from "react-router-dom";

const ItemReceta = ({ receta, setRecetas }) => {
  
  const borrarReceta = () => {
    Swal.fire({
      title: "Esta seguro de borrar la receta?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {if (result.isConfirmed) {
   
        consultaBorrarReceta(receta.id).then((respuesta)=>{
          console.log(respuesta);
          if(respuesta.status === 200){
            Swal.fire(
              'Receta eliminada',
              `La receta de ${receta.nombre} fue eliminada correctamente`,
              'success'
            );
         
            consultaListaRecetas().then((respuesta)=> setRecetas(respuesta))
          }else{
            Swal.fire(
              'Ocurrio un error',
              `Intente realizar esta operación nuevamente mas tarde`,
              'success'
            )
          }
        })
        
      }
    })
  }
  return (
    <tr>
      <td className="text-truncate">{receta._id}</td>
      <td className="text-truncate">{receta.nombre}</td>
      <td className="text-truncate">{receta.dificultad}</td>
      <td className="text-truncate">{receta.tiempo}</td>
      <td className="tamanioCelda text-truncate">{receta.ingredientes}</td>
      <td className="tamanioCelda text-truncate">{receta.imagen}</td>
      <td className="text-center">
        <Button as={Link} to={`/administrador/editar-receta/${receta._id}`} className="btnEditar mb-2 mb-lg-0 me-md-1">Editar </Button>
        <Button className="btnEliminar" onClick={borrarReceta}>
          Borrar{" "}
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
