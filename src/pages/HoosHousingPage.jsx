import React from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const HoosHousingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 pt-20 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-center" style={{ fontFamily: 'Outfit' }}>
                            Hoos Housing Haven
                        </h1>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Outfit' }}>About This Project</h2>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        WICS 2025 Hackathon project. Drafted and designed front end website using Canva and Figma, 
                                        built UI with React and collaborated in a team to connect React frontend to Flask backend.
                                    </p>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        This collaborative hackathon project demonstrates full-stack development skills and 
                                        teamwork in creating a housing solution platform for university students.
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold" style={{ fontFamily: 'Outfit' }}>Technologies:</p>
                                        <p style={{ fontFamily: 'Jeju Myeongjo' }}>React, Flask, Canva, Figma, Full-stack Development</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <div className="bg-orange-300 p-8 rounded-lg shadow-lg">
                                    <img 
                                        src="/elyse-undan/images/hoos_housing.png" 
                                        alt="Hoos Housing Haven"
                                        className="w-full max-w-md rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};