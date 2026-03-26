import React from 'react'
import { useParams } from 'react-router-dom'
import { useCallback, useState, useEffect } from "react";
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


export default function OrderStatus() {
  const { session_id } = useParams()
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  return (
    <div>Order Status: {session_id}</div>
  )
}
