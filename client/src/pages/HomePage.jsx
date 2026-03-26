// import {  useState } from "react";
import {  useOutletContext } from "react-router-dom";
import ItemDisplay from "../components/ItemDisplay";

const HomePage = () => {
    const { items , addToCart} = useOutletContext()
    return (
        <div>
            <h1>Welcome to Crochet Corner Homepage !</h1>
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