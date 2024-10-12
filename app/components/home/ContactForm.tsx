'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Envoyer
          </Button>
        </form>
      </div>
    </section>
  )
}