import error from "../../assets/error404.png";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <section className="mainSection text-center">
      <h3 className="display-4 letraDestacada mt-4">¡Eso no esta en el menu!</h3>
      <p class="display-6 ">Disculpa, no podemos traer ese pedido.</p>
            <img
        src={error}
        alt="error 404"
        className="imgError img-fluid p-4 w-50"
      />
      
      <div>
        <Button className="btn btn-outline-light mb-4">Volver al inicio</Button>
      </div>
      
    </section>
  );
};

export default Error404;
