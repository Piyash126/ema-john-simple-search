import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
// const {a,b}={a:32,b:63}

const Shop = () => {
    const [cart,setCart]=useState([]);
// const data=useLoaderData();
// const products=data.products
    const {products}=useLoaderData();
     // useEffect(()=>{
    //     console.log("Products Load before fetch");
    //     fetch('products.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setProducts(data)
    //         console.log("productLoaded")
    //     })
    // },[])

    useEffect(()=>{
        console.log("Products Load after fetch",products);

        const storedCart=getStoredCart();
        const savedCart=[];
        // console.log(storedCart);
        //storedCart r bitor jotoghula id ache
        for(const id in storedCart){
            // console.log(id);
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
            console.log(addedProduct);
            savedCart.push(addedProduct)

            }
            setCart(savedCart)
        }
    },[products])

    

    const handleAddtoCart=(slectedProduct)=>{
        // console.log(product);
        let newCart=[];
        const exists=cart.find(product=>product.id===slectedProduct.id);
        if(!exists){
          slectedProduct.quantity=1;
          newCart=[...cart,slectedProduct]
        }else{
          const rest=cart.filter(product=>product.id!==slectedProduct.id);
          exists.quantity=exists.quantity + 1;
          newCart=[...rest,exists];
        }
        setCart(newCart);
        addToDb(slectedProduct.id);
    }

    const clearCart=()=>{
        setCart([]);
        deleteShoppingCart();
      }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {products?.map(product=><Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;