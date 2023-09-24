import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//POST function to create the url for the Stripe checkout
//acceots the request, which has the data for the specific product
export async function POST(request) {
    const data = await request.json()
    


        try {
            {/* Parameter block to add the lines for the user input in checkout must keep them standard to Stripe docs */}
          const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            
            shipping_options: [
              { shipping_rate: 'shr_1NrxWDBwzquAK4jU43qLvzoI' },
              { shipping_rate: 'shr_1NsKwQBwzquAK4jUuCXPzXxI' }
            ],
            line_items: data.map((item) => {
              const img = item.image[0].asset._ref;
              const newImage = img.replace('image-', 'https://cdn.sanity.io/images/gqq99xwy/production/').replace('-webp', '.webp').replace('/PNG', '.PNG');
    
              return {
                
                price_data: { 
                  currency: 'usd',
                  product_data: { 
                    name: item.name,
                    description: item?.size,
                    images: [newImage],
                  },
                  unit_amount: item.price * 100,
                },
                adjustable_quantity: {
                  enabled:true,
                  minimum: 1,
                },
                quantity: item.quantity
              }
            }),
            // success_url: `https://localhost:3000/success`,
            // cancel_url: `localhost:3000`,
            success_url: `https://allnall.vercel.app/success`,
            cancel_url: `https://allnall.vercel.app`,
          }
    
          // Create Checkout Sessions from body params.
          const session = await stripe.checkout.sessions.create(params);
          console.log(session)
    
          //res.status(200).json(session);
          return NextResponse.json(session);
        } catch (err) {

            //returns the error back to the frontend for analysis
            return NextResponse.json({ err })
        }
    
   
}

