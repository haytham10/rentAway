'use client'

import { motion } from 'framer-motion'
import { Home, Briefcase, Smile } from 'lucide-react'
import { Card } from '../ui/Card'

const benefits = [
  { icon: Home, title: "Gestion complète", description: "Nous nous occupons de tout, de l'annonce à l'accueil des voyageurs." },
  { icon: Briefcase, title: "Optimisation des revenus", description: "Nos algorithmes assurent les meilleurs prix pour votre bien." },
  { icon: Smile, title: "Tranquillité d'esprit", description: "Service client 24/7 et assurance complète pour votre logement." }
]

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos avantages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center p-6 bg-amber-50 hover:shadow-xl transition duration-300">
                <item.icon className="mx-auto h-16 w-16 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}