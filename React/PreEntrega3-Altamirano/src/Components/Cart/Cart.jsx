import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
    const { cart } = useCartContext();
    console.log(cart);

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-8 ">
                    {cart.items.length === 0 ?
                        (
                            <div className="jumbotron align-self-center">
                                <p className="fs-2">
                                    Aún no hay items en el carrito!
                                </p>
                                <p className="lead pb-3 pt-3">
                                    Continuá eligiendo productos desde aquí:
                                </p>
                                <Link className="btn btn-primary" to="/">Mas info</Link>
                            </div>
                        ) :
                        (
                            <div className="d-flex">

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className="container">
    //         <Paper elevation={3}>
    //             <Typography variant="h6" component="div" align="center" sx={{ p: 2 }}>
    //                 Cart
    //             </Typography>
    //             {cart.items.length === 0 ? (
    //                 <Typography variant="body2" align="center" sx={{ p: 2 }}>
    //                     Carrito vacío
    //                 </Typography>
    //             ) : (
    //                 <TableContainer>
    //                     <Table>
    //                         <TableHead>
    //                             <TableRow>
    //                                 <TableCell>Imagen</TableCell>
    //                                 <TableCell>Producto</TableCell>
    //                                 <TableCell>Precio</TableCell>
    //                                 <TableCell>Total</TableCell>
    //                             </TableRow>
    //                         </TableHead>
    //                         <TableBody>
    //                             {cart.items.map((item) => (
    //                                 <TableRow key={item.id}>
    //                                     <TableCell><img style={{ width: "10%", height: "10%" }} src={item.image} alt={item.title} /></TableCell>
    //                                     <TableCell>{item.title}</TableCell>
    //                                     <TableCell>${item.price}</TableCell>
    //                                     <TableCell>${item.price * item.quantity}</TableCell>
    //                                 </TableRow>
    //                             ))}
    //                             <TableRow>
    //                                 <TableCell colSpan={3}>Total:</TableCell>
    //                                 <TableCell>${cart.total.toFixed(2)}</TableCell>
    //                             </TableRow>
    //                         </TableBody>
    //                     </Table>
    //                 </TableContainer>
    //             )}
    //         </Paper>
    //     </div>
    // );
};

export default Cart;