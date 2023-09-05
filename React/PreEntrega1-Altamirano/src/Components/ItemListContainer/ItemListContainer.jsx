import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <ul className="d-flex flex-wrap flex-row p-0">
                {greeting}
            </ul>
        </>
    )
};

export default ItemListContainer;