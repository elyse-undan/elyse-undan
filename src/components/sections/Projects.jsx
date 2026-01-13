export const Projects = () => {
    return <section 
    id="work" 
    className="py-16 sm:py-20"
    style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center" style={{fontFamily: 'Outfit, sans-serif', color: 'var(--text-hero)'}}>
                My Work
            </h2>
        </div>
                
        <div className="space-y-16">
            {/* CoRA Extension - Right Side Color */}
            <div className="relative w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 relative">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Text on left */}
                        <div className="lg:w-1/2 p-8 z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{fontFamily: 'Outfit, sans-serif', color: '#000'}}>
                                CoRA Extension
                            </h3>
                            <p className="text-lg mb-6 leading-relaxed text-gray-700">
                                CoRA is a tool that provides AI summaries on each course and associated professor in the UVA SIS enrollment site. Difficulty ratings and referenced links are provided as well for transparency.
                            </p>
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors" style={{fontFamily: 'Outfit, sans-serif'}}>
                                Visit Site
                            </button>
                        </div>
                    </div>
                </div>
                {/* Colored container extending to right edge with contained image */}
                <div className="absolute top-0 right-0 h-full rounded-l-3xl flex items-center justify-center p-12" 
                     style={{backgroundColor: '#FFC86D', width: 'calc(50vw)'}}> 
                    {/* Shadow beneath the screen */}
                    <div className="absolute bottom-4 w-40 h-8 bg-black/15 rounded-full blur-md"></div>
                    <img 
                        src="/elyse-undan/images/CoRA.png" 
                        alt="CoRA Extension"
                        className="w-full h-full max-w-sm max-h-80 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>

            {/* Shelflife - Left Side Color */}
            <div className="relative w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 relative">
                    <div className="flex flex-col lg:flex-row-reverse items-center">
                        {/* Text on right */}
                        <div className="lg:w-1/2 p-8 z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{fontFamily: 'Outfit, sans-serif', color: '#000'}}>
                                Shelflife
                            </h3>
                            <p className="text-lg mb-6 leading-relaxed text-gray-700">
                                An intelligent inventory management system designed to track product expiration dates and optimize stock rotation. Features include automated alerts, barcode scanning, and analytics dashboard.
                            </p>
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors" style={{fontFamily: 'Outfit, sans-serif'}}>
                                Visit Site
                            </button>
                        </div>
                    </div>
                </div>
                {/* Colored container extending to left edge with contained image */}
                <div className="absolute top-0 left-0 h-full rounded-r-3xl flex items-center justify-center p-12" 
                     style={{backgroundColor: '#FF8A80', width: 'calc(50vw)'}}>
                    {/* Shadow beneath the screen */}
                    <div className="absolute bottom-4 w-40 h-8 bg-black/15 rounded-full blur-md"></div>
                    <img 
                        src="/elyse-undan/images/shelflife.png" 
                        alt="Shelflife"
                        className="w-full h-full max-w-sm max-h-80 object-contain transition-transform duration-300 hover:-rotate-2 cursor-pointer"
                    />
                </div>
            </div>

            {/* Clothing Library - Right Side Color */}
            <div className="relative w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 relative">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Text on left */}
                        <div className="lg:w-1/2 p-8 z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{fontFamily: 'Outfit, sans-serif', color: '#000'}}>
                                Clothing Library
                            </h3>
                            <p className="text-lg mb-6 leading-relaxed text-gray-700">
                                A comprehensive clothing management system designed to help users organize, track, and optimize their wardrobe. Features include outfit planning and sustainable fashion tracking.
                            </p>
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors" style={{fontFamily: 'Outfit, sans-serif'}}>
                                Visit Site
                            </button>
                        </div>
                    </div>
                </div>
                {/* Colored container extending to right edge with contained image */}
                <div className="absolute top-0 right-0 h-full rounded-l-3xl flex items-center justify-center p-12" 
                     style={{backgroundColor: '#B3E5FC', width: 'calc(50vw)'}}>
                    {/* Shadow beneath the screen */}
                    <div className="absolute bottom-4 w-40 h-8 bg-black/15 rounded-full blur-md"></div>
                    <img 
                        src="/elyse-undan/images/clothing_library.png" 
                        alt="Clothing Library"
                        className="w-full h-full max-w-md max-h-96 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>

            {/* AR App - Left Side Color */}
            <div className="relative w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 relative">
                    <div className="flex flex-col lg:flex-row-reverse items-center">
                        {/* Text on right */}
                        <div className="lg:w-1/2 p-8 z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{fontFamily: 'Outfit, sans-serif', color: '#000'}}>
                                AR Gallery App
                            </h3>
                            <p className="text-lg mb-6 leading-relaxed text-gray-700">
                                Designed a site-specific AR app as a playable art installation for the Le Yeux Du Monde gallery. Explored Unity and 3 SDKs to craft an AR user experience with 5 sculpted 3D models.
                            </p>
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors" style={{fontFamily: 'Outfit, sans-serif'}}>
                                Visit Site
                            </button>
                        </div>
                    </div>
                </div>
                {/* Colored container extending to left edge with contained image */}
                <div className="absolute top-0 left-0 h-full rounded-r-3xl flex items-center justify-center p-12" 
                     style={{backgroundColor: '#C8E6C9', width: 'calc(50vw)'}}>
                    {/* Shadow beneath the phone */}
                    <div className="absolute bottom-8 w-32 h-6 bg-black/15 rounded-full blur-md"></div>
                    <img 
                        src="/elyse-undan/images/ar_app.png" 
                        alt="AR App"
                        className="w-full h-full max-w-sm max-h-80 object-contain transition-transform duration-300 hover:rotate-3 cursor-pointer"
                    />
                </div>
            </div>

            {/* Hoos Housing - Right Side Color */}
            <div className="relative w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 relative">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Text on left */}
                        <div className="lg:w-1/2 p-8 z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{fontFamily: 'Outfit, sans-serif', color: '#000'}}>
                                Hoos Housing Haven
                            </h3>
                            <p className="text-lg mb-6 leading-relaxed text-gray-700">
                                WICS 2025 Hackathon project. Drafted and designed front end website using Canva and Figma, built UI with React and collaborated in a team to connect React frontend to Flask backend.
                            </p>
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors" style={{fontFamily: 'Outfit, sans-serif'}}>
                                Visit Site
                            </button>
                        </div>
                    </div>
                </div>
                {/* Colored container extending to right edge with contained image */}
                <div className="absolute top-0 right-0 h-full rounded-l-3xl flex items-center justify-center p-12" 
                     style={{backgroundColor: '#FFB74D', width: 'calc(50vw)'}}>
                    {/* Shadow beneath the screen */}
                    <div className="absolute bottom-4 w-40 h-8 bg-black/15 rounded-full blur-md"></div>
                    <img 
                        src="/elyse-undan/images/hoos_housing.png" 
                        alt="Hoos Housing Haven"
                        className="w-full h-full max-w-sm max-h-80 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    </section>
}