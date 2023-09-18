"use client"
import React from 'react'
import "../app/global.css"
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <p className='logo'>
            <Link href="/">JSM Headphones</Link>
        </p>

        <button className='cart-icon' onClick="">
            <AiOutlineShopping/>
            <span className='cart-item-qty'>
                1

            </span>
        </button>
    </div>
  )
}
export default Navbar;

