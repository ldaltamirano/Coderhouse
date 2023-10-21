import ProductBox from "../Product/ProductBox"
import "./ProductListContainer.css";
import useProducts from "../../Hooks/useProduct";

export const ProductListContainer = ({ categoryId }) => {
    const { products, loading } = useProducts(categoryId)

    if (loading)
        return (
            <div className="spinner-border my-5 text-center" role="status">
            </div>
        )


    return (
        <ul className="d-flex flex-wrap flex-row justify-content-center justify-content-lg-start p-0">
            {
                products.map((product) => {
                    return (
                        <ProductBox key={product.id} product={product} />
                    )
                })
            }
        </ul>
    )
};

export default ProductListContainer;