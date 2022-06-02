import React, {useContext} from 'react'
import { getProductIds, getProductData } from '.';
import { CartProvider } from '../../components/CartContext';
import { CartContext } from '../_app';
import { saveProduct } from '../../utils/firebase';


export const getStaticPaths = async () => {
   

    const paths = getProductIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const productData = getProductData(params.id)

    return {
        props: {
            productData
        }
    }
}
  

const ProductDetails = ({ productData }) => {
    const {cartItems, setCartItems} = useContext(CartContext);

    const handleAddItem = (item) => {
        const cartArr = cartItems.map((product) => product);
        if (cartArr.some((product, index) => {
          if(product.name === item.name) {
            setCartItems((items) => {
              return [
                ...items.slice(0, index),
                {...product, amount: product.amount + 1},
                ...items.slice(index + 1)
              ]
            })
          }
          return product.name === item.name
        })){
          return 
        } 
          
        setCartItems((prevItems) => [...prevItems, item])
    }

    const addFavourite = (item) => {
      saveProduct(item);
      console.log(item)

    }

  return (
    <div className='product-details__wrapper'>
        <header className="mobile__product-details__text__header">{productData.name}</header>
        <div className="product-details__img-grid__container">
            <div className="product-details__img-main">
                <img src={productData.imgURL} alt="" />
                <div className="ShoppingItem__favorite-icon" onClick={() => {addFavourite(productData)}}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"  fillRule="evenodd" clipRule="evenodd"><path fill="" d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg></div>
            </div>
            <img src={productData.imgURL} alt="" />
            <img src={productData.imgURL} alt="" />
            <img src={productData.imgURL} alt="" />
        </div>
        <section className='product-details__text__wrapper'>
            <span className='product-details__text__name'>{productData.name}</span>
            <header className='product-details__text__descr__header'>Product details</header>
            <p className='product-details__text__descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam libero? Modi quibusdam, deleniti maxime autem incidunt culpa voluptatem consequuntur. Libero, culpa. Repellat accusantium repellendus deleniti cum nulla voluptatum veniam.</p>
            <header className='product-details__text__descr__header'>Materials</header>
            <p className='product-details__text__descr'>85% Cotton, 15% Polyester <br/> All materials are ethically sourced</p>
        </section>
        <button className='product-details__add-button' onClick={() => {handleAddItem(productData)}}>Add to cart</button>
    </div>
  )
}

export default ProductDetails