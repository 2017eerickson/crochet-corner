import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { fetchSessionDetails } from '../utilities/stripeUtilities';
import { editItem } from '../utilities/crudUtilities';
import { useOutletContext } from 'react-router-dom';


export default function OrderStatus() {
  const { session_id } = useParams()
  const{ setCartItems, setQuantity } = useOutletContext()
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState(null);
  const navigate = useNavigate()

// http://localhost/orderstatus/cs_test_b1pE99sPwIeubBzYCM4uLinWCNMkjoOjQuMofwH1usXrHzioFSQeAWFGNG/
  
  useEffect(()=>{
    const handleSessionDetails = async ()=>{
      let response = null
      console.log(response)
      response = await fetchSessionDetails(session_id)
      console.log('response', response)
      setStatus(response.payment_status)
      setCustomerEmail(response.customer_email)

    }
    handleSessionDetails()
    
  },[session_id])

  const handleUpdatedItem = async () => { 
      let cartIds = JSON.parse(localStorage.getItem("cartItems"))
      for (let id of cartIds){
        let item = await editItem(id, {sold: true})
        console.log(item)
      
    localStorage.removeItem("cartItems")
    }
  }
  if (status === 'paid'){
    handleUpdatedItem()
    setCartItems([])
    setQuantity(0)
  }

  return (
    <>
      {
        status == 'paid' ? 
        <div className='min-h-screen flex flex-col items-center justify-center text-white gap-5' id="success">

          <div className='border-2 h-[55%] w-[70%] p-10 border-green-500 rounded-xl shadow-lg text-center flex flex-col items-center justify-center gap-5'>
            <p>We appreciate your business! A confirmation email will be sent to  {customerEmail}.</p>

            <p>If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.</p>
          </div>
        </div>
        :
        status == 'failed' ?
          navigate('/checkout')
        :
        status == 'canceled' ?
          navigate('/cart')
        :
        <section className='min-h-screen text-white flex flex- items-center justify-center ' id="loading">
          <p>
            Loading...
          </p>
        </section>

      }
    </>
  )
}
