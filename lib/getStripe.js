import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () =>{
    if(!stripePromise)
    {
        stripePromise = loadStripe('pk_test_51Nq0cFBwzquAK4jUFBSh5b3oeq1DK2nrUdwOupDkDDUDaj8R0aomktnswDYDXRZnFjtNNd5GsdVP6cpAAru4VPA900JdcYsFU9');
    }
    return stripePromise
}

export default getStripe;
