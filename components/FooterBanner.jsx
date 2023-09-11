import React from 'react'
import Link from 'next/link';

export const FooterBanner = (footerBanner) => {
  console.log(footerBanner)

  const data = footerBanner.footerBanner;
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{data?.discount}</p>
          <h3>{data?.largeText1}</h3>
          <h3>{data?.largeText2}</h3>
          <p>{data?.saleTime}</p>
        </div>
        <div className='right'>
          <p>{data?.smallText}</p>
          <h3>{data?.midText}</h3>
          <p>{data?.desc}</p>
          <Link href={`/product/${data?.product}`}>
            <button>
              {data?.buttonText}
            </button>
          </Link>
        </div>

        <img src={footerBanner?.image} className='footer-banner-image'/>
      </div>
    
    </div>
  )
}
