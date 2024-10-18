'use client'

import { motion } from 'framer-motion'

const faq = [
	{
		question:"Est-ce que je suis couvert(e) par des assurances ?",
		answer:"Vous êtes évidemment couvert par des assurances et sans frais supplémentaire ! Dans les rares cas où des dommages surviendraient, voici les moyens que l'on mobilise : 1/ On demande une caution aux voyageurs que l'on peut débloquer en cas de dégradations. 2/ Les assurances des plateformes de location couvrent généralement votre logement à hauteur de 800 000 €. C'est beaucoup, mais attention : les bijoux, les oeuvres d’art et l'argent en espèces ne sont pas protégés par cette assurance. 3/ HostnFly dispose de sa propre assurance, couvrant à hauteur de 2 500€ les éventuels dégâts commis par les voyageurs.",
	},
	{
		question:"Sélectionnez-vous les voyageurs ?",
		answer:"Bien sûr que oui. Nous avons une équipe dédiée uniquement à la sélection, la communication et à la gestion des voyageurs afin de nous assurer que votre logement sera loué par des personnes de confiance. Nous n'acceptons pas n’importe qui dans votre logement, nous avons développé un algorithme qui nous permet de sélectionner les voyageurs selon des critères spécifiques. Nous sommes très prudents sur l’acceptation des voyageurs : nous demandons l’âge et la raison de la réservation aux voyageurs (en insistant pour ceux sans commentaire). Nous privilégions les voyageurs avec des commentaires positifs et des profils vérifiés. Nous facilitons les réservations effectuées par des familles ou des couple. Une carte d’identité est obligatoire pour réserver un logement. L’identité est donc systématiquement vérifiée.",
	},
	{
		question:"Comment est calculé mon revenu ?",
		answer:"Votre revenu est calculé en fonction du prix appliqué pour votre logement et du nombre de nuits réellement réservées sur les plateformes de location. Vous touchez la réalité des revenus générés par votre logement, une fois les commissions déduites. Grâce à notre algorithme de prix dynamique, nous faisons varier votre prix de base (à la hausse ou à la baisse) à la nuitée en fonction de l’offre et de la demande afin d'optimiser le taux de remplissage et donc votre revenu. Nous prenons notre commission uniquement sur le revenu généré par votre logement.",
	},
	{
		question:"Quels sont vos tarifs ?",
		answer:"Avec le revenu réel, vous touchez la réalité des revenus générés pendant la période de location. Plus votre logement est loué, plus vous y gagnez. À l'inverse, s’il n’est pas loué (ce qui reste assez rare), vous ne touchez rien. Nous prenons une commission unique à partir de 20% sur les revenus générés par vos réservations (hors frais de plateforme). Sachez que nous faisons fluctuer le prix de votre logement (à la hausse ou à la baisse) en fonction de l'offre et de la demande sur Airbnb afin de maximiser les chances de le louer, et donc afin d'optimiser vos revenus !",
	},
	{
		question:"Pour les clés : ça se passe comment ?",
		answer:"Rien de plus simple : vous nous confiez 2 jeux de clés identiques et complets (ou 3 jeux de clés si votre logement se trouve dans une zone avec un référent local) et ensuite, on s'occupe entièrement de la gestion des clés pendant toute la période de location confiée. Nous travaillons avec des partenaires locaux de remises de clés : nous vous demanderons d'y déposer un jeu de clés la veille de votre location. L'autre jeu de clés devra être laissé dans votre logement sur le plan de travail de votre cuisine. Pendant vos locations : un jeu de clés sera confié à notre prestataire de ménage (ou à notre référent local) et l’autre jeu, aux voyageurs.",
	},
	{
		question:"Quelle est la législation de la location saisonnière en France ?",
		answer:"Depuis avril 2017, les propriétaires qui louent leur logement de façon occasionnelle, à des fins touristiques, et résidant dans une ville de plus de 200 000 habitants, doivent suivre plusieurs démarches administratives et respecter certaines contraintes : 1/ Ne pas dépasser les 120 jours de location/an. 2/ Enregistrer son logement sur le site de la mairie. 3/ Être propriétaire ou pour les locataires : demander l’autorisation de sous-louer son logement à son propriétaire",
	}
]

export default function Faq() {
	return (
	  <section className="py-16 bg-gradient-to-br from-light-blue-50 to-light-blue-100">
		<div className="container mx-auto px-4">
		  <h2 className="text-3xl font-bold mb-8 text-center">
			Et si vous n’êtes pas encore totalement convaincus ...
			<br />
			Les 6 questions habituelles !
		  </h2>
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{faq.map((item, index) => (
			  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-4 text-center text-sky-500">{item.question}</h3>
				<p className="text-gray-700">{item.answer}</p>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	)
  }