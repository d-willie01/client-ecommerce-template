"use client"
import React from 'react'
import "../app/global.css"
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai';
import { Cart } from './Cart';
import {useStateContext} from '../context/StateContext'
import { set } from 'sanity';


const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
        <p className='logo'>
            <Link href="/">ALL N ALL</Link>
        </p>

        <button className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping/>
            <span className='cart-item-qty'>
              {totalQuantities}

            </span>
        </button>
        
            {showCart &&
              <Cart/>
            }
        
    </div>
  )
}
export default Navbar;

