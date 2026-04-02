import React from 'react'

export default function CustomOrderPage() {
  return (
    <div className='flex flex-col justify-center items-center m-10 text-amber-50'>
      <h1>Custom Order Page</h1>
      <p>Welcome to the Custom Order Page!</p>
        <p>Here you can place a custom order for a unique crochet item. Please fill out the form below with your specifications and we will get back to you with a quote.</p>
        <form className='flex flex-col gap-4 w-[50%] mx-auto min-h-screen'>

            <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className='border-2 border-gray-300 p-2 rounded-md' required /> 

            <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className='border-2 border-gray-300 p-2 rounded-md' required />

            <label htmlFor="description">Description of Item:</label>
                <textarea id="description" name="description" className='border-2 border-gray-300 p-2 rounded-md' required></textarea>

            <label htmlFor="file">Upload Image:</label>
                <input type="file" id="file" name="file" className='border-2 border-gray-300 p-2 rounded-md' required />

            <button type="submit" className='bg-orange-500 text-white p-2 rounded-md'>Submit</button>
        </form>
    </div>
  )
}
