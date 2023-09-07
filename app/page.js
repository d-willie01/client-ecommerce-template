import Image from 'next/image'
import './global.css'
import {Product} from '../components/Product'
import {HeroBanner} from '../components/HeroBanner'
import {FooterBanner} from '../components/FooterBanner'


export default function Home() {
  return (

    <>


   
      <HeroBanner/>
          
      

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Leather of Many Variation</p>
    </div>

    <div className='products-container'>
      {['Product1', 'Product2'].map((product) => <Product/>)}
    </div>

  
      <FooterBanner/>
    
    
    </>
  )
}
