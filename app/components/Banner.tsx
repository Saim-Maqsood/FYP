"use client"
import { Fondamento } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const fonda = Fondamento({
  subsets: ["latin"],
  weight: "400"
});
const Banner = () => {
  return (
    <>
      <div className=' w-screen justify-center items-center h-[100dvh] bg-[#1a1a1a] bg-[url(/banner.jpg)] bg-blend-overlay bg-cover bg-center'>
        <div className='text-center h-[100dvh] w-screen pt-[40dvh]'>
          <TypeAnimation
            sequence={[
              'Your Health is Prioritized',
              1000,
              'Your Health is Crucial',
              1000,
              'Your Health is Essential',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'block', color: 'white' }}
            repeat={Infinity}
          />
          <p className='text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white'>Welcome to <span className={`${fonda.className} text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}>medMagic</span></p>
          <div className='mt-[10dvh]'>
          <Link href={"/"}>
          <button type="submit" className=" bg-rose-600 hover:bg-rose-950 p-1 rounded-md text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">SHOP NOW</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
