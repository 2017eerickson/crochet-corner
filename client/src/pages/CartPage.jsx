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
    <div id='cartItems' className='rounded-xl mx-auto mt-5  w-[90%] h-[50vmin] border-2 border-orange-50  flex flex-row flex-wrap justify-center gap-8 min-h-screen items-center  '>
        <div className='w-[50%] h-[90vmin] border-2 border-pink-700 flex flex-col items-center justify-center rounded-xl bg-transparent shadow-xl'>
        {
            cartobjList ?
                cartobjList.map((item)=>(
                
                <div key={item.id} className='pt-5  flex flex-row items-center justify-between gap-2 w-[90%] p-4 h-[20vmin] bg-transparent text-amber-50 rounded-xl shadow-xl '>
                    <img src={`http://localhost/${item.photo}`} className='w-[20%] rounded-full'/>
                    <h3>{item.name}</h3>
                    <h5>${item.price}</h5>
                    <h2><button onClick={() => rmFromCart(item.id)}>X</button></h2>
                </div>    
                ))
                :
                <h1 className='text-2xl'>Your cart is empty</h1>

            }
        </div>
        <div className=' border-3 border-pink-700 m-3 h-[30vmin] flex flex-col  items-center  justify-center bg-transparent p-4 rounded-xl shadow-md'>
            <h2 className='text-xl text-white'>Cart Subtotal: ${total}.00</h2>
            <button  className='bg-pink-700 text-black p-3  border-3 border-pink-700 rounded-xl mt-2 shadow-lg' onClick={() => navigate('/checkout')}>Checkout</button>
        </div>
    </div>
  )
}
