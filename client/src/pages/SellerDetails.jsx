import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import UpdateProduct from '../components/UpdateProduct';
import { deleteItem } from '../utilities/crudUtilities';
import { getAnItem } from '../utilities/crudUtilities';

export default function DetailsPage() {
  const { item_id } = useParams()
  const [item, setItem] = useState()
  const[editItem, setEditItem] = useState(false)

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

  return (
    <div className='min-h-screen'>
    {item  && editItem === false? 
      <Card   className='shadow-xl w-xl  mx-auto  bg-pink-50 mt-10'>
          <Card.Img  className= "p-4 rounded-full" variant="top" src={`http://localhost/${item.photo}`}/>
          <Card.Body classsName=''>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Description:{item.desc}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Color: {item.color}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Size: {item.size}</Card.Subtitle>
              <div className='flex flex-col justify-between gap-2'>
                <button className= "bg-blue-200 shadow-lg border-2 border-blue-400 " onClick={()=> setEditItem(true)} variant="secondary">Edit Item</button>
                <button className= "bg-red-200 shadow-lg border-2 border-red-400"  onClick={()=> deleteItem(item.id)}>Delete</button>
              </div>
          </Card.Body>
      </Card>
     :
     null
    }
    {
    editItem ?
        <UpdateProduct item={item} setEditItem={setEditItem}/>
      :
      null
    }
    </div> 
)
}
