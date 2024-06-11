import './styles.css'
import svgLogoSecondary from '@/assets/secondary-logo.svg'
import Image from 'next/image'
export default async function SignIn() {
  return (
    <div className="flex flex-col p-10 h-screen  bg-zinc-100">
      <Image src={svgLogoSecondary} width={150} alt="secondary logo" />
      <h1 className="text-2xl font-bold p-10">Sign In</h1>
      <form
        action=""
        className="flex flex-col w-96 p-10 uppercase justify-center items-center "
      >
        <div className="flex flex-row justify-between bg-zinc-300 p-5 gap-10">
          <button className="">Login With Apple</button>
          <button>Login With Google</button>
        </div>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
        <button>Sign Up</button>
      </form>
    </div>
  )
}
