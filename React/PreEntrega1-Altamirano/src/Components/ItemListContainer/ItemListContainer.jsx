import "./ItemListContainer.css";
import Products from "../Products";

export const ItemListContainer = () => {
    return (
        <>
            <ul className="d-flex flex-wrap flex-row p-0">
                <Products />
            </ul>
        </>
    )
};

export default ItemListContainer;