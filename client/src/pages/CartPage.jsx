
// import React from 'react'
// import { useOutletContext } from 'react-router-dom'
// import axios from 'axios'

// export default function CartPage() {
//     const { cartItems } = useOutletContext()

//     const handleCheckout = async(e) => {
//     e.preventDefault()
//     try {
//         let response = await axios.post("/api/v1/checkout/", {items: cartItems})
//         if (response.status == 200){
//         console.log(response.data)
//         }else{
//         console.error(response.data)
//         }
//     } catch (error) {
//         console.error(error)
//         }
//     }

//   return (
//     <div>
//         <h1>Cart</h1>
//         <button onClick={(e)=> handleCheckout(e)}>Checkout</button>
//     </div>
//   )
// }


import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/api/v1/checkout/" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}