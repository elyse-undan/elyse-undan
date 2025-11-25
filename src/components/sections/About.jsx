import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    
    const frontendSkills = [
        "React", 
        "Tailwind", 
        "JavaScript", 
        "HTML", 
        "CSS", 
        "TypeScript"
    ];

    const backendSkills = [
        "Node.js", 
        "Flask",
        "AWS",
        "Python",
        "SQL"
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#676c3b] to-[#6a5d3e] bg-clip-text text-transparent text-center"> 
                    About Me
                </h2>
                
                <div className="bg-[#b8be86]/20 rounded-xl p-8 border-[#d0be8f]/20 border hover:-translate-y-1 transition-all">
                    <p className="text-[#6a5d3e]/90 mb-6">
                        I'm Elyse Undan, a passionate software developer with a knack for creating elegant and efficient solutions. With a background in computer science and a love for coding, I specialize in building web applications that are not only functional but also visually appealing. My journey in tech has been fueled by curiosity and a desire to continuously learn and grow. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or indulging in my love for photography and travel.
                    </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech) => (
                                <span 
                                key={tech}
                                className="bg-[#676c3b]/10 text-[#676c3b] py-1 px-3 
                                                rounded-full text-sm hover:bg-[#676c3b]/20
                                                hover:shadow-[0_2px_8px_rgba(103,108,59,0.2)] transition
                                                "
                                            >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech) => (
                                <span 
                                key={tech}
                                className="bg-[#676c3b]/10 text-[#676c3b] py-1 px-3 
                                                rounded-full text-sm hover:bg-[#676c3b]/20
                                                hover:shadow-[0_2px_8px_rgba(103,108,59,0.2)] transition
                                                "
                                            >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-[#d0be8f]/20 border hover:-translate-y-1 transition-all bg-[#b8be86]/10">
                            <h3 className="text-xl font-bold mb-4 text-[#6a5d3e]"> Education </h3>
                            <ul className="list-disc list-inside text-[#6a5d3e]/90 space-y-2">
                                <li className="mb-2">
                                    <strong>B.A. in Computer Science</strong> - University of Virginia (2023 - 2027)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-[#d0be8f]/20 border hover:-translate-y-1 transition-all bg-[#b8be86]/10">
                            <h3 className="text-xl font-bold mb-4 text-[#6a5d3e]"> Work Experience </h3>
                            <div className="text-[#6a5d3e]/90 space-y-2">
                                <div> 
                                    <h4 className="font-semibold">Software Engineering Intern - Tech Solutions Inc. (Summer 2025)</h4> 
                                    <p>Developed features for the company's main web application using React and Node.js, improving user engagement by 15%.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Web Development Intern - Creative Web Agency (Summer 2024)</h4>
                                    <p>Assisted in building responsive websites for clients, focusing on frontend design and user experience.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
};