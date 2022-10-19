import { Link } from "react-router-dom";
import { useContext } from "react";
import PizzasContext from "../context/PizzaProvider";
import {formatNumber} from "../helpers/formatNumber"
import style from '../assets/style.css'

const Navbar =() => {
    const {carrito} = useContext (PizzasContext);
    const total = carrito.reduce(
        (valorAnterior, {count, price}) => (valorAnterior+ price)*count,
        0
    );

    return(
        <div className="Navbar">
            <div className="">
                <div className="">
                    <Link to="/" className="">
                        <h4 className="">
                             {/*&#127829;  */}
                            Pizzería Mamma Mía
                        </h4>
                    </Link>
                  
                    <Link to="/carrito" className="logo-nombre mx-1 mb-0">
                        <h4 className="mb-0">Total: ${formatNumber(total)}</h4>                       
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;