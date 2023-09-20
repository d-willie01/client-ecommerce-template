'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs';
import {useRouter} from 'next/router'
import '../global.css';

import { useStateContext } from '../../context/StateContext';
import { runFireWorks } from '@/lib/utils';

 const Success = () => {

  useEffect(() =>{
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks()
  },[])

  const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

  const [order, setOrder] = useState(null);


  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill/>
        </p>

        <h2>Thank you for your order!</h2>

        <p className='email-msg'>Check your email inbox for a receipt!</p>

        <p className='description'>If you have questions/concerns, call at: 

        <a className='email'>
          (1)800-456-2187
        </a>

        </p>

        <Link href='/'>
          <button type='button' className='btn' width='300px'>
          Continue Shopping!
          </button>
        </Link>

      </div>

    </div>
  )
}
export default Success

