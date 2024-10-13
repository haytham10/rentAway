'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'

export default function Hero() {
	return (
	  <section className="relative overflow-hidden py-20 md:py-32">
		<div className="container mx-auto px-4 text-center relative z-10">
		  <motion.h1
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
		  >
			Louez votre logement en toute <span className="text-light-blue-500">sérénité</span>
		  </motion.h1>
		  <motion.p
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			className="text-xl mb-8 max-w-2xl mx-auto"
		  >
			Nous gérons tout pour vous, de A à Z. Profitez de la vie pendant que nous nous occupons de votre bien.
		  </motion.p>
		  <motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.4 }}
		  >
			<Button href="#contact" variant="primary">
			  Commencez maintenant
			  <ChevronRight className="ml-2" />
			</Button>
		  </motion.div>
		</div>
		<div className="absolute inset-0 z-0">
		  <Image
			src="/images/hero-bg.jpg"
			alt="Fond décoratif"
			layout="fill"
			objectFit="cover"
			className="opacity-20"
		  />
		</div>
	  </section>
	)
  }