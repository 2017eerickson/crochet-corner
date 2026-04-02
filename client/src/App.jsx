import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import {useLoaderData} from 'react-router-dom'
import NavBar from './components/NavBar'
import { useNavigate } from 'react-router-dom'
import { userConfirmation } from './utilities/authUtilities'
import { useLocation } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState(useLoaderData())
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [])
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    const fetchUser = async() => {
      let user = await userConfirmation()
      setUser(user)
    }
    fetchUser()
  }, [])

  useEffect(()=>{
    if (user && location.pathname === '/'){
      navigate('/sellerhomepage')}
  }, [user,location.pathname])


  const addToCart =(cartItemId)=>{
    let localCartItemIds = JSON.parse(localStorage.getItem("cartItems"))
    if(!localCartItemIds.includes(cartItemId)){
      localCartItemIds? localStorage.setItem("cartItems", JSON.stringify([...localCartItemIds, cartItemId])) : localStorage.setItem("cartItems", JSON.stringify([cartItemId]))
    }
    else{
      alert("item already in cart ")
    }
  }
  
  const rmFromCart =(cartItemId)=>{
    let localCartItems = JSON.parse(localStorage.getItem("cartItems"))
    localCartItems = localCartItems.filter((itemId)=> itemId !== cartItemId)
    localStorage.setItem("cartItems", JSON.stringify([...localCartItems])) 
  }

  return (
    <>
    <div className='w-[85%] flex justify-center mx-auto mt-[2vmin]'>
      <NavBar 
        cartItems={cartItems}
        user={user}
      />
    </div>
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