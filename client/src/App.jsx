import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import {useLoaderData} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [items, setItems] = useState(useLoaderData())
  const [cartItems, setCartItems] = useState([1,2,3])
  return (
    <>
      <NavBar/>
      <Outlet context={{ items, setItems, cartItems, setCartItems }}/>
    </>
  )
}

export default App