import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import UpdateProduct from '../components/UpdateProduct';



export default function DetailsPage() {
  const { items } = useOutletContext()
  const { item_id } = useParams()
  const [item, setItem] = useState()
  const[editItem, setEditItem] = useState(false)

  useEffect(()=>{
    setItem(items.filter((item) => item.id == item_id)[0])
  },[items, item_id])


  return (
    <div className='min-h-screen'>
    {item  && editItem === false? 
      <Card   className='shadow-xl w-xl  w-3xs mx-auto  bg-orange-50 mt-10'>
          <Card.Img variant="top" src={`http://localhost/${item.photo}`}/>
          <Card.Body classsName=''>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Description:{item.desc}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Color: {item.color}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Size: {item.size}</Card.Subtitle>
              <Button onClick={()=> setEditItem(true)} variant="secondary">Edit Item</Button>
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
