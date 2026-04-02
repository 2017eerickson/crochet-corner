import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { getAnItem } from '../utilities/crudUtilities';
import ItemDisplay from '../components/ItemDisplay';

export default function DetailsPage() {
  const { item_id } = useParams()
  const [item, setItem] = useState()

  useEffect(()=>{
     const fetchItem = async()=>{
      let response = await getAnItem(item_id)
      if (response){
        setItem(response)
      }
      else{
        console.error("Item not found")
      }
    }
    fetchItem()
  
    },[item_id])

  console.log(item)

  return (
    <div className='min-h-screen flex justify-center items-center'>
    {item ? 
      <ItemDisplay item={item} />
     :
     null
    }
    </div> 
)
}
