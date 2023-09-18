import Reac, {useRef} from 'react';
import '../app/global.css'
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus,AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/Ti';
import toast from 'react-hot-toast';
import {useStateContext} from '../context/StateContext';
import { urlFor } from '../lib/client';



export const Cart = () => {

  const cartRef = useRef();
  const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove} = useStateContext();
  console.log('hot garbage');
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
                <span className='num' onClick="">{item.quantity}</span>
                <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
              </p>
                  </div>

                  <button type="button" className='remove-item' onClick={() => onRemove(item)}> 
                  <TiDeleteOutline/>
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
                <button type='button' className='btn'>
                  Checkout
                </button>
              </div>
            </div>
        )}

      </div>

    </div>
  )
}


