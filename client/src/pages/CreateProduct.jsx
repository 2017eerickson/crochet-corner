import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createItem } from '../utilities/crudUtilities';

export default function CreateProduct() {
    const [newItem, setNewItem] = useState({})
    const navigate = useNavigate()

    const handleSave =async () => {
        let createdItem = await createItem(newItem)
        if(createdItem){
            navigate('/sellerhomepage')
        }else{
            console.error('Failed to create item')
        }
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0].name
        console.log(file)
        setNewItem({...newItem, photo: file})
    };
    
  return (
    <div className='  min-h-screen mx-auto'>

        <Card   className='shadow-xl p-10vmin w-xl mx-auto bg-orange-50 mt-10'>
            
        <div className='mt-5'>
                <Form.Group controlId="formFile" className="mb-3">
                <h5>Update Image file:</h5>
                <Form.Control 
                type="file" multiple
                value=''
                onChange={(e) => handleFileChange(e)}
                />
            </Form.Group>
        </div>
            <Card.Body classsName=''>
            <InputGroup className="mb-3">
                <h5>Name:</h5>
                <Form.Control
                placeholder='product name'
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                />
            </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <h5>Description:</h5>
                <Form.Control as="textarea" 
                rows={3} 
                placeholder='product description - 500 characters max'
                onChange={(e) => setNewItem({...newItem, desc: e.target.value})}
                value={newItem.desc}
                />
            </Form.Group>
            <InputGroup className="mb-3">
                <h5>Price:</h5>
                <Form.Control
                aria-label="Example text with button addon"
                placeholder='product price / format 25.00'
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <h5>Color:</h5>
                <Form.Control
                aria-label="Example text with button addon"
                placeholder='product color'
                aria-describedby="basic-addon1"
                value={newItem.color}
                onChange={(e) => setNewItem({...newItem, color: e.target.value})}
                />
            </InputGroup>
            <InputGroup className="mb-3 flex flex-row items-center justify-between">
                <h5>Size:</h5>
                <Form.Control
                placeholder='product size / format S, M, L, XL'
                value={newItem.size}
                onChange={(e) => setNewItem({...newItem, size: e.target.value})}
                />
            </InputGroup>
            <InputGroup className="mb-3 flex flex-row items-center justify-between">
                <h5>Category:</h5>
                <Form.Control
                placeholder='product category'
                value={newItem.category}
                onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <h5>Sold:</h5>
                <InputGroup.Checkbox 
                aria-label="Checkbox for following text input" 
                value={newItem.sold}
                onChange={(e) => setNewItem({...newItem, sold: e.target.checked})}
                />
            </InputGroup>
                <div className='flex flex-row justify-between'>
                    <Button onClick={()=> navigate('/sellerhomepage') } variant="secondary">Cancel</Button>
                    <Button onClick={()=> handleSave()} variant="danger">Save</Button>
                </div>
            </Card.Body>
        </Card>

    </div>
    
  )
}
