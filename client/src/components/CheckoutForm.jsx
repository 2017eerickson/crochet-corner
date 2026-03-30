import React, { useCallback } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
// import { fetchClientSecret } from '../utilities/stripeUtilities';
import axios from 'axios';


const stripePromise = loadStripe("pk_test_51TC2FmD53YbrJkK54R7IqgvcQbG7GgXAFyNr755oMAYElk6CipXJkpARmVHwDAvSqXhAj2w8kHmVhAjayYWK3U0a00SKeTAVl3");


function CheckoutForm() {
  // const [clientSecret, setClientSecret] = useState('');
  let cartItems = JSON.parse(localStorage.getItem("cartItems"))

  const fetchClientSecret = useCallback(async() => {
    // Create a Checkout Session
    const response = await axios.post('api/v1/checkout/', {'cart_items': cartItems});
    if (response.status === 200) {
      return response.data.clientSecret;
    } else {
      console.error(response.data);
      return null;
    } 
  }, []);
  const options = {fetchClientSecret};


  return (
    <div className='min-h-screen min-w-50vmin'>
      {options != null? 
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
       : 
        <p>Loading...</p>
      }
    </div>
  );
}
 export default CheckoutForm;