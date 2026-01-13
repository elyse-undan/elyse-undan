import { RevealOnScroll } from '../RevealOnScroll';

export const Art = () => {
    const artworks = [
        {
            id: 1,
            title: "Digital Painting & Composition",
            image: "/elyse-undan/images/cover_artwork.png",
            medium: "Procreate",
            description: "my digital paintings"
        },
        {
            id: 2,
            title: "Film & Animation",
            image: "/elyse-undan/images/animation.png",
            medium: "Adobe PremierePro, Cinema4D, Procreate",
            description: "short films & animated works"
        },
        {
            id: 3,
            title: "Graphics & Illustration",
            image: "/elyse-undan/images/graphics.png",
            medium: "Procreate, Adobe Photoshop & Illustrator",
            description: "graphics, flyers, stickers, and more"
        },
        {
            id: 4,
            title: "Photography",
            image: "/elyse-undan/images/photography.jpg",
            medium: "Digital Photography",
            description: "digital photography"
        },
        {
            id: 5,
            title: "Paint & Graphite",
            image: "https://via.placeholder.com/400x400/FFB74D/ffffff?text=Paint+%26+Graphite",
            medium: "Watercolor, Acrylic, Graphite, Charcoal",
            description: "an assortment of traditional mediums"
        },
        {
            id: 6,
            title: "Ceramic Sculptures",
            image: "/elyse-undan/images/ceramics.jpg",
            medium: "Earthenware Clay, Glaze, Wood",
            description: "sculptural works"
        }
    ];

    return (
        <section
            id="art"
            className="min-h-screen px-4 py-20"
            style={{backgroundColor: '#F9F1E6'}}>
            <div className="container mx-auto max-w-7xl">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Outfit, sans-serif', color: '#000000'}}>
                            Art Gallery
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto" style={{fontFamily: 'Jeju Myeongjo, serif', color: '#000000'}}>
                            A collection of my artistic works spanning various mediums and styles.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Square Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artworks.map((artwork) => (
                        <div 
                            key={artwork.id}
                            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                            {/* Image */}
                            <img 
                                src={artwork.image}
                                alt={artwork.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            
                            {/* Dark Overlay with Text (appears on hover) */}
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center text-white p-4">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2" style={{fontFamily: 'Outfit, sans-serif'}}>
                                        {artwork.title}
                                    </h3>
                                    <p className="text-sm md:text-base opacity-90" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        {artwork.medium}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};