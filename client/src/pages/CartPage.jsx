// import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import React, { useCallback, useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

const stripePromise = loadStripe("pk_test_51TC2FmD53YbrJkK54R7IqgvcQbG7GgXAFyNr755oMAYElk6CipXJkpARmVHwDAvSqXhAj2w8kHmVhAjayYWK3U0a00SKeTAVl3");

export default function CartPage() {
    const [clientSecret, setClientSecret] = useState(' ')
    
    const fetchClientSecret = async(e) => {
    e.preventDefault()
    try {
        let response = await axios.post("/api/v1/checkout/", {
          'cart_items': [9,6,5],
        })
        if (response.status == 200){
        console.log(response.data)
        setClientSecret(response.data.clientSecret)
        }else{
        console.error(response.data)
        }
    } catch (error) {
        console.error(error)
        }
    }

  
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise? stripePromise : null}
        options={clientSecret ? {clientSecret} : null}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
      <button onClick={fetchClientSecret}>Checkout</button>
    </div>
  )
}


