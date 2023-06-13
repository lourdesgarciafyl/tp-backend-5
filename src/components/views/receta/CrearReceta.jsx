import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CrearReceta = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    
    const onSubmit = () =>{
        Swal.fire(
            "Guardado",
            "El producto se guardó correctamente",
            `success`
        )
        reset()
    }
    return(
        <section className="mainSection container">
           <Card className="cardForm"> 
            <Card.Title className="my-2 text-center tituloDestacado letraDestacada fs-1">Crear receta</Card.Title>
            <hr />
            <Card.Body>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 fw-bold formControl" controlId="formNombre">
                <Form.Label>Receta</Form.Label>
                <Form.Control
                type="text"
                placeholder="Ej: Budín de zanahoria"
                {... register("nombre", {
                    required: "Debe ingresar el nombre de la receta",
                    minLength:{
                        value: 1,
                        message: "Cantidad mínima de caracteres: 1"
                    }, maxLength:{
                        value: 100,
                        message: "Cantidad máxima de caracteres: 100"
                    }
                })}>
                </Form.Control>
                <Form.Text className="text-warning">{errors.nombre?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 fw-bold formControl" controlId="formIngredientes">
            <Form.Label>Ingredientes</Form.Label>
            <Form.Control
            type="text"
            placeholder="Ej:        2 tazas de harina 0000, 
            1 1/2 taza de azúcar rubia, 
            1 taza de almendras tostadas (o el fruto seco que más te guste), 
            1 taza de pasas de uva sin semillas, 
            1 taza de aceite neutro, 
            4 huevos, 
            2 1/2 tazas de zanahoria rallada, 
            2 cucharaditas de bicarbonato de sodio"
            as="textarea"
            rows={3}
            {...register("ingredientes",{
                required: "Debe ingresar los ingredientes",
                minLength:{
                    value: 3,
                    message: "Cantidad mínima de caracteres: 3"
                }, maxLength:{
                    value: 500,
                    message: "Cantidad máxima de caracteres: 500"
                }
            })}>
            </Form.Control>
            <Form.Text className="text-warning">{errors.ingredientes?.message}</Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3 fw-bold formControl" controlId="formDificultad">
            <Form.Label>Dificultad</Form.Label>
            <Form.Select {... register("dificultad", {
                required: "Debe seleccionar una dificultad"
              })}>
                <option value="">--Seleccione una opción--</option>
                <option value="facil">Fácil</option>
                <option value="intermedio">Intermedio</option>
                <option value="dificil">Dificil</option>
            </Form.Select>
            <Form.Text className="text-warning">{errors.dificultad?.message}</Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3 fw-bold formControl" controlId="formTiempo">
            <Form.Label>Tiempo en minutos</Form.Label>
            <Form.Control 
            type="number"
            placeholder="Ej: 60"
            {... register("tiempo", {
                required: "Debe ingresar el tiempo en minutos",
                min:{
                    value: 1,
                    message: "Tiempo mínimo: 1 minuto"
                }, max:{
                    value: 200,
                    message: "Tiempo máximo: 200 minutos"
                }, minLength:{
                    value: 1
                }, maxLength:{
                    value: 3
                }
            })}>
            </Form.Control>
            <Form.Text className="text-warning">{errors.tiempo?.message}</Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3 fw-bold formControl" controlId="formInstrucciones">
            <Form.Label>Instrucciones</Form.Label>
            <Form.Control
            type="text"
            placeholder="Ej:        Batir los huevos con el azúcar hasta llegar al punto letra.
            Agregar a esta preparación el aceite neutro (puede ser de maíz o de girasol) en forma de hilo mientras hacen movimientos envolventes.
            Tamizar los secos y sumarlos a la mezcla.
            Sumar la zanahoria rallada, el extracto de naranja, los frutos secos picados, las pasas de uva, la ralladura y el jugo de la naranja.
            Precalentar el horno a 170°C.
            Poner la mezcla del budín de zanahoria en una budinera enmantecada y enharinada. 
            Cocinar por 50 minutos o hasta que al introducir un palillo de brochette salga seco.
            Desmoldar y dejar enfriar."
            as="textarea"
            rows={4}
            {...register("instrucciones",{
                required: "Debe ingresar las instrucciones de la receta",
                minLength:{
                    value: 3,
                    message: "Cantidad mínima de caracteres: 3"
                }, maxLength:{
                    value: 700,
                    message: "Cantidad máxima de caracteres: 700"
                }
            })}>
            </Form.Control>
            <Form.Text className="text-warning">{errors.instrucciones?.message}</Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3 fw-bold formControl" controlId="formImagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
            type="text"
            placeholder="Ej: https://www.paulinacocina.net/wp-content/uploads/2020/04/budin-de-zanahoria-800x558.jpg"
            {...register("imagen",{
                required: "Debe ingresar el link de una imagen",
                pattern:{
                    value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/,
                    message: "Debe ingresar un link terminado en jpg, gif o png"
                  }
            })}>
            </Form.Control>
            <Form.Text className="text-warning">{errors.imagen?.message}</Form.Text>
            </Form.Group>

            <Button className="mb-3" type="submit" id="btnCrearReceta">Guardar</Button>
           </Form>
            </Card.Body>
            </Card>
        </section>
    )
}

export default CrearReceta