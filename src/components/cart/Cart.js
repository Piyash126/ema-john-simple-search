import React from 'react';
import './Cart.css'
import style from './card.module.css'
const Cart = ({cart,clearCart,children}) => {
    // console.log(cart);
    let total=0;
    let shipping=0;
    let quantity=0;
    
    //cart r bitor jotoghula product ache.
    for(const product of cart){
        quantity=quantity + product.quantity;
        total=total + product.price * product.quantity
        shipping=shipping + product.shipping * product.quantity
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
                <h4 className={style.p}>Order Summary</h4>
                <p className='p'>Selected Items:{quantity}</p>
                <p>Total Price:${total}</p>
                <p>Total Shiping:${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal}</h5>
                <button onClick={clearCart} className='clear-cart'>Clear Cart</button>
                {children}
        </div>
    );
};

export default Cart;