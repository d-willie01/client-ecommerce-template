"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import '../app/global.css';
import {Product} from '../components/Product';
import {HeroBanner} from '../components/HeroBanner';
import {FooterBanner} from '../components/FooterBanner';
import {client} from '../lib/client'
import { groq} from 'next-sanity';
import { urlFor } from '@/lib/client';


const Home = () => {
  const [products, setProducts] = useState();
  const [bannerData, setBannerData] = useState();
  const [imageData, setImageData] = useState();


  useEffect(() =>{
    const getServerSideProps = async() => {


      const productsData = await client.fetch(groq`*[_type == 'product']`)
      setProducts(productsData)

     
  
      const bannerDataApi = await client.fetch(groq`*[_type == 'banner']`)
      const imageUrl = urlFor(bannerDataApi[0].image)
      console.log(bannerDataApi[0].image)
      setImageData(imageUrl)
      
      setBannerData(bannerDataApi[0])
      
   
  }

  getServerSideProps();
  },[])
  

  return(
    <>

   
       
      <HeroBanner bannerData={bannerData} image={imageData}/>
          
      
    
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Leather of Many Variations</p>
    </div>
    
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
    
    
      <FooterBanner footerBanner={bannerData} image={imageData}/> 
    
    
    </>
  )
}


export default Home;