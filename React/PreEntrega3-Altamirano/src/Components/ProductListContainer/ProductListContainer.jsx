import useAsyncMock from "../../Hooks/useAsyncMock"
import products from '../../mocks/product.json';
import ProductBox from "../Product/ProductBox"
import "./ProductListContainer.css";

export const ProductListContainer = ({ categoryId }) => {
    const { data, loading } = useAsyncMock(products)
    if (loading)
        return (
            <div className="spinner-border my-5 text-center" role="status">
            </div>
        )

    categoryId = categoryId == undefined ? -1 : categoryId;

    return (
        <ul className="d-flex flex-wrap flex-row justify-content-center justify-content-lg-start p-0">
            {
                data.products.map((product) => {
                    if (categoryId < 0 || categoryId.toString() === product.category.toString()) {
                        return (
                            <ProductBox key={product.id} product={product} />
                        )
                    }
                })
            }
        </ul>
    )
};

export default ProductListContainer;