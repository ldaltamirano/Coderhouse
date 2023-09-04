import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget"
import LogoColor from "../../assets/incourse-color.png"
import "./Navbar.css";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={menuOpen ? "open" : ""}>
                <ul>
                    <li>
                        <a className="nav-links" href="/category">Categorias</a>
                    </li>
                    <li>
                        <a className="nav-links" href="/aboutus">Nosotros</a>
                    </li>
                    <li>
                        <a className="nav-links" href="/contact">Contacto</a>
                    </li>
                </ul>
            </nav>
            <div className="menu">
                <div className="menuMobile">
                    <div id="hamburguer-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
            <div className="logo">
                <a href="/" className="logoColor" >
                    <img src={LogoColor} alt="LogoIC" />
                </a>
            </div>

            <a href="/cart" className="cart"><CartWidget /></a>
        </>
    );

}

export default Navbar;


