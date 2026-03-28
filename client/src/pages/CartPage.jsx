import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'


export default function CartPage() {
    useEffect(()=>{
        // if cart items change update ui
    }, [items])

    const { items, rmFromCart } = useOutletContext()
    // needto grab cart ids from local storage 
    let cartIds = JSON.parse(localStorage.getItem("cartItems"))
    // need to get objects using filter on items using cart ids 
    let cartItems = items.filter((item) => cartIds.includes(item.id))
    //dynamically display items in cart using map 
    // need rm cabilities for cart 
    // need component to display total price of items in cart
    // need button to checkout that will take us to checkout page

  return (
    <div id='cartItems' className='m-8 flex flex-col  min-h-screen
 items-center gap-4'>
        {
            cartItems?
            cartItems.map((item)=>(
                <div key={item.id} className=' flex flex-row items-center justify-between w-1/2 p-4 bg-orange-50 rounded-xl shadow-md'>
                    <h3>{item.name}</h3>
                    <h5>{item.price}</h5>
                    <button onClick={() => rmFromCart(item.id)}>X</button>
                </div>
            ))
            :
            null
        }
    </div>
  )
}
