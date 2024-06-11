'use client'
import Navbar from '@/components/navbar'
import SvgApp from '../assets/main_logo.svg'
import Image from 'next/image'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center text-center p-10 gap-20">
        <Image src={SvgApp} alt="main logo" />
        <button className="w-48 p-5 uppercase text-white outline border">
          <Link href="/dashboard/signin">Get Started</Link>
        </button>
      </div>
    </div>
  )
}
