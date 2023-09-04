import { products } from "../mocks/product.json";
import CartWidget from "./CartWidget/CartWidget"
import "./products.css"

export const Products = () => {
    let prods = products.map(p => {

        return (
            <li key={p.id} className='d-flex flex-column align-items-start productsLi'>
                <img
                    src={p.thumbnail}
                />
                <h3><strong>{p.title.length > 50 ? p.title.slice(0, 50).trim() + "..." : p.title}</strong></h3>
                <span className='info'>Creado por: {p.createdBy}</span>
                <span className='info'>{p.students} estudiantes</span>
                <div className='d-flex justify-content-between align-items-center flex-row container cartAdd'>
                    <span className='price'>U$S {p.price}</span>
                    <button className="btn btn-primary"><CartWidget /></button>
                </div>
            </li>

        );
    });

    return (
        <>
            {prods}
        </>
    )
};

export default Products;