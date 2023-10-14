import { useParams } from "react-router-dom";
import useAsyncMock from "../../Hooks/useAsyncMock"
import products from '../../mocks/product.json';
import Banner from "../../assets/banners/bannerProduct.jpg"
import "./ProductDetail.css"

const ProductDetail = () => {
    const { productId } = useParams();
    const { data, loading } = useAsyncMock(products)
    let p = [];
    if (loading)
        return (
            <>
                <img src={Banner} alt="banner producto" className="img-fluid" />
                <div className="spinner-border my-5" role="status">
                </div>
            </>
        )
    p = data.products.find(prod => prod.id == productId)

    return (
        <>
            <img src={Banner} alt="banner producto" className="img-fluid" />
            <div className="d-flex flex-column justify-content-between align-items-start flex-md-row container">
                <aside className="d-flex flex-column justify-content-between col-12 col-md-5 col-lg-4 sticky-lg-top container">
                    <div className="d-flex flex-column justify-content-start align-items-start">
                        <img src={p.thumbnail} alt="banner producto" className="w-100 img-img-fluid my-2 mt-4" />
                        <article className="d-flex justify-content-between align-items-center flex-row col-12 my-3">
                            <span className="price flex-grow-1 text-black fs-1 fs-3">U$S {p.price}</span>
                            <a className="btn btn-primary flex-grow-0">Agregar</a>
                        </article>
                    </div>
                </aside>
                <section className="d-flex flex-column justify-content-between align-items-start col-12 col-md-7 col-lg-8 container">
                    <article className="d-flex flex-column justify-content-start align-items-start mt-4">
                        <span className='d-none'>Creado por: {p.createdBy}</span>
                        <span className='d-none '>{p.students} estudiantes</span>
                        <h2 className="fs-2 fw-bold mb-2"> {p.title} </h2>
                        <p className="fs-5 my-2"> {p.shortDescription} </p>
                        <span className='d-lg-block fs-6 mt-2'>Creado por: {p.createdBy}</span>
                        <span className='d-lg-block fs-6 mb-2'>{p.students} estudiantes</span>
                    </article>
                    <article className="d-flex flex-column justify-content-start align-items-start">
                        <h3 className="fs-3 fw-bold my-3 mb-2">Descripcion</h3>
                        <p className="fs-5 my-2">
                            {p.description}
                        </p>
                    </article>
                </section>
            </div >
        </>
    )

};

export default ProductDetail;