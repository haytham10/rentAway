'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "Sam-Host a transformé la façon dont je gère ma location. C'est tellement simple et efficace !",
    author: "Sophie D., Propriétaire à Paris"
  },
  {
    text: "Grâce à Sam-Host, mes revenus locatifs ont augmenté de 30% sans aucun effort supplémentaire.",
    author: "Marc L., Investisseur à Lyon"
  },
  {
    text: "Le service client est exceptionnel. Ils sont toujours là quand j'ai besoin d'eux.",
    author: "Claire M., Propriétaire à Bordeaux"
  }
]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="temoignages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeTestimonial ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-light-blue-50 p-6 rounded-lg shadow-md h-full flex flex-col justify-center">
                  <p className="mb-4 text-lg  italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-right">- {testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${
                  index === activeTestimonial ? 'bg-light-blue-500' : 'bg-light-blue-200'
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}