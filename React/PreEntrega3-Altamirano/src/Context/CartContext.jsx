import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], total: 0 })

    const addToCart = (product) => {
        let prod = cart.items.find(p => p.id == product.id);
        if (prod) {
            product.quantity += prod.quantity;
            cart.total -= prod.price * prod.quantity;
            cart.items = cart.items.filter(p => p.id != product.id);
            setCart((prevCart) => ({
                ...prevCart,
                items: [...prevCart.items, product],
                total: prevCart.total + product.price * product.quantity
            }))
        } else {
            setCart((prevCart) => ({
                ...prevCart,
                items: [...prevCart.items, product],
                total: prevCart.total + product.price * product.quantity
            }))
        }
    }

    // const removeToCart = (product) => {
    //     let prod = cart.items.find(p => p.id == product.id);
    //     if (prod) {
    //         cart.total -= prod.price * prod.quantity;
    //         cart.items = cart.items.filter(p => p.id != product.id);
    //     }
    // }

    // const clearCart = () => {
    //     setCart(({
    //         items: [], total: 0
    //     }))
    // }

    return (
        // <CartContext.Provider value={{ cart, addToCart, removeToCart, clearCart }}>
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )


}
export default CartProvider;