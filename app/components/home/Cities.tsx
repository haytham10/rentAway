'use client'

import { motion } from 'framer-motion'

const cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Strasbourg']

export default function Cities() {
  return (
    <section className="py-16 bg-amber-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Nous sommes présents dans ces villes</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city) => (
            <motion.span
              key={city}
              className="bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {city}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}