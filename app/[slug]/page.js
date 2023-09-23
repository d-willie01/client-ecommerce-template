"use client"
import React, {useEffect, useState} from 'react'
import "../global.css"
import {client, urlFor} from '../../lib/client'
import { groq} from 'next-sanity';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar} from 'react-icons/ai'
import {Product} from '../../components/Product'
import {useStateContext} from '../../context/StateContext'


const Page = (props) => {

  const [product, setProduct] = useState();
  const [allProducts, setAllProducts] = useState();
  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);
  const {decQuantity, incQuantity, qty, onAdd, setShowCart} = useStateContext();
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizePresent, setSizePresent] = useState(false);

  const SLUG = props.params.slug


  useEffect(() => {
    //console.log(product);
  }, [product]);

  const handleBuyNow = () =>{
    
  const updateProduct = {
    ...product,
    size: selectedSize
  }
    onAdd(updateProduct, qty);

    setShowCart(true);

  }

  function mapArray(arr) {
    // Create an empty array to store the new values
    let result = [];
  
    // Iterate through the input array and apply the function to each element
    for (let i = 0; i < arr.length; i++) {
      // Call the provided function with the current array element
      const newValue = urlFor(arr[i]);
  
      // Push the result of the function into the result array
      result.push(newValue);
    }
  
    // Return the new array with the updated values
    return result;
  }


  useEffect(() =>{
    const getStaticSideProps = async() => {

  const productData = await client.fetch(groq`*[_type == 'product' && slug.current == '${SLUG}'][0]`);
  setProduct(productData)
  console.log(productData)
  if(productData?.size !== 'none')
  {
    setSizePresent(true);
  }

  const productsData = await client.fetch(groq`*[_type == 'product']`);

  setAllProducts(productsData)
  console.log(productData)
 
  console.log(productData.image)


    const data =(mapArray(productData.image));

    setImage(data);

    console.log(image);
     
      
  }


  getStaticSideProps();
  },[])
const addFunction = () =>{
  //console.log(selectedSize);
  //console.log(product)

  const updateProduct = {
    ...product,
    size: selectedSize
  }
 
 
  onAdd(updateProduct, qty );
}
  

  return (

    <div>
      <div className='product-detail-container'>


        <div>



        <div >
        {image[index] && (
             <img className='product-detail-image' src={image[index]} alt={`Product Image ${index}`} />
          )}
          </div>

          <div className='small-image-container'>
            {image?.map((item, i) => (
              <img key={item._id} src={item}
              className={i === index ? 'small-image selected-image' :
            'small-image'}
              onMouseEnter={() => setIndex(i)}
              />
            ))

            }

          </div>



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


            {/* Size selection */}
{sizePresent ?(
              <div style={{
                height:55,
                margin: 5,
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
                }}>
  
                  <button onClick={() => {
                    setSelectedSize('S')
                   
                    
                    }} className={`btn-size${selectedSize === 'S' ? '-selected' : ''}`}>
                      S
                  </button>
  
                  <button onClick={() => {
                    setSelectedSize('M') 
                
                  }} className={`btn-size${selectedSize === 'M' ? '-selected' : ''}`}>
                      M
                  </button>
                  <button onClick={() => {
                    setSelectedSize('L') 
                  
                  }} className={`btn-size${selectedSize === 'L' ? '-selected' : ''}`}>
                      L
                  </button>
                  <button onClick={() => {
                    setSelectedSize('XL') 
                  
                  }} className={`btn-size${selectedSize === 'XL' ? '-selected' : ''}`}>
                      XL
                  </button>
                
              </div>
) :  (
  <div></div>
)}
 

            <div className='quantity'>
              <h3>Quantity:</h3>
              <p className='quantity-desc'>
                <span className='minus' onClick={decQuantity}><AiOutlineMinus/></span>
                <span className='num' >{qty}</span>
                <span className='plus' onClick={incQuantity}><AiOutlinePlus/></span>
              </p>
            </div>

            <div className='buttons'>

              <button type='button' className='add-to-cart' onClick={addFunction}>Add To Cart</button>

              <button type='button' className='buy-now' onClick={handleBuyNow}>Buy Now</button>

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
