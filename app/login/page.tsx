import Head from "next/head"
export const generateMetadata = () => {
  return {
    title:"medMagic - Login"
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
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="email">Your Email
              <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500 peer" id="email" type="email" placeholder="Your Email" />
              <p className="invisible peer-invalid:visible text-red-800">Please enter a valid email address</p>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="password">Password</label>
            <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="password" type="password" placeholder="Password" />
          </div>
          <button className="w-full bg-rose-600 hover:bg-rose-950 text-white font-semibold py-3 rounded-md">Login</button>
        </form>
      </main>
    </>
  )
}

export default page
