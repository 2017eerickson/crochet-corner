import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import {useLoaderData} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState(useLoaderData())
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [])
  
  const addToCart =(cartItemId)=>{

    let localCartItemIds = JSON.parse(localStorage.getItem("cartItems"))

  // if localCartItemIds.includes(cartItemId)
  //    pass

    localCartItemIds? localStorage.setItem("cartItems", JSON.stringify([...localCartItemIds, cartItemId])) : localStorage.setItem("cartItems", JSON.stringify([cartItemId]))
    console.log(localStorage.getItem("cartItems"))
  }
  const rmFromCart =(cartItemId)=>{

          let localCartItems = JSON.parse(localStorage.getItem("cartItems"))
          localCartItems = localCartItems.filter((itemId)=> itemId !== cartItemId)
          localStorage.setItem("cartItems", JSON.stringify([...localCartItems])) 
          console.log(localStorage.getItem("cartItems"))
  }
  

  // const addToCart = (cartItem) => {
    //   cartItems? setCartItems([...cartItems, cartItem]) : setCartItems([cartItem])

    // }
  

// need to add cart items to localstorage and set state default to retrive cart items 
    // const rmFromCart = (cartItemId) => {
    //     setCartItems(cartItems.filter((cartItem)=>(
    //         cartItems.id !== cartItemId
    //     )))
    // }


  return (
    <>
      <NavBar 
        cartItems={cartItems}
        user={user}
      />
      <Outlet context={{ 
        items, 
        setItems, 
        cartItems, 
        setCartItems,
        addToCart,
        rmFromCart,
        user,
        setUser
         }}/>
    </>
  )
}

export default App