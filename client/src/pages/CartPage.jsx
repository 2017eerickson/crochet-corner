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
    <div id='cartItems' className='mx-auto mt-5 w-[75vmin] h-[75vmin] border-2 border-orange-50  flex flex-col justify-center min-h-screen items-center gap-4 '>
        {
            cartobjList ?
                cartobjList.map((item)=>(
                
                <div key={item.id} className=' border-3 border-pink-700 flex flex-row items-center justify-between gap-2 w-5/6 p-4 h-5/6 bg-transparent text-amber-50 rounded-xl shadow-md '>
                    <img src={`http://localhost/${item.photo}`} className='w-[20vmin] rounded-full'/>
                    <h3>{item.name}</h3>
                    <h5>${item.price}</h5>
                    <h2><button onClick={() => rmFromCart(item.id)}>X</button></h2>
                </div>    
                ))
                :
                <h1 className='text-2xl'>Your cart is empty</h1>

            }
            <div className=' border-3 border-pink-700 m-8 flex flex-col  items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-md'>
                <h2 className='text-xl'>Cart Subtotal: ${total}.00</h2>
                <button  className='bg-green-500 text-white p-3  border-3 border-pink-700 rounded-l-full mt-2' onClick={() => navigate('/checkout')}>Checkout</button>
            </div>
    </div>
  )
}
