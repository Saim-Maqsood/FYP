import React from 'react'

const page = () => {
  return (
    <>
    <main className="flex flex-col items-center px-6">
    <form className="w-full max-w-md bg-black/80 p-6 shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-white" htmlFor="name">Your Name</label>
        <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="name" type="text" placeholder="Your Name"/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-white" htmlFor="email">Your Email</label>
        <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="email" type="email" placeholder="Your Email"/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-white" htmlFor="subject">password</label>
        <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="password" type="password" placeholder="Password"/>
      </div>
      <div className="mb-4">
      <label className="block text-sm font-medium mb-2 text-white" htmlFor="age">Your Age</label>
      <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="password" type="number" placeholder="age"/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-white" htmlFor="message">Gender</label>
        <span className='text-white'>Male</span> <input type="radio" name="gender" id="Male" /> &nbsp;
        <span className='text-white'>Female</span> <input type="radio" name="gender" id="Female" />
        </div>    
      <button className="w-full bg-rose-600 hover:bg-rose-950 text-white font-semibold py-3 rounded-md">Register</button>
    </form>
  </main>
    </>
  )
}

export default page
