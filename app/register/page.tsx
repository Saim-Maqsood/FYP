import Head from "next/head"
export const generateMetadata = () => {
  return {
    title:"medMagic - Register"
  }
}
const page = () => {
  return (
    <>
    <Head>
      <title>{generateMetadata().title}</title>
    </Head>
      <main className="flex flex-col items-center px-6">
        <form className="w-full max-w-md bg-black/80 p-6 shadow-md rounded-md">
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="name">Your Name</label>
            <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="name" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="email">Your Email
              <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500 peer" id="email" type="email" placeholder="Your Email" />
              <p className="invisible peer-invalid:visible text-red-800">Please enter a valid email address</p>
            </label>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="password">password</label>
            <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="password" type="password" placeholder="Password" />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="age">Your Age</label>
            <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="password" type="number" placeholder="age" />
          </div>
          <div className="mb-2">
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
