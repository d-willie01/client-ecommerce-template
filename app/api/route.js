import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    const data = await request.json()
    


        try {
          const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            
            shipping_options: [
              // Testing Shipping Rate
              // { shipping_rate: 'shr_1NsB5SBwzquAK4jUxKO7V5sG' },
              { shipping_rate: 'shr_1NsKwQBwzquAK4jUuCXPzXxI' },
              { shipping_rate: 'shr_1NrxWDBwzquAK4jU43qLvzoI' }
              
            ],
            line_items: data.map((item) => {
              const img = item.image[0].asset._ref;
              const newImage = img.replace('image-', 'https://cdn.sanity.io/images/gqq99xwy/production/').replace('-webp', '.webp').replace('/PNG', '.PNG');
    
              return {
                
                price_data: { 
                  currency: 'usd',
                  product_data: { 
                    name: item.name,
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
            success_url: `https://culturedapparel.vercel.app/success`,
            cancel_url: `https://culturedapparel.vercel.app`,
          }
    
          // Create Checkout Sessions from body params.
          const session = await stripe.checkout.sessions.create(params);
          console.log(session)
    
          //res.status(200).json(session);
          return NextResponse.json(session);
        } catch (err) {
            return NextResponse.json({ err })
        }
    
   
}

