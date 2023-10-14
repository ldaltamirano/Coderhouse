
import { useParams } from "react-router-dom";
import ProductListContainer from "../Components/ProductListContainer/ProductListContainer";
import useAsyncMock from "../Hooks/useAsyncMock"
import categories from '../mocks/categories.json'

export default function CategoryStore() {
    const { categoryId } = useParams();
    const { data, loading } = useAsyncMock(categories)
    let category = -1;
    let catTitle = "";
    if (loading)
        return (
            <div className="spinner-border my-5" role="status">
            </div>
        )
    category = categoryId == undefined ? -1 : categoryId;
    if (category > 0)
        catTitle = "Estos son nuestros cursos de " + data.find(c => c.id == category).category;
    else
        catTitle = "Estos son todos nuestros cursos";
    console.log(catTitle)

    return (
        <>
            <div className="container">
                <section className="col-md-12 my-4 my-md-5 d-flex flex-column align-items-center justify-content-between">
                    <h2 className="d-block text-center"> {catTitle} </h2>
                    <ProductListContainer categoryId={category} />
                </section>
            </div>
        </>
    )
}