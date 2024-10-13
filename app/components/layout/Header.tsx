'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-light-blue-50 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/sam-host-logo.png" alt="Logo" width={130} height={80} />
        </Link>
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}