import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { createTask } from '../utilities/crudUtilities';

function ProductForm({addProduct}) {
    const [productTitle, setProductTitle] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        let newProduct = await createTask(productTitle)
        if (newProduct){
            addProduct(newProduct)
        }
        setProductTitle('')
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
                <Form.Control
                    type="text"
                    placeholder='input a new product title here'
                    value={productTitle}
                    onChange={(e)=>setProductTitle(e.target.value)}
                />
                <Button type='submit'>
                    Create
                </Button>
            </Form>
        </>
    );
}

export default ProductForm;