import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import Product from "../Components/Products"
import Slider from "../Components/Slider/Slider";
import Att from "../assets/brands/att.svg"
import Cisco from "../assets/brands/cisco.svg"
import Citi from "../assets/brands/citi.svg"
import Ericsson from "../assets/brands/ericsson.svg"
import Hp from "../assets/brands/hewlett_packard_enterprise.svg"
import Gamble from "../assets/brands/procter_gamble.svg"
import Samsung from "../assets/brands/samsung.svg"
import Volkswagen from "../assets/brands/volkswagen.svg"
import "./Home.css";


export default function Home() {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column">
            <div className="bannerSlider container">
                <Slider />
            </div>
            <section className="clients">
                <div className="d-flex flex-column align-items-center ">
                    <p>Más de 14.400 empresas y millones de estudiantes de todo el mundo confían en nosotros</p>
                    <div className="brands d-flex align-items-start justify-content-around flex-wrap">
                        <img src={Att} alt="Att" />
                        <img src={Cisco} alt="Cisco" />
                        <img src={Citi} alt="Citi" />
                        <img src={Ericsson} alt="Ericsson" />
                        <img src={Hp} alt="Hp" />
                        <img src={Gamble} alt="Gamble" />
                        <img src={Samsung} alt="Samsung" />
                        <img src={Volkswagen} alt="Volkswagen" />
                    </div>
                </div>
            </section>
            <section className="products container">
                <h2>Los estudiantes estan viendo</h2>
                <ItemListContainer greeting={<Product />} />
            </section>
        </main>
    )
}