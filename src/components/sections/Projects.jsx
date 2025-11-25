import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section 
    id="projects" 
    className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#676c3b] to-[#6a5d3e] bg-clip-text text-transparent">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card 1 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project One</h3>
                        <p className="text-gray-400 mb-4">
                            A brief description of Project One. This project involves...
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, index) => (
                                <span
                                key={index}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,244,0.2)] transition
                                                "
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://clothinglibrary-cc94fce6e5b5.herokuapp.com/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                        </div>
                    </div>

                    {/* Project Card 1 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project One</h3>
                        <p className="text-gray-400 mb-4">
                            A brief description of Project One. This project involves...
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, index) => (
                                <span
                                key={index}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,244,0.2)] transition
                                                "
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://clothinglibrary-cc94fce6e5b5.herokuapp.com/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                        </div>
                    </div>

                    {/* Project Card 1 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project One</h3>
                        <p className="text-gray-400 mb-4">
                            A brief description of Project One. This project involves...
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, index) => (
                                <span
                                key={index}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,244,0.2)] transition
                                                "
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://clothinglibrary-cc94fce6e5b5.herokuapp.com/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}