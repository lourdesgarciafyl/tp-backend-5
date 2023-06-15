import {Container, Row} from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import banner from "../../assets/bannerPrueba.png"


const Inicio = () => {
    return (
        <section className="mainSection">
            <img className="bannerInicio" src={banner}>
            </img>

        </section>
    );
};

export default Inicio;