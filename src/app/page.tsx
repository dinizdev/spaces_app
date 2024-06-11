'use client'
import Navbar from '@/components/navbar'
import SvgApp from '../assets/main_logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center text-center p-10 gap-10">
        <Image src={SvgApp} alt="main logo" />
        <button className="w-48 p-5 uppercase text-white outline border">
          Get Started
        </button>
      </div>
    </div>
  )
}
