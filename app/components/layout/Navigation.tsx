'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = ['Comment ça marche', 'Témoignages', 'Contact']

export default function Navigation({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-orange-500 transition duration-300">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="md:hidden absolute top-20 inset-x-0 bg-white shadow-lg z-20"
        >
          <nav className="container mx-auto py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 hover:bg-amber-100 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </>
  )
}
