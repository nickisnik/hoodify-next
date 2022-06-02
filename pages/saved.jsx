import React, {useEffect, useState} from 'react';
import { onSnapshot } from 'firebase/firestore';
import { collectionRef } from '../utils/firebase';
import Link from 'next/link'


const Saved = () => {
 
    const [productList, setProductList] = useState([{data: {id: '1', name: "T-Shirt Men's White", price: 7.99, favourite: false, amount: 1, imgURL: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}}]); 
    const [productJSX, setProductJSX] = useState([]);

   /*  const productListJSX = productList.map((item) => {
        return <h1>{item.productName}</h1>
    })  */

    useEffect(() => {
        onSnapshot(collectionRef, (snapshot) => {
            let products = [];
            snapshot.docs.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id })
            })
            console.log(products)
            setProductList(products)
        })

    }, [])

 
    
    const items = productList.map((product, index) => {
        return (
        <div className="ShoppingItem">
            <Link key={product?.data?.id} href={`/products/` + product?.data?.id}>
              <a className="ShoppingItem__img__link-container">
                <img /* onClick={() => navigate(`/products/${product.id}`)} */ className='ShoppingItem__img' alt='product-image' src={product?.data?.imgURL}/>
                <div className="ShoppingItem__favorite-icon"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"  fill-rule="evenodd" clip-rule="evenodd"><path fill="" d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg></div>
              </a>
            </Link>
            <div className="ShoppingItem__details">
            <a /* onClick={() => navigate(`/products/${product.id}`)} */ className='ShoppingItem__name-link'>{product?.data?.name}</a>
            <span>£{product?.data?.price}</span>
            </div>
        </div>
        )
    })

    useEffect(() => {
        console.log(productList)
    }, [productList])


  return (
    
    <div className="SavedItems__container">
        <span className='SavedItems__title'>Saved Items</span>
        <div className='ShoppingItemsList'>
            {items}
        </div>
    </div>
  )
}

export default Saved