const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLRecetas = import.meta.env.VITE_API_RECETA;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URLUsuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      console.log("email encontrado");
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        console.log("password incorrecto");
        return null;
      }
    } else {
      console.log("el mail no existe");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

/* GET obtener un listado de elementos o un elemento.
*/
export const consultaListaRecetas = async () => {
  try {

    const respuesta = await fetch(URLRecetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
    
  }catch(error) {
    console.log(error);
  }
}

export const consultaBorrarReceta = async (id) =>{
  try{
      const respuesta = await fetch(`${URLRecetas}/${id}`, {
          method: "DELETE"
      });
      return respuesta;
  }catch(error){
      console.log(error);
  }
}

/* POST crear una receta*/

export const consultaCrearReceta = async (receta) => {
  try{
    const respuesta = await fetch(URLRecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(receta)
    });
    return respuesta;
  }catch(error){
    console.log(error)
    return null;
  }
}

/*PUT editar alguna parte de la receta*/

export const consultaEditarReceta = async (receta, id) =>{
  try{
      const respuesta = await fetch(URLRecetas+'/'+id, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(receta)
      });
      return respuesta;
  }catch(error){
      console.log(error);
  }
}