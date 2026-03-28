import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




export default function DetailsPage() {
  const { items, addToCart } = useOutletContext()
  const { item_id } = useParams()
  const [item, setItem] = useState()
  const[editItem, setEditItem] = useState(false)

  useEffect(()=>{
    setItem(items.filter((item) => item.id == item_id)[0])
  },[items, item_id])

  console.log(item)

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
    <>

        <Card   className='shadow-xl w-xl  w-3xs mx-auto  bg-orange-50 mt-10'>
          <Card.Img variant="top" src={`http://localhost/${item.photo}`}/>
          <Card.Body classsName=''>
            <InputGroup className="mb-3">
                <h5>Name:</h5>
                <Form.Control
                aria-label="Example text with button addon"
                placeholder={item.name}
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <h5>Description:</h5>
                <Form.Control as="textarea" rows={3} placeholder={item.desc} />
            </Form.Group>
            <InputGroup className="mb-3">
                <h5>Price:</h5>
                <Form.Control
                aria-label="Example text with button addon"
                placeholder={item.price}
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <h5>Color:</h5>
                <Form.Control
                aria-label="Example text with button addon"
                placeholder={item.color}
                aria-describedby="basic-addon1"
                />
            </InputGroup><InputGroup className="mb-3 flex flex-row items-center justify-between">
                <h5>Size:</h5>
                <Form.Control
                placeholder={item.size}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <h5>Sold:</h5>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup>
                <div className='flex flex-row justify-between'>
                    <Button onClick={()=> setEditItem(true)} variant="secondary">Cancel</Button>
                    <Button onClick={()=> setEditItem(true)} variant="danger">Save</Button>
                </div>
          </Card.Body>
      </Card>
    
    </>
      :
      null
    }
    </div> 
)
}
