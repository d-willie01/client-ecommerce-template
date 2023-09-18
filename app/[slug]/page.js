"use client"
import React, {useEffect, useState} from 'react'
import "../global.css"
import {client, urlFor} from '../../lib/client'
import { groq} from 'next-sanity';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar} from 'react-icons/ai'
import {Product} from '../../components/Product'

const Page = (props) => {

  const [product, setProduct] = useState();
  const [allProducts, setAllProducts] = useState();
  const [image, setImage] = useState()

  const SLUG = props.params.slug


  useEffect(() =>{
    const getStaticSideProps = async() => {

  const productData = await client.fetch(groq`*[_type == 'product' && slug.current == '${SLUG}'][0]`);
  setProduct(productData)

  const productsData = await client.fetch(groq`*[_type == 'product']`);

  setAllProducts(productsData)
  console.log(productData)
 
  const url = urlFor(productData.image[0])
  setImage(url);


     
      
  }


  getStaticSideProps();
  },[])

  return (

    <div>
      <div className='product-detail-container'>


        <div>



        <div >
          <img className='product-detail-image' src={image}/>
          </div>

          {/* <div className='small-image-container'>
            {image?.map((item, i) => (
              <img src={urlFor(item)}
              className=''
              onMouseEnter=""
              />
            ))

            }

          </div> */}



        </div>

        <div className='product-detail-desc'>
            <h1>{product?.name}</h1>
            <div className='reviews'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>

              <p>
              (30)
            </p>
            </div>

           
            <h4>Details</h4>
           
            <p>{product?.details}</p>

            <p className='price'>${product?.price}</p>

            <div className='quantity'>
              <h3>Quantity:</h3>
              <p className='quantity-desc'>
                <span className='minus' onClick=""><AiOutlineMinus/></span>
                <span className='num' onClick="">0</span>
                <span className='plus' onClick=""><AiOutlinePlus/></span>
              </p>
            </div>

            <div className='buttons'>

              <button type='button' className='add-to-cart' onClick="">Add To Cart</button>

              <button type='button' className='buy-now' onClick="">Buy Now</button>

            </div>
        </div>




          
        </div>


          <div className='maylike-products-wrapper'>
            <h2>You May Also Like</h2>
            <div className='marquee'>
                <div className='maylike-products-container track'>
                  {
                    allProducts?.map((item) =>(
                      <Product key={item._id} product ={item}/>
                    ))
                  }

                </div>
            </div>
          </div>


    </div>
    
  )
}

export default Page
