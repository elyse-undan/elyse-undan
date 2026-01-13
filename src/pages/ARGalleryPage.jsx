import React from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const ARGalleryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 pt-20 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-center" style={{ fontFamily: 'Outfit' }}>
                            AR Gallery App
                        </h1>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Outfit' }}>About This Project</h2>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Designed a site-specific AR app as a playable art installation for the Le Yeux Du Monde gallery. 
                                        Explored Unity and 3 SDKs to craft an AR user experience with 5 sculpted 3D models.
                                    </p>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        This immersive augmented reality experience bridges the gap between digital art and physical space, 
                                        creating an interactive gallery experience that engages visitors in new and innovative ways.
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold" style={{ fontFamily: 'Outfit' }}>Technologies:</p>
                                        <p style={{ fontFamily: 'Jeju Myeongjo' }}>Unity, AR Development, 3D Modeling, Mobile App Development</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <div className="bg-green-200 p-8 rounded-lg shadow-lg">
                                    <img 
                                        src="/elyse-undan/images/ar_app.png" 
                                        alt="AR Gallery App"
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