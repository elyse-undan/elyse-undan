import { RevealOnScroll } from "../RevealOnScroll"
import { LazyOBJViewer } from "../LazyOBJViewer"

export const Projects = () => {
    return <section 
    id="work" 
    className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-black" style={{fontFamily: 'Blonden, sans-serif'}}>
                    My Work
                </h2>
                
                <div className="space-y-8 sm:space-y-12">
                    {/* CoRA Extension */}
                    <RevealOnScroll>
                        <div className="bg-white rounded-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="lg:order-1">
                                    <img 
                                        src="/elyse-undan/images/CoRA.png" 
                                        alt="CoRA Extension"
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 sm:p-8 flex flex-col justify-center lg:order-2">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        CoRA Extension
                                    </h3>
                                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                        Work description goes here. Add details about what you built, the technologies used, and what you accomplished.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["Tech1", "Tech2", "Tech3"].map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-black py-1 px-3 rounded-full text-sm hover:bg-gray-200 transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-sm">Date</span>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* AR Project with Interactive 3D Model */}
                    <RevealOnScroll>
                        <div className="bg-white rounded-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-6 sm:p-8 flex flex-col justify-center lg:order-1">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Site-Specific Augmented Reality App
                                    </h3>
                                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                        Designed a site-specific AR app as a playable art installation for the Le Yeux Du Monde gallery. Explored Unity and 3 SDKs, primarily Vuforia Engine to craft an AR user experience with 5 sculpted 3D models using Cinema4D.
                                    </p>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                                        <p className="text-sm text-blue-800">
                                            <strong>Interactive 3D Horse:</strong> Rotating Cinema4D sculpture from your AR gallery collection
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["Unity", "C#", "Cinema4D", "Vuforia Engine", "3D Modeling"].map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-black py-1 px-3 rounded-full text-sm hover:bg-gray-200 transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-sm">April 2025</span>
                                </div>
                                <div className="lg:order-2 bg-white flex items-center justify-center min-h-[350px] p-0">
                                    <LazyOBJViewer
                                        objUrl="/elyse-undan/models/horse.obj"
                                        width="100%"
                                        height="350px"
                                        autoRotate={true}
                                        backgroundColor="white"
                                    />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 2 */}
                    <RevealOnScroll>
                        <div className="bg-white rounded-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="lg:order-2 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-700">Housing App UI</h4>
                                        <p className="text-sm text-gray-500">React Frontend Design</p>
                                    </div>
                                </div>
                                <div className="p-6 sm:p-8 flex flex-col justify-center lg:order-1">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Hoos Housing Haven
                                    </h3>
                                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                        WICS 2025 Hackathon Work. Drafted and designed front end website using Canva and Figma, built UI with React to implement front-end design, and collaborated in a team to connect React frontend to Flask backend.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["React", "JavaScript", "Flask", "Figma", "Canva"].map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-black py-1 px-3 rounded-full text-sm hover:bg-gray-200 transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-sm">February 2025</span>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Clothing Library Project */}
                    <RevealOnScroll>
                        <div className="bg-white rounded-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="lg:order-1">
                                    <img 
                                        src="/elyse-undan/images/clothing_library.png" 
                                        alt="Clothing Library"
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 sm:p-8 flex flex-col justify-center lg:order-2">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black" style={{fontFamily: 'Blonden, sans-serif'}}>
                                        Clothing Library
                                    </h3>
                                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                        A comprehensive clothing management system designed to help users organize, track, and optimize their wardrobe. Features include outfit planning, seasonal organization, and sustainable fashion tracking.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["React", "JavaScript", "CSS", "UI/UX Design", "Fashion Tech"].map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-black py-1 px-3 rounded-full text-sm hover:bg-gray-200 transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-sm">2024</span>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}