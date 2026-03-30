import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    
    const { items, rmFromCart} = useOutletContext()
    const navigate = useNavigate()

    let cartIds = JSON.parse(localStorage.getItem("cartItems"))
    let cartobjList = items.filter((item) => cartIds.includes(item.id))
    let listOfPrices = cartobjList.map((item) => parseInt(item.price))
    let total = listOfPrices.reduce((acc, price) => acc + price, 0)


  return (
    <div id='cartItems' className='m-8 flex flex-col  min-h-screen items-center gap-4'>
        {
            cartobjList ?
                cartobjList.map((item)=>(
                
                <div key={item.id} className=' flex flex-row items-center justify-between w-1/2 p-4 bg-orange-50 rounded-xl shadow-md'>
                    <h3>{item.name}</h3>
                    <h5>{item.price}</h5>
                    <button onClick={() => rmFromCart(item.id)}>X</button>
                </div>    
                ))
                :
                <h1 className='text-2xl'>Your cart is empty</h1>

            }
            <div>
                <h2 className='text-xl'>Cart Subtotal: ${total}</h2>
                <button  onClick={() => navigate('/checkout')} className='bg-green-500 text-white px-4 py-2 border-2 rounded-lg mt-4'>Checkout</button>
            </div>
    </div>
  )
}
