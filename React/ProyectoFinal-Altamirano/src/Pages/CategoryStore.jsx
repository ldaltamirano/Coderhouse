
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ProductListContainer from "../Components/ProductListContainer/ProductListContainer";
import Generic from "./Generic";

export default function CategoryStore() {
    const { categoryId } = useParams();
    const [category, setCategory] = useState(-1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "category"), where("id", "==", parseInt(categoryId)));
        getDocs(q)
            .then((snapShot) => {
                setCategory(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0]);
                setLoading(false)
            })
            .catch(error => console.log(error.message))
    });

    if (loading)
        return (
            <div className="spinner-border my-5 text-center" role="status">
            </div>
        )


    return (
        <>
            {
                category != undefined ? (
                    <div className="container">
                        <section className="col-md-12 my-4 my-md-5 d-flex flex-column align-items-center justify-content-between">
                            <h2 className="d-block text-center">Estos son nuestros cursos de {category.category} </h2>
                            <ProductListContainer categoryId={category.id} />
                        </section>
                    </div>
                ) : (<Generic />)
            }
        </>

    )
}