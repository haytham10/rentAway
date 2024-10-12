'use client'

import { motion } from 'framer-motion'
import { UserPlus, Cog, PiggyBank, ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'

const steps = [
  {
    title: "Inscrivez-vous",
    description: "Créez votre compte gratuitement et ajoutez les détails de votre logement en quelques clics.",
    icon: UserPlus,
  },
  {
    title: "Nous prenons le relais",
    description: "Notre équipe d'experts s'occupe de tout : photos professionnelles, création d'annonces attractives, gestion des réservations et accueil des voyageurs.",
    icon: Cog,
  },
  {
    title: "Profitez des revenus",
    description: "Recevez vos paiements directement sur votre compte bancaire et profitez de revenus optimisés grâce à notre algorithme de tarification dynamique.",
    icon: PiggyBank,
  }
]

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0, 
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20,
    } 
  },
}


export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
          {steps.map((item, index) => (
            <div key={item.title} className="flex flex-col items-center w-full md:w-1/3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariants}
              >
                <Card className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg hover:shadow-xl transition duration-300">
                  <item.icon className="h-12 w-12 text-white" />
                </Card>
              </motion.div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}