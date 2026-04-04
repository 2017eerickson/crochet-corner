// import {  useState } from "react";
import {  useOutletContext} from "react-router-dom";
import ItemDisplay from "../components/ItemDisplay";

const HomePage = () => {
    const { items , addToCart, setQuantity, cartItems, quantity} = useOutletContext()


    return (
        <div className='min-h-screen items-center flex flex-col'>
            {
                items?
                <ItemDisplay 
                items={items} 
                addToCart={addToCart}
                setQuantity={setQuantity}
                cartItems={cartItems}
                quantity={quantity}
                />
                :
                null
            }
            
        </div>
    )
}

export default HomePage;