import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className="w-full py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[0.0625rem] border-neutral-900 justify-between">
      <aside className="flex items-center">
        <p className="text-3xl font-bold">Monarrc</p>
      </aside>

      <nav className="hidden md:flex gap-4">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="" className="hover:text-primary-foreground">Servicio</Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary-foreground">Demo</Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary-foreground">Contacto</Link>
          </li>
        </ul>
      </nav>

      <aside className="flex items-center gap-4">
        <Link
          href="/agency"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-xl font-medium text-white backdrop-blur-3xl">
            Contactar
          </span>
        </Link>
      </aside>
    </header>
  )
}

export default NavBar;
