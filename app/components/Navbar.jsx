"use client"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full text-white">
      <Image src={"/Logo.jpg"} width={200} height={300} alt="Logo" className="m-auto w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32" />
      <div className="flex justify-center">
        <Link href="/" className="pr-2">Home</Link>
        <Link href="/store" className="pr-2">Store</Link>
        <Link href="/about" className="pr-2">About Us</Link>
        <Link href="/contact" className="pr-2">Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar