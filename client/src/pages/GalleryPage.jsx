import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import ItemDisplay from '../components/ItemDisplay'
import { useState } from 'react'

export default function Gallery() {

  const { items , addToCart, setQuantity, cartItems, quantity} = useOutletContext()
  const [galleryItems, setGalleryItems] = useState(null)
  
  useEffect(()=>{
    const filterGalleryItems = () => {
      let filteredItems = items.filter((item) => item.sold === true)
      setGalleryItems(filteredItems)
    }
    filterGalleryItems()
  },[items])

  return (
    <div>
        <h1 className='text-4xl text-center mt-10'>Gallery</h1>
        <div id='galleryItems' className='min-h-screen items-center flex flex-col'>
            {
                galleryItems?
                <ItemDisplay 
                items={galleryItems} 
                addToCart={addToCart}
                setQuantity={setQuantity}
                cartItems={cartItems}
                quantity={quantity}
                />
                :
                null
            }
            
        </div>
    </div>
  )
}
