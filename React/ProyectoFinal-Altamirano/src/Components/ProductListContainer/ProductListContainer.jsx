import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ProductBox from "../Product/ProductBox"
import "./ProductListContainer.css";

export const ProductListContainer = ({ categoryId }) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    categoryId = categoryId == undefined ? -1 : categoryId;

    useEffect(() => {
        const db = getFirestore();
        const q = categoryId > 0
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : query(collection(db, "products"), where("category", "!=", categoryId));
        getDocs(q)
            .then((snapShot) => {
                setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false)
            })
            .catch(error => console.log(error.message))
    }), [];

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