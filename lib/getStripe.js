import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () =>{
    if(!stripePromise)
    {
        stripePromise = loadStripe('pk_live_51Nq0cFBwzquAK4jUOqOg75KOpHaE9PdmYI7exqn8K65Av02BORYqvXQniRUmNd4yHtlmfHq6dVYvibJYlaoesjgu00qXEHoqMn');
       
    }
    return stripePromise
}

export default getStripe;
