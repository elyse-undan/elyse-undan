import { RevealOnScroll } from '../RevealOnScroll';

export const Art = () => {
    return (
        <section
            id="art"
            className="min-h-screen bg-gradient-to-b from-[#F9EFBB] from-25% to-white px-4 py-20">
            <div className="container mx-auto">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4" style={{fontFamily: 'Blonden, sans-serif'}}>
                            Art Gallery
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            A collection of my artistic works spanning various mediums and styles.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="max-w-7xl mx-auto">
                    {/* Digital Media Section */}
                    <div className="mb-12 sm:mb-16">
                        <RevealOnScroll>
                            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 text-center" style={{fontFamily: 'Blonden, sans-serif'}}>
                                Digital Media
                            </h2>
                        </RevealOnScroll>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img 
                                    src="/elyse-undan/images/cover_artwork.png" 
                                    alt="Digital Painting & Composition"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Digital Painting & Composition
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1 sm:gap-0">
                                        <span className="text-gray-600 text-xs sm:text-sm font-medium">Procreate</span>
                                        <span className="text-gray-500 text-xs sm:text-sm">2020-25</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        my digital paintings
                                    </p>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img 
                                    src="/elyse-undan/images/animation.png" 
                                    alt="Film & Animation"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Film & Animation
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1 sm:gap-0">
                                        <span className="text-gray-600 text-xs sm:text-sm font-medium">Adobe PremierePro, Cinema4D, Procreate</span>
                                        <span className="text-gray-500 text-xs sm:text-sm">2024-25</span>
                                    </div>
                                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                        short films & animated works
                                    </p>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img 
                                    src="/elyse-undan/images/graphics.png" 
                                    alt="Graphics & Illustration"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Graphics & Illustration
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1 sm:gap-0">
                                        <span className="text-gray-600 text-xs sm:text-sm font-medium">Procreate, Adobe Photoshop & Illustrator</span>
                                        <span className="text-gray-500 text-xs sm:text-sm">2024-25</span>
                                    </div>
                                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                        graphics, flyers, stickers, and more
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Physical Media Section */}
                    <div className="mb-16">
                        <RevealOnScroll>
                            <h2 className="text-3xl font-bold text-black mb-8 text-center" style={{fontFamily: 'Blonden, sans-serif'}}>
                                Physical Media
                            </h2>
                        </RevealOnScroll>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img 
                                    src="/api/placeholder/400/300" 
                                    alt="Paint & Graphite"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-black mb-2" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Paint & Graphite
                                    </h3>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-gray-600 text-sm font-medium">Watercolor, Acrylic, Graphite, Charcoal</span>
                                        <span className="text-gray-500 text-sm">2020-25</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        an assortment of traditional mediums
                                    </p>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img 
                                    src="/elyse-undan/images/ceramics.jpg" 
                                    alt="Ceramic Sculptures"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-black mb-2" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Ceramic Sculptures
                                    </h3>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-gray-600 text-sm font-medium">Earthenware Clay, Glaze, Wood</span>
                                        <span className="text-gray-500 text-sm">2025</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        sculptural works
                                    </p>
                                </div>
                            </div>
                            
                            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img 
                                    src="/api/placeholder/400/300" 
                                    alt="Printmaking"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-black mb-2" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Printmaking
                                    </h3>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-gray-600 text-sm font-medium">Inglio/Monotype Ink</span>
                                        <span className="text-gray-500 text-sm">2026</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        printmaking pieces
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};