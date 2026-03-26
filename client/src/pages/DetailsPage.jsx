import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

export default function DetailsPage() {
  const { items } = useOutletContext()
  const { item_id } = useParams()
  const [item, setItem] = useState()

  useEffect(()=>{
    setItem(items.filter((item) => item.id == item_id)[0])
  },[])

  console.log(item)

  return (
    <>
    {item ? 
     <Card style={{ width: '18rem' }} >
          <Card.Img variant="top" src={item.photo}/>
          <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.price}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{item.desc}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{item.color}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{item.size}</Card.Subtitle>
              <Button variant="secondary">Add to Cart</Button>
          </Card.Body>
      </Card>
      :
      <h1>Item Not Found</h1>
    }
    </> 
)
}
