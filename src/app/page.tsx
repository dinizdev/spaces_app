import SvgApp from '../assets/main_logo.svg'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="bg-gradient-to-r from bg-primary to-bg-secondary ... flex h-screen justify-center">
      <h1>hello spaces</h1>
      <Image src={SvgApp} alt="main logo"></Image>
    </div>
  )
}
