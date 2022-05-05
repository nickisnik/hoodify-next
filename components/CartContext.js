import React, {useState, useContext, createContext} from 'react';

const CartContext = createContext({});


export function useCart() {
    return useContext(CartContext)
}
/* export function useCartUpdate() {
    return useContext(CartUpdateContext)
} */

export function CartProvider({children}) {
    /* const [cartProducts, setCartProducts] = useState('Product'); */
    const cartProducts = 'Products here!...'

    /* function addCartProduct() {
        setCartProducts(cartProducts => [...cartProducts, 'New Item'])
    } */

    return (
        <CartContext.Provider value='Testerrr'>
                {children}
        </CartContext.Provider>
    )
}