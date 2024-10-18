'use client'
import { motion } from 'framer-motion'
import { Home, Briefcase, Smile, Key, Layers, MessagesSquare, Euro } from 'lucide-react'
import React from 'react';
import { Card } from '../ui/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
		description: "Vos clés sont gérées comme des petits trésors\nLe service check-in check-out est fluide et efficace" 
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
		description: "Votre logement est ultrapropre\nPas de lessive quand vous revenez !" 
	},
	{ 
		icon: MessagesSquare, 
		title: "Maintenance", 
		subtitle: "Aucune préoccupation", 
		description: "Vous ne vous préoccupez de rien !\nDes voyageurs comblés" 
	},
	{ 
		icon: Euro, 
		title: "Caution / Assurances", 
		subtitle: "Sérénité administrative", 
		description: "Aucune formalité administrative à gérer de votre côté\nVous partez en mode sérénité" 
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
				<h4 className="text-lg font-bold mb-2">{item.subtitle}</h4>
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

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'none', color: 'black', fontSize: '24px' }}
            onClick={onClick}
        >
            &#9654; {/* Unicode character for right arrow */}
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'none', color: 'black', fontSize: '24px' }}
            onClick={onClick}
        >
            &#9664; {/* Unicode character for left arrow */}
        </div>
    );
};

export default function Services() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '60px',
		variableWidth: true,
		adaptiveHeight: true, // Add this line to make the slider take the maximum height of its content
		nextArrow: <ArrowForwardIosIcon />,
        prevArrow: <ArrowBackIosNewIcon />,
	};

	return (
		<section className="py-16 bg-white">
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
								<Card className="grid grid-cols-1 text-center p-6 bg-light-blue-50 hover:shadow-xl transition duration-300 w-auto h-full">
									<ServiceIcon item={item} index={index} />
									<ServiceInfo item={item} index={index} line={item.description} i={index} />
								</Card>
							</motion.div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
