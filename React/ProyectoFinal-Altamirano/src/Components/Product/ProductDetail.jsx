import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import Generic from "../../Pages/Generic";
import Banner from "../../assets/banners/bannerProduct.jpg"
import ItemCount from "../common/ItemCount";

import "./ProductDetail.css"

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const { addToCart } = useCartContext()
    const [quantityInCart, setQuantityInCart] = useState(0);

    const handleAddToCart = (count) => {
        const { id, thumbnail, title, price } = product;

        setQuantityInCart(count);
        console.log('agregado', count)
        if (count > 0) {
            addToCart({
                id, title, thumbnail, price, quantity: count
            })
        }
    };

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("id", "==", parseInt(productId)));
        getDocs(q)
            .then((snapShot) => {
                setProduct(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0]);
                setLoading(false)
            })
            .catch(error => console.log(error.message))
    }, []);

    if (loading)
        return (
            <>
                <div className="spinner-border my-5" role="status">
                </div>
            </>
        )



    return (
        product != undefined ? (
            <>
                <img src={Banner} alt="banner producto" className="img-fluid" />
                <div className="d-flex flex-column justify-content-between align-items-start flex-md-row container">
                    <aside className="d-flex flex-column justify-content-between col-12 col-md-5 col-lg-4 sticky-lg-top container">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <img src={product.thumbnail} alt="banner producto" className="w-100 img-img-fluid my-2 mt-4" />
                            <article className="col-12">
                                <p className="fs-6 pt-3">Seleccionarcantidad de vacantes:</p>
                                <ItemCount stock={product.stock} initial={quantityInCart} onAdd={handleAddToCart} />
                            </article>
                        </div>
                    </aside>
                    <section className="d-flex flex-column justify-content-between align-items-start col-12 col-md-7 col-lg-8 container">
                        <article className="d-flex flex-column justify-content-start align-items-start mt-4">
                            <span className='d-none'>Creado por: {product.createdBy}</span>
                            <span className='d-none '>{product.students} estudiantes</span>
                            <h2 className="fs-2 fw-bold mb-2"> {product.title} </h2>
                            <p className="fs-5 my-2"> {product.shortDescription} </p>
                            <div className="d-flex flex-row align-items-center justify-content-fa-users-between">
                                <span className="price text-black fs-1 pe-3">U$S {product.price}</span>
                                <div className="d-flex flex-column">
                                    <span className='d-lg-block fs-6 mt-2'>Creado por: {product.createdBy}</span>
                                    <span className='d-lg-block fs-6 mb-2'>{product.students} estudiantes</span>
                                </div>
                            </div>

                        </article>
                        <article className="d-flex flex-column justify-content-start align-items-start">
                            <h3 className="fs-3 fw-bold my-3 mb-2">Descripcion</h3>
                            <p className="fs-5 my-2">
                                {product.description}
                            </p>
                        </article>
                    </section>
                </div >
            </>
        ) : (<Generic />)
    )

};

export default ProductDetail;