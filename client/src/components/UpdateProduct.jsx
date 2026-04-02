import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { editItem } from '../utilities/crudUtilities';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function UpdateProduct({item, setEditItem}) {
    const [updatedItem, setUpdatedItem] = useState({})

    const handleSave =async () => {
        setEditItem(false)
        let response = await editItem(item.id, updatedItem)
        if (response) {
            console.log(response)
        }else{
            console.error("Failed to update item")
        }
    }

  return (
    <div className='  min-h-screen mx-auto'>
    
            <Card   className='shadow-xl p-10vmin w-xl mx-auto mt-10'>
              <Card.Img className= "p-4 rounded-full" variant="top" src={`http://localhost/${item.photo}`}/>
            <div className='mt-5'>
                 <Form.Group controlId="formFile" className="mb-3">
                  <h5>Update Image file:</h5>
                 <Form.Control 
                 type="file" 
                 value=''
                 onChange={(e) => setUpdatedItem({...updatedItem, photo: `/media/images/${e.target.value}`})}
                 />
                </Form.Group>
            </div>
              <Card.Body classsName=''>
                <InputGroup className="mb-3">
                    <h5>Name:</h5>
                    <Form.Control
                    placeholder={item.name}
                    value={updatedItem.name}
                    onChange={(e) => setUpdatedItem({...updatedItem, name: e.target.value})}
                    />
                </InputGroup>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <h5>Description:</h5>
                    <Form.Control as="textarea" 
                    rows={3} 
                    placeholder={item.desc} 
                    onChange={(e) => setUpdatedItem({...updatedItem, desc: e.target.value})}
                    value={updatedItem.desc}
                    />
                </Form.Group>
                <InputGroup className="mb-3">
                    <h5>Price:</h5>
                    <Form.Control
                    aria-label="Example text with button addon"
                    placeholder={item.price}
                    value={updatedItem.price}
                    onChange={(e) => setUpdatedItem({...updatedItem, price: e.target.value})}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <h5>Color:</h5>
                    <Form.Control
                    aria-label="Example text with button addon"
                    placeholder={item.color}
                    aria-describedby="basic-addon1"
                    value={updatedItem.color}
                    onChange={(e) => setUpdatedItem({...updatedItem, color: e.target.value})}
                    />
                </InputGroup><InputGroup className="mb-3 flex flex-row items-center justify-between">
                    <h5>Size:</h5>
                    <Form.Control
                    placeholder={item.size}
                    value={updatedItem.size}
                    onChange={(e) => setUpdatedItem({...updatedItem, size: e.target.value})}
                    />
                </InputGroup>
                <InputGroup className="mb-3 flex flex-row items-center justify-between">
                    <h5>Category:</h5>
                    <Form.Control
                    placeholder='product category'
                    value={updatedItem.category}
                    onChange={(e) => setUpdatedItem({...updatedItem, category: e.target.value})}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <h5>Sold:</h5>
                    <InputGroup.Checkbox 
                    aria-label="Checkbox for following text input" 
                    value={updatedItem.sold}
                    onChange={(e) => setUpdatedItem({...updatedItem, sold: e.target.checked})}
                    />
                </InputGroup>
                    <div className='flex flex-row justify-between'>
                        <Button onClick={()=> setEditItem(false)} variant="secondary">Cancel</Button>
                        <Button onClick={()=> handleSave()} variant="danger">Save</Button>
                    </div>
              </Card.Body>
          </Card>
        
        </div>
  )
}
