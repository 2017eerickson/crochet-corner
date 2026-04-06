import React, { useCallback } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { fetchClientSecret } from '../utilities/stripeUtilities';

const stripePromise = loadStripe("pk_test_51TC2FmD53YbrJkK54R7IqgvcQbG7GgXAFyNr755oMAYElk6CipXJkpARmVHwDAvSqXhAj2w8kHmVhAjayYWK3U0a00SKeTAVl3");

function CheckoutForm() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"))

  const fetchSecret = useCallback(async() => {
    const response = await fetchClientSecret(cartItems);
    if (response.status === 200) {
      return response.data.clientSecret;
    } else {
      console.error(response.data);
      return null;
    } 
  }, []);
  const options = {fetchSecret};

  return (
    <div className=' min-h-screen w-2/3 h-2/3 flex flex-row  justify-center mx-auto mt-8'>
      {options != null? 
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
        <div className=' w-full h-full p-2  border-3 border-pink-950 rounded-xl shadow-xl  bg-amber-50'>
          <EmbeddedCheckout />
        </div>
        </EmbeddedCheckoutProvider>
       : 
        <p>Loading...</p>
      }
    </div>
  );
}
 export default CheckoutForm;