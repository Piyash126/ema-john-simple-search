import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewContent from '../reviewcontent/ReviewContent';
import Cart from '../cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {products,previousCart}=useLoaderData();
    const [cart,setCart]=useState(previousCart);

    const handleRemoveItem=(id)=>{
        // console.log(id);
        //sobghula hoile filter r akta hoile find
        const remaing=cart.filter(product=>product.id !==id);
        setCart(remaing);
        removeFromDb(id);
    }

    const clearCart=()=>{
        setCart([]);
        deleteShoppingCart();
      }

    return (
        <div className="shop-container">
      <div className="orders-container">
        {
            cart.map(product=><ReviewContent key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewContent>)
        }

        {
            cart.length === 0 && <h2>No items for Review <Link to="/">Shop More</Link></h2>
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to='/shipping'>
          <button>Procced Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
    );
};

export default Orders;