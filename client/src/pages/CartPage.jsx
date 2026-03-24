import { useOutletContext } from 'react-router-dom'
import axios from 'axios'

export default function CartPage() {
    // const { cartItems } = useOutletContext()

    // const handleCheckout = async(e) => {
    // e.preventDefault()
    // try {
    //     let response = await axios.post("/api/v1/checkout/", {items: cartItems})
    //     if (response.status == 200){
    //     console.log(response.data)
    //     }else{
    //     console.error(response.data)
    //     }
    // } catch (error) {
    //     console.error(error)
    //     }
    // }

  return (
    <div>
        <h1>Cart</h1>
        <button onClick={(e)=> handleCheckout(e)}>Checkout</button>
    </div>
  )
}


