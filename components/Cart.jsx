"use client"
import React, {useRef} from 'react';
import '../app/global.css'
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus,AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai'
//import {TiDeleteOutline} from 'react-icons/Ti';
import toast from 'react-hot-toast';
import {useStateContext} from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';



export const Cart = () => {

  const cartRef = useRef();
  const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove} = useStateContext();
 

  
  const handleCheckout = async () => {
    const stripe = await getStripe();

    console.log(JSON.stringify(cartItems))
    try {
      const response = await fetch(`https://culturedapparel.vercel.app/api`, {
        // const response = await fetch(`http://localhost:3000/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });
     
  
      if(response.statusCode === 500) return;
      
      const data = await response.json();
      console.log(data);
      toast.loading('Redirecting...');
  
      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.log(error)
    }
    
  }



  return (
    <div className='cart-wrapper' ref={cartRef}>

      <div className='cart-container'>
        
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
        
        <AiOutlineLeft/>
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150}/>
            <h3>Your Shopping Bag is Empty 😔</h3>
            <Link href='/'>
              <button type='button' onClick={() => setShowCart(false)} className='btn'>
                  Continue Shopping
              </button>
            </Link>
          </div>
        )

        }

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item, index) =>(
            <div className='product' key={item._id}>
              <img className='cart-product-image' src={urlFor(item?.image[0])}
              />

              <div className='item-desc'>
                <div className='flex top'>

                  <h5>{item.name}</h5>
                  <h5>${item.price}</h5>
                  </div>

                <div className='flex bottom'>
                <p className='quantity-desc'>
                <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus/></span>
                <span className='num' >{item.quantity}</span>
                <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
              </p>
                  </div>

                  <button type="button" className='remove-item' onClick={() => onRemove(item)}> 
                  Remove
                  </button>

                </div>


              </div>
          ))
          }

        </div>

        {cartItems.length >= 1 && (
          <div className='cart-bottom'> 
              <div className='total'>
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>

              <div>
                <button type='button' className='btn' onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
        )}

      </div>

    </div>
  )
}


