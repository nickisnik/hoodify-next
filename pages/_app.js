import '../styles/globals.css'
import { useState, useContext, createContext } from 'react';
import {NavBar, Footer} from '../components/';
import { CartProvider } from '../components/CartContext';

export const CartContext = createContext('Productss');

function MyApp({ Component, pageProps }) {

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);


  return (
    <CartContext.Provider value={{cartItems, setCartItems, showCart, setShowCart}}>

    <CartProvider>
      <NavBar cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>

    </CartContext.Provider>
  )
}

export default MyApp
