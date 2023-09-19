import React from 'react';
import '../app/global.css';
import Link from 'next/link';
import { urlFor } from '@/lib/client';

export const HeroBanner = (heroBanner) => {
    console.log(heroBanner.image)
    const heroBannerInfo = heroBanner.bannerData
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beat-solo'>{heroBannerInfo?.smallText}</p>
            <h3>{heroBannerInfo?.midText}</h3>
            <h1>{heroBannerInfo?.largeText1}</h1>
           <img src={heroBanner?.image} alt='headphones' className='hero-banner-image'></img> 

           <div>
            <Link href={`/product/${heroBannerInfo?.product}`}>
                <button>
                    {heroBannerInfo?.buttonText}
                </button>
            </Link>
           </div>
        </div>
    </div>
  )
}
