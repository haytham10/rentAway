'use client'
import { motion } from 'framer-motion'
import { Home, Briefcase, Smile, Key, Layers, MessagesSquare, Euro, ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react';
import { Card } from '../ui/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const services = [
	{ 
		icon: Home, 
		title: "Votre annonce Airbnb", 
		subtitle: "Optimisation de vos revenus", 
		description: "Des demandes de résa plus importantes\nUne visibilité augmentée\nDes revenues maximisés" 
	},
	{ 
		icon: Key, 
		title: "Vos clés", 
		subtitle: "Gestion simple et efficace", 
		description: "Vos clés sont gérées comme des petits trésors\nLe service check-in check-out est fluide et efficace\n"
	},
	{ 
		icon: Smile, 
		title: "Les Voyageurs", 
		subtitle: "Satisfaction maximale", 
		description: "Ils se souviendront de leur séjour chez vous et ils reviendront ...\nLeur commentaires 5* seront visibles" 
	},
	{ 
		icon: Layers, 
		title: "Le ménage", 
		subtitle: "Propreté impeccable", 
		description: "Votre logement est ultrapropre\nPas de lessive quand vous revenez !\n" 
	},
	{ 
		icon: MessagesSquare, 
		title: "Maintenance", 
		subtitle: "Aucune préoccupation", 
		description: "Vous ne vous préoccupez de rien !\nDes voyageurs comblés\n" 
	},
	{ 
		icon: Euro, 
		title: "Caution / Assurances", 
		subtitle: "", 
		description: "Aucune formalité administrative à gérer de votre côté\nVous partez en mode sérénité\n" 
	}
]

function ServiceIcon({ item, index } : { item: any, index: number }) {
	return (
		<div className={`flex flex-col items-center justify-center h-full ${index % 2 === 1 ? ' text-right' : ' text-left'}`}>
			<div className="text-center h-full">
				<item.icon className="mx-auto h-16 w-16 text-light-blue-500 mb-4" />
				<h3 className="text-xl font-semibold">{item.title}</h3>
			</div>
		</div>
	)
}

function ServiceInfo({ item, index, line, i } : { item: any, index: number, line: string, i: number }) {
	return (
		<div className={`flex flex-col items-center justify-center h-full ${index % 2 === 1 ? ' mr-6' : ' ml-6'}`}>
			<div className="text-center h-full">
				<h4 className="text-lg font-400 mb-2">{item.subtitle}</h4>
				<p className='text-gray-500 h-full'>
					{item.description.split('\n').map((line: string, i: number) => (
						<React.Fragment key={i}>
							{line}
							<br />
						</React.Fragment>
					))}
				</p>
			</div>
		</div>
	)
}

interface ArrowProps {
	onClick?: React.MouseEventHandler<HTMLDivElement>;
  }


  function NextArrow({ onClick }: ArrowProps) {
	return (
	  <div
		className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-20"
		onClick={onClick}
	  >
		<ArrowRight className="text-black w-8 h-8" />
	  </div>
	);
  }
  
  function PrevArrow({ onClick }: ArrowProps) {
	return (
	  <div
		className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-20"
		onClick={onClick}
	  >
		<ArrowLeft className="text-black w-8 h-8" />
	  </div>
	);
  }
  

export default function Services() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3, // Show a maximum of 3 slides
		slidesToScroll: 2,
		centerMode: true,
		adaptiveHeight: true,
		centerPadding: '0px', // Controls the spacing on the sides when using centerMode
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 768, // Mobile breakpoint
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	  };

	return (
		<section className="py-16 bg-gradient-to-br from-light-blue-50 to-light-blue-100">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>
				<Slider {...settings}>
					{services.map((item, index) => (
						<div key={item.title} className='p'>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
							<Card className="flex flex-col justify-between text-center p-6 bg-light-blue-50 hover:shadow-xl transition duration-300 w-auto h-full">
							<div className="flex-grow">
								<ServiceIcon item={item} index={index} />
								<ServiceInfo item={item} index={index} line={item.description} i={index} />
							</div>
							</Card>

							</motion.div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
