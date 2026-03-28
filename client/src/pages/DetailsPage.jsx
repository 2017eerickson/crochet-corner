import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

export default function DetailsPage() {
  const { items, addToCart } = useOutletContext()
  const { item_id } = useParams()
  const [item, setItem] = useState()

  useEffect(()=>{
    setItem(items.filter((item) => item.id == item_id)[0])
  },[items, item_id])

  console.log(item)

  return (
    <div className='min-h-screen'>
    {item ? 
      <Card   className='shadow-xl w-5/6  mx-auto  bg-orange-50 mt-10'>
          <Card.Img variant="top" src={`http://localhost/${item.photo}`}/>
          <Card.Body classsName=''>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Description:{item.desc}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Color: {item.color}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Size: {item.size}</Card.Subtitle>
              <Button onClick={()=> addToCart(item.id)} variant="secondary">Add to Cart</Button>
          </Card.Body>
      </Card>
     :
     null
    }
    </div> 
)
}
