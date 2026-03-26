import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import {useLoaderData} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [items, setItems] = useState(useLoaderData())
  const [cartItems, setCartItems] = useState(null)

  const addToCart = (cartItem) => {
      cartItems? setCartItems([...cartItems, cartItem]) : setCartItems([cartItem])
    }
  console.log(cartItems)

// need to add cart items to localstorage and set state default to retrive cart items 
    // const rmFromCart = (cartItemId) => {
    //     setCartItems(cartItems.filter((cartItem)=>(
    //         cartItems.id !== cartItemId
    //     )))
    // }


  return (
    <>
      <NavBar/>
      <Outlet context={{ 
        items, 
        setItems, 
        cartItems, 
        setCartItems,
        addToCart,
        // rmFromCart
         }}/>
    </>
  )
}

export default App