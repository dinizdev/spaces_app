import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-around p-5">
      <ul className="flex gap-96">
        <li className="uppercase font-semibold text-xl">
          <Link href="/newsletter" className="text-zinc-500">
            join the newsletter
          </Link>
        </li>
        <li className="uppercase font-semibold text-xl">
          <Link href="/changelog" className="text-zinc-200">
            changelog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
