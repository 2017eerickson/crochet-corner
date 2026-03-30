import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function OrderStatus() {
  const { session_id } = useParams()
  const [status, setStatus] = useState(null);
  const navigate = useNavigate()
// http://localhost/orderstatus/cs_test_b1vLHn60BHMPGGpUWr1VzYBWi5XNpwPqOhn9PcLSNgapR4pY9eKTRALopC/

  useEffect(()=>{
    fetchSessionStatus
  },[])

  const fetchSessionStatus = async ()=>{
    const response = await axios.get(`api/v1/checkout/${session_id}/`)
    setStatus(response.data.payment_status)
  }
  
  if (status == 'paid'){
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to your email!.

          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    )
    }
  if (status == 'failed'){
      
      return (
        navigate('/checkout')
      )
    }
  if(status == 'canceled'){
    return (
      navigate('/cart')
    )
  }

  return (
    status?
    <section id="status">
      <p>
        Your payment status is: {status}
      </p>
    </section>
    :
    <section className='min-h-screen flex flex-row justify-center ' id="loading">
      <p>
        Loading...
      </p>
    </section>
  )
}
