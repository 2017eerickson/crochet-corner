import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function OrderStatus() {
  const { session_id } = useParams()
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState(null);
  const navigate = useNavigate()

// http://localhost/orderstatus/cs_test_b1pE99sPwIeubBzYCM4uLinWCNMkjoOjQuMofwH1usXrHzioFSQeAWFGNG/
  
  useEffect(()=>{
    const fetchSessionStatus = async ()=>{
      let response = null
      console.log(response)
      response = await axios.get(`http://localhost:8000/api/v1/checkout/${session_id}/`,{
        headers: {
          'Accept': 'application/json'
        }
      })
      console.log('response', response)
      setStatus(response.data.payment_status)
      setCustomerEmail(response.data.customer_email)
      console.log('hi', response)

    }
    fetchSessionStatus()
    
  },[session_id])


  return (
    <>
      {
        status == 'paid' ? 
          <p>
            We appreciate your business! A confirmation email will be sent to your email!.

            If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
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
