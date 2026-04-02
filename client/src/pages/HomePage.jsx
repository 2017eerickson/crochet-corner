// import {  useState } from "react";
import {  useOutletContext } from "react-router-dom";
import ItemDisplay from "../components/ItemDisplay";

const HomePage = () => {
    const { items , addToCart} = useOutletContext()
    return (
        <div className='min-h-screen items-center flex flex-col'>
            {
                items?
                <ItemDisplay items={items} addToCart={addToCart}/>
                :
                null
            }
            
        </div>
    )
}

export default HomePage;