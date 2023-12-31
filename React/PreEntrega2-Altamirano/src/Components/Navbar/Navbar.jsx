import { Link, NavLink } from "react-router-dom";
import LogoColor from "../../assets/incourse-color.png"
import LogoBlanco from "../../assets/incourse-white.png"
import CartWidget from "../CartWidget/CartWidget"
import categories from "../../mocks/categories.json"

import "./Navbar.css";


export const Navbar = () => {
    let catgs = categories.map(c => {
        return (
            <li key={c.id}><NavLink className="dropdown-item nav-link" to={c.path} > {c.category} </NavLink></li>
        )
    });

    const handleClickDropDown = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Offcanvas navbar large">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarIncourse" aria-controls="navbarIncourse">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <Link className="navbar-brand logo" to="/">
                        <img src={LogoColor} className="desktop" alt="LogoIC" />
                        <img src={LogoBlanco} className="mobile" alt="LogoIC" />
                    </Link>
                    <div className="offcanvas offcanvas-start text-bg-dark" id="navbarIncourse" aria-labelledby="navbarIncourseLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="navbarIncourseLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start flex-grow-2 pe-3 pe-lg-0">
                                <li className="nav-item"><a href="/products" className="nav-link">Tienda</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/category" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClickDropDown}>
                                        Desarrollo
                                    </a>
                                    <ul className="dropdown-menu">
                                        {catgs}
                                    </ul>
                                </li>
                                <li className="nav-item"><a href="/contact" className="nav-link">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                    <Link className="cart" to="/cart" type="button">
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </>
    );

}

export default Navbar;


