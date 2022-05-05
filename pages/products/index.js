import React, {useState} from 'react';
import {ShoppingItemsList, ShoppingCart} from '../../components';
import ProductsData from '../../components/ProductsData';

export const getProductIds = () => {
  // would normally fetch an API

  return ProductsData.map(product => {
      return {
          params: {
              id: product.id
          }
      }
  })
}

export const getProductData = (id) => {
  const thisProductData = ProductsData.find(prod => prod.id === id);
  
  return {
    id, 
    ...thisProductData
  }
}

const ShoppingContent = ({showCart, setShowCart, cartItems, setCartItems}) => {

  return (
    <div className='ShoppingContent__wrapper'>
      
 
      

      <ShoppingItemsList />

      
    </div>
  )
}


export default ShoppingContent