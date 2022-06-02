import React from 'react';
import {ShoppingCart} from './'
import Link from 'next/link'
/* import cartImg from '../assets/cart 1.svg'; */


const NavBar = ({showCart, setShowCart, cartItems, setCartItems}) => {
  /* let navigate = useNavigate(); */
  const handleCartShow = () => {
    setShowCart((prevState) => !prevState)
  }

  return (
    <div className='NavBar__content'>
      <div className="NavBar__content__link-container"><Link href="/products"><a className="NavBar__content__link">Shop</a></Link></div>
      <div className='NavBar__content__saved-container'>
        <Link href="/saved"><a className='NavBar__content__link'>Saved</a></Link>
      </div>
      
      <div className="NavBar__content__logo-container"><Link href="/"><span className='NavBar__content__logo'>Hoodify</span></Link></div>
      <div className="NavBar__content__cart-container"><img src="/cart.svg" alt="Cart Image!" className="NavBar__content__cart-button" onClick={handleCartShow} /></div>
      

      {showCart ? <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} /> : ''}
    </div>
  )
}

export default NavBar