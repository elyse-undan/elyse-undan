import React from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const PaintGraphitePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 pt-20 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-center" style={{ fontFamily: 'Outfit' }}>
                            Paint & Graphite
                        </h1>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Outfit' }}>About This Work</h2>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        an assortment of traditional mediums that explore the tactile and expressive 
                                        qualities of physical materials. Each piece embraces the unique characteristics of its medium.
                                    </p>
                                    <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Jeju Myeongjo' }}>
                                        From the flowing transparency of watercolor to the bold opacity of acrylic, 
                                        and the subtle gradations of graphite and charcoal, this work celebrates traditional art-making.
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold" style={{ fontFamily: 'Outfit' }}>Medium:</p>
                                        <p style={{ fontFamily: 'Jeju Myeongjo' }}>Watercolor, Acrylic, Graphite, Charcoal</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <div className="w-full max-w-md h-64 bg-gradient-to-br from-orange-300 to-yellow-200 rounded-lg shadow-lg flex items-center justify-center">
                                    <span className="text-white text-xl font-bold" style={{ fontFamily: 'Outfit' }}>Paint & Graphite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};