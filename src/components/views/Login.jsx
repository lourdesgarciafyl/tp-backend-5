import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();

  const onSubmitUsuario = (usuario) => {
    console.log(usuario);
    login(usuario).then((respuesta) => {
      if (respuesta) {
        console.log(respuesta);
        sessionStorage.setItem(
          "usuarioLogueado",
          JSON.stringify(respuesta.email)
        );
        Swal.fire("¡Bienvenido!", "Iniciaste sesión correctamente", "success");
        setUsuarioLogueado(respuesta);
        navegacion("/administrador");
      } else {
        Swal.fire("Error", "Email o password incorrecto", "error");
      }
    });
  };
  return (
    <Container className="mainSection col-md-6">
      <Card className="my-5 fondoDetalle  shadow-lg">
        <Card.Header as="h5">
          Ingresar a <b>Rolling Flavors</b>{" "}
        </Card.Header>
        <Card.Body>
          <Form noValidate className="" onSubmit={handleSubmit(onSubmitUsuario)}>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "Debes ingresar un email.",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "El email debe ser de la forma mail@dominio.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Ingresa la contraseña",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "El password debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button className="btn btnEliminar" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
