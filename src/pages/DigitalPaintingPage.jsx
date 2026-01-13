import React from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const DigitalPaintingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 pt-20 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-center" style={{ fontFamily: 'Outfit' }}>
                            Digital Painting & Composition
                        </h1>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Outfit' }}>About This Work</h2>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        my digital paintings showcase a blend of traditional artistic techniques with modern digital tools. 
                                        Using Procreate, I create vibrant compositions that explore color, form, and emotion.
                                    </p>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        Each piece begins with careful observation and sketching, then develops through layers 
                                        of color and texture to create depth and visual interest.
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold" style={{ fontFamily: 'Outfit' }}>Medium:</p>
                                        <p style={{ fontFamily: 'Jeju Myeongjo' }}>Procreate</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <img 
                                    src="/elyse-undan/images/cover_artwork.png" 
                                    alt="Digital Painting & Composition"
                                    className="w-full max-w-md rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};