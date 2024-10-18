'use client'
import React from 'react';

const steps = [
    {
        description: "Vous nous confiez vos clés" 
    },
    {
        description: "On gère votre annonce Airbnb pour la rendre séduisante" 
    },
    {
        description: "On accueille les voyageurs comme à l’hôtel !" 
    },
    {
        description: "On veille sur votre logement et vos voyageurs" 
    },
    {
        description: "Nos partenaires font le ménage avant et après" 
    },
    {
        description: "Vous êtes content de rentrer chez vous !" 
    },
]

export default function Steps() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold text-center mb-12">Pour résumé</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-lightblue-50 rounded-lg shadow-md p-8 hover:bg-lightblue-100 transition duration-300"
                        >
                            {/* Number on the left */}
                            <div className="w-16 flex-shrink-0 text-left">
                                <h1 className="text-5xl font-bold text-sky-500">{index + 1}</h1>
                            </div>

                            {/* Text on the right */}
                            <div className="flex-grow text-left ml-4">
                                <p className="text-lg text-gray-700 font-medium">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}