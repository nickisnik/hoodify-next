import React, {useState, useContext} from 'react';
import { CartProvider, useCart } from './CartContext';
import { CartContext, testContext } from '../pages/_app';

/* import CartContext from './CartContext'; */


const ShoppingCart = () => {
    const {cartItems, setCartItems} = useContext(CartContext)
    const [isEditing, setIsEditing] = useState('');
    const [tempValue, setTempValue] = useState(0);
    

    const handleClick = (item, change) => {
        const itemIndex = cartItems.indexOf(item);

        if(item.amount === 1 && change === -1) {
            setCartItems((cartItems) => {
                return [
                    ...cartItems.slice(0, itemIndex),
                    ...cartItems.slice(itemIndex + 1)
                ]
            })
            return
        }

        setCartItems((cartItems) => {
            return [
                ...cartItems.slice(0, itemIndex),
                {...item, amount: item.amount + change},
                ...cartItems.slice(itemIndex + 1)
            ]
        })
    }
    const handleChange = (event) => {
        const newAmount = parseInt(event.target.value);

        setTempValue(newAmount);
    }
    const handleClickOut = (item) => {
        const itemIndex = cartItems.indexOf(item);

        if(Number.isNaN(tempValue)) {
            return
        }
        if(tempValue === 0) {
            setCartItems((cartItems) => {
                return [
                    ...cartItems.slice(0, itemIndex),
                    ...cartItems.slice(itemIndex + 1)
                ]
            })
            return
        }

        setCartItems((cartItems) => {
            return [
                ...cartItems.slice(0, itemIndex),
                {...item, amount: tempValue},
                ...cartItems.slice(itemIndex + 1)
            ]
        })
    }
    const showTempValue = (item) => {
        if(isEditing === item.name) {
            //console.log(tempValue)
            if(Number.isNaN(tempValue)) {
                return ''
            }
            return tempValue
        }
        return item.amount
        /* isEditing ? tempValue : item.amount */
    }

    const checkOut = () => {
        console.log(cartItems)
        console.log(total)
    }

    const total = cartItems.reduce((sum, curr) => {
        return sum + (curr.price * curr.amount)
    }, 0)

    const totalRounded = Math.round((total + Number.EPSILON) * 100) / 100
    

    const shoppingItem = cartItems.map(item => 
        <div className="ShoppingCart__item__container" key={item.name}>
            <img src={item.imgURL} alt="" />
            <div className="ShoppingCart__item__name-price__container">
                <span className="ShoppingCart__item__name">{item.name}</span>
                <span className="ShoppingCart__item__price">£{item.price}</span>
            </div>
            {/* <span onClick={() => {handleClick(item, -1)}}>-</span> */}
            <div className="ShoppingCart__item__amount__container">
                <input
                    onBlur={() => {
                        handleClickOut(item);
                        setIsEditing('');
                    }}
                    onClick={() => {
                        setIsEditing(item.name);
                        setTempValue(item.amount);
                    }}
                    onChange={(event) => {
                        handleChange(event, item);
                    }}
                    type="text" value={showTempValue(item)} className='ShoppingCart__item__amount' 
                />
            </div>
            {/* <span onClick={() => {handleClick(item, 1)}}>+</span> */}
        </div>    
    )


  return (
    <div className='ShoppingCart__container'>
        <header className="ShoppingCart__header">
            Shopping Cart
        </header>

        

        <div className="ShoppingCart__item-list__wrapper">

            {shoppingItem}
        </div>
        <div className="ShoppingCart__bottom__wrapper">
            <span className="ShoppingCart__bottom__total">£{totalRounded}</span>
            <span className="ShoppingCart__bottom__VAT">(incl. VAT)</span>
            <button className='ShoppingCart__bottom__checkout' onClick={checkOut}>Check out</button>
        </div>
    </div>
  )
}

export default ShoppingCart