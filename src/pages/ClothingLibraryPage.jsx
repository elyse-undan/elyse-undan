import React from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const ClothingLibraryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 pt-20 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-center" style={{ fontFamily: 'Outfit' }}>
                            Clothing Library
                        </h1>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Outfit' }}>About This Project</h2>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        A comprehensive clothing management system designed to help users organize, track, and optimize their wardrobe. 
                                        Features include outfit planning and sustainable fashion tracking.
                                    </p>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        This innovative application promotes sustainable fashion practices while helping users make 
                                        better use of their existing wardrobe through smart organization and planning tools.
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold" style={{ fontFamily: 'Outfit' }}>Technologies:</p>
                                        <p style={{ fontFamily: 'Jeju Myeongjo' }}>Wardrobe Management, Outfit Planning, Sustainable Fashion Tracking</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <div className="bg-blue-200 p-8 rounded-lg shadow-lg">
                                    <img 
                                        src="/elyse-undan/images/clothing_library.png" 
                                        alt="Clothing Library"
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