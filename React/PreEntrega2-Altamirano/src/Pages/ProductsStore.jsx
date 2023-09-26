
import ProductListContainer from "../Components/ProductListContainer/ProductListContainer";


export default function ProductsStore() {


    return (
        <>
            <div className="container">
                <section className="col-md-12 my-4 my-md-5 d-flex flex-column align-items-center justify-content-between">
                    <h2 className="d-block text-center">Estos son nuestros cursos</h2>
                    <ProductListContainer categoryId={-1} />
                </section>
            </div>
        </>
    )
}