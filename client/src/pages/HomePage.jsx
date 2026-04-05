// import {  useState } from "react";
import {  useOutletContext} from "react-router-dom";
import ItemDisplay from "../components/ItemDisplay";
import { useState } from "react";

const HomePage = () => {
    const { items , addToCart, setQuantity, cartItems, quantity} = useOutletContext()
    const [itemsForSale, setItemsForSale] = useState(null)

    useState(()=>{
        const filterItemsForSale = () => {
            let filteredItems = items.filter((item) => item.sold === false)
            setItemsForSale(filteredItems)
        }
        filterItemsForSale()
     },[items])

     
    return (
        <div className='min-h-screen items-center flex flex-col'>
            {
                itemsForSale?
                <ItemDisplay 
                items={itemsForSale} 
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