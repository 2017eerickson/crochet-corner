import axios from 'axios'
import { useState } from 'react';

export default function CustomOrderPage() {
    const [order, setOrder] = useState({
        name: '',
        email: '',
        description: '',
        file: null
    });

    const handleSubmit = async (e) => {
        console.log("Submitting order:", order);
        e.preventDefault();
        try {
            const response = await axios.post('api/v1/custom-orders/create/', order);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting custom order:', error);
        }
    };
    console.log(order)
  return (
    <div className='flex flex-col justify-center items-center m-10 text-amber-50'>
        <h1>Custom Order Page</h1>
        <p>Welcome to the Custom Order Page!</p>
        <p>Here you can place a custom order for a unique crochet item. Please fill out the form below with your specifications and we will get back to you with a quote.</p>
        <form className='flex flex-col gap-4 w-[50%] mx-auto min-h-screen'>
            <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name"
                    className='border-2 border-gray-300 p-2 rounded-md'  
                    value={order.name} 
                    onChange={(e) => setOrder({...order, name: e.target.value})}
                 />
            <label htmlFor="email">Email:</label>
                <input value={order.email}
                    onChange={(e) => setOrder({...order, email: e.target.value})}
                    type="email" 
                    id="email" 
                    name="email"
                     className='border-2 border-gray-300 p-2 rounded-md' required 
                />

            <label htmlFor="description">Description of Item:</label>
                <textarea 
                    value={order.description}   
                    onChange={(e) => setOrder({...order, description: e.target.value})} 
                    id="description" 
                    name="description"
                     className='border-2 border-gray-300 p-2 rounded-md' required></textarea>

            <label htmlFor="file">Upload Image:</label>
                <input 
                    value={order.file}  
                    onChange={(e) => setOrder({...order, file: e.target.files[0]})} 
                    type="file" 
                    id="file" 
                    name="file" 
                     className='border-2 border-gray-300 p-2 rounded-md'     
                />

            <button onSubmit={(e)=> handleSubmit(e)} type="submit" className='bg-orange-500 text-white p-2 rounded-md'>Submit</button>
        </form>
    </div>
  )
}
