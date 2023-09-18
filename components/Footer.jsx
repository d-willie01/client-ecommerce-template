import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import '../app/global.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Darius Williams All Rights Reserved</p>

      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>

      </p>
    </div>
  )
}

export default Footer
