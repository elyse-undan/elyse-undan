import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section 
    id="projects" 
    className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-black" style={{fontFamily: 'Blonden, sans-serif'}}>
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Project Card 1 */}
                    <div className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg transition-all bg-gray-50">
                        <h3 className="text-xl font-bold mb-2 text-black" style={{fontFamily: 'Blonden, sans-serif'}}>Site-Specific Augmented Reality App</h3>
                        <p className="text-black mb-4">
                            Designed a site-specific AR app as a playable art installation for the Le Yeux Du Monde gallery. Explored Unity and 3 SDKs, primarily Vuforia Engine to craft an AR user experience with 5 sculpted 3D models using Cinema4D.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["Unity", "C++", "Cinema4D", "Vuforia Engine", "3D Modeling"].map((tech, index) => (
                                <span
                                key={index}
                                className="bg-gray-100 text-black py-1 px-3 rounded-full text-sm hover:bg-gray-200 hover:shadow-md transition"
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 text-sm my-4">April 2025</span>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="p-6 rounded-xl border border-gray-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg transition-all bg-gray-50">
                        <h3 className="text-xl font-bold mb-2 text-black" style={{fontFamily: 'Blonden, sans-serif'}}>Hoos Housing Haven</h3>
                        <p className="text-black mb-4">
                            WICS 2025 Hackathon Project. Drafted and designed front end website using Canva and Figma, built UI with React to implement front-end design, and collaborated in a team to connect React frontend to Flask backend.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["React", "JavaScript", "Flask", "Figma", "Canva"].map((tech, index) => (
                                <span
                                key={index}
                                className="bg-gray-100 text-black py-1 px-3 rounded-full text-sm hover:bg-gray-200 hover:shadow-md transition"
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 text-sm my-4">February 2025</span>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}