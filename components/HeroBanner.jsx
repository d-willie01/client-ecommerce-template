import React from 'react'
import '../app/global.css'
import Link from 'next/link'

export const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beat-solo'>Small Text</p>
            <h3>Mid Text</h3>
           <img src='' alt='headphones' className='hero-banner-image'></img> 

           <div>
            <Link href="/product/id">
                <button>
                    Button Text
                </button>
            </Link>
            <div className='desc'>
                <h5>Description</h5>
                <p>Description</p>
            </div>
           </div>
        </div>
    </div>
  )
}
