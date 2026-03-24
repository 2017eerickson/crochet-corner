import React, { useEffect, useState } from 'react';
import { Checkout } from '@stripe/react-stripe-js';
import axios from 'axios';


function EmbeddedCheckoutForm() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Fetch the client secret from your Django backend
    axios.post('/api/create-checkout-session/')
      .then(response => setClientSecret(response.data.clientSecret))
      .catch(error => console.error(error));
  }, []);

  if (!clientSecret) {
    return <p>Loading checkout...</p>;
  }

  return (
    <Checkout
      options={{
        clientSecret,
      }}
    />
  );
}
 export default EmbeddedCheckoutForm;