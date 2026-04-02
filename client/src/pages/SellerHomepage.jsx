import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteItem } from '../utilities/crudUtilities';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
 
 export default function SellerHomepage() {
    const { items, } = useOutletContext()
    const [user, ] = useState(useLoaderData())
    const navigate = useNavigate()
    const location = useLocation()

    console.log(user)
    
    useEffect(()=>{
        if (!user && location.pathname === '/selllerhomepage'){
          navigate('/')}
       else(
        navigate('/sellerhomepage')
        )},[user,location.pathname])

    return (
        <div className='min-h-screen flex flex-col justify-center my-4 items-center'>
        
        <h1 className='text-3xl text-white'>Welcome to your seller homepage</h1>
        <button onClick={()=> navigate('createproduct/')}  className='my-4 w-[60vmin] h-[5vmin] bg-orange-600 text-white border-4 border-pink-700 rounded-xl shadow-lg'>Create New Product</button>
        {/* search bar  */}
        
            <div className=' m-2 flex flex-row justify-center gap-[1vmin] flex-wrap w-[85%] border-2 border-orange-300 p-[5vmin] rounded-xl bg-transparent shadow-xl'>
            {
                items.length > 1 ?
                items.map((item)=>( 
                <Card className=' w-[40vmin] shadow-xl bg-transparent flex flex-col justify-between rounded-xl border-5 border-orange-800'>
                    <Card.Img className=" p-4 rounded-full" variant="top" src={`http://localhost/${item.photo}`}/>
                        <Card.Body className='flex flex-col justify-between'>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
                            <div className='flex flex-row justify-between'>
                                <button  className="bg-blue-200 shadow-lg border-2 border-blue-400 text-black p-2 rounded-xl" onClick={()=> navigate(`sellerdetails/${item.id}/`)} >View Details</button>
                                <button className="bg-red-800 border-2 border-red-500 text-white p-2 rounded-xl"     onClick={()=> deleteItem(item.id)} >Delete</button>
                            </div>
                        </Card.Body>
                    </Card>
                )
                )
                :
                null
                
                }
                </div>
            </div>
    )
    }