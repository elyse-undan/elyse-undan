import { RevealOnScroll } from "../RevealOnScroll"
import { useState, useEffect, useRef } from "react"

export const About = () => {
    
    const frontendSkills = [
        "React", 
        "React Native", 
        "JavaScript", 
        "TypeScript", 
        "HTML/CSS", 
        "Bootstrap"
    ];

    const backendSkills = [
        "Python", 
        "Flask",
        "Django",
        "Java",
        "C",
        "SQL"
    ];

    const toolsAndDatabases = [
        "Git",
        "GitHub", 
        "VS Code",
        "Figma",
        "Firebase",
        "PostgreSQL",
        "SQLite"
    ];

    const designSoftware = [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator", 
        "Adobe InDesign",
        "Procreate",
        "Canva"
    ];

    const SkillWheel = ({ skills, title, direction = "left" }) => {
        const [isPaused, setIsPaused] = useState(false);
        
        const handleMouseEnter = () => {
            setIsPaused(true);
        };
        
        const handleMouseLeave = () => {
            setIsPaused(false);
        };
        
        const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";
        
        // Show single set when paused, triple set when animating
        const displaySkills = isPaused ? skills : [...skills, ...skills, ...skills];
        
        return (
            <div className="overflow-hidden">
                <h3 className="text-2xl font-bold mb-6 text-center text-black" style={{fontFamily: 'Blonden, sans-serif'}}> {title} </h3>
                <div 
                    className="relative" 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        className={`flex space-x-4 ${isPaused ? 'animation-paused' : animationClass}`}
                        style={{
                            justifyContent: isPaused ? 'center' : undefined,
                            transition: 'all 0.3s ease-out'
                        }}
                    >
                        {displaySkills.map((tech, index) => (
                            <span 
                                key={isPaused ? tech : index}
                                className="bg-gray-100 text-black py-3 px-6 
                                                rounded-full text-lg font-medium whitespace-nowrap
                                                skill-item flex-shrink-0 border border-gray-200 select-none"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return <section id="about" className="min-h-screen bg-white">
        <RevealOnScroll>
            {/* First Container: Image + About Me Title + Paragraph */}
            <div className="min-h-screen flex items-center pt-20">
                <div className="flex flex-col lg:flex-row items-stretch h-full w-full">
                    {/* Profile Image */}
                    <div className="w-full lg:w-1/3 h-full">
                        <img 
                            src="/elyse-undan/images/profile-photo.jpg" 
                            alt="Elyse Undan" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/800x800/2196F3/ffffff?text=ElyseUndan";
                                console.log("Image failed to load, using placeholder");
                            }}
                            onLoad={() => console.log("Image loaded successfully")}
                        />
                    </div>

                    {/* About Content */}
                    <div className="w-full lg:w-2/3 h-full flex items-center justify-center p-6 lg:p-8">
                        <div className="w-full max-w-3xl">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black text-center lg:text-left" style={{fontFamily: 'Blonden, sans-serif'}}> 
                                ABOUT ME
                            </h2>
                            <div className="space-y-4 lg:space-y-6">
                                <RevealOnScroll>
                                    <p className="text-black font-medium text-lg leading-relaxed">
                                        Hello! I'm Elyse Undan, a software developer and designer who loves creating digital experiences that feel intuitive, thoughtful, and authentic. I'm currently studying Computer Science at the University of Virginia, where I've been able to combine my technical background with my love for digital design, art, and the humanities.
                                    </p>
                                </RevealOnScroll>
                                
                                <RevealOnScroll>
                                    <p className="text-black font-medium text-lg leading-relaxed">
                                        I'm especially drawn to projects that sit at the intersection of creativity and problem-solving. Whether I'm designing interfaces, exploring interaction patterns, or building out full-stack features, I'm always thinking about how people experience technology and how design choices shape the way we connect with it. I love digging into research, simplifying complex systems, and turning ideas into clean, intentional experiences.
                                    </p>
                                </RevealOnScroll>
                                
                                <RevealOnScroll>
                                    <p className="text-black font-medium text-lg leading-relaxed">
                                        Outside of work, you'll usually find me experimenting with new visual styles, sketching, or diving into topics that explore human behavior and storytelling. I'm passionate about design that respects people, embraces curiosity, and makes everyday moments a little more meaningful.
                                        If you're working on something exciting, or just want to talk design, art, or tech, feel free to reach out!
                                    </p>
                                </RevealOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Container: Education + Work Experience + Skills */}
            <div className="min-h-screen bg-gradient-to-b from-white to-[#F9EFBB]/20 py-20">
                <div className="max-w-6xl mx-auto px-4">
                    
                    {/* Education and Work Experience Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="p-6 rounded-xl border-gray-200 border hover:-translate-y-1 transition-all bg-gray-50">
                            <h3 className="text-xl font-bold mb-4 text-black" style={{fontFamily: 'Blonden, sans-serif'}}> Education </h3>
                            <div className="text-black space-y-3">
                                <div>
                                    <h4 className="font-semibold">University of Virginia, Charlottesville, VA</h4>
                                    <p><strong>B.A. in Computer Science</strong> - August 2023 - May 2027</p>
                                    <p><strong>Minor in Studio Art</strong></p>
                                </div>
                                <div>
                                    <p className="text-sm"><strong>Relevant Coursework:</strong> Software Engineering, Software Development Essentials, HCI in Software Development, Computer Systems and Organization I, Data Structures and Algorithms I & II, Discrete Math I & II, Introduction to Digital Art I & II</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-gray-200 border hover:-translate-y-1 transition-all bg-gray-50">
                            <h3 className="text-xl font-bold mb-4 text-black" style={{fontFamily: 'Blonden, sans-serif'}}> Work Experience </h3>
                            <div className="text-black space-y-4">
                                <div> 
                                    <h4 className="font-semibold">UI/UX Design and iOS & Android App Development Intern</h4>
                                    <p className="text-sm text-gray-600 mb-1">Uplifty AI, Remote • August 2025 - Present</p>
                                    <p className="text-sm">Optimized communication between 3 different teams through acting as a liaison and implementing front-end wireframe designs to code in React Native. Utilized Flask for backend development and voiced over app demo functionality to stakeholders.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Software Engineering Teaching Assistant</h4>
                                    <p className="text-sm text-gray-600 mb-1">University of Virginia • August 2025 - Present</p>
                                    <p className="text-sm">Managed 2 teams of students as project supervisor, engaged in office hours 3 sessions per week, and reinforced proficiency in software design concepts by evaluating 11+ student exams.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Research Assistant - Valuing the Social in Computing</h4>
                                    <p className="text-sm text-gray-600 mb-1">University of Virginia • July 2024 - January 2025</p>
                                    <p className="text-sm">Analyzed 30+ papers of qualitative data on intersections of race, gender, and social values in computing using coding and ethnographic research methods. Marketed lab research through daily website updates.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Public Relations Chair</h4>
                                    <p className="text-sm text-gray-600 mb-1">Peer Advising Family Network, UVA • March 2024 - Present</p>
                                    <p className="text-sm">Created 50+ digitally drawn graphics, videos, and merchandise. Provided peer-mentoring resources to 250+ Asian Pacific Islander and South Asian American students.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Scrolling Wheels Card */}
                    <div className="bg-[#F9EFBB]/20 rounded-xl p-8 border-gray-200 border hover:-translate-y-1 transition-all">
                        <h2 className="text-3xl font-bold mb-8 text-center text-black" style={{fontFamily: 'Blonden, sans-serif'}}> Skills </h2>
                        
                        {/* Skills Scrolling Wheels */}
                        <div className="space-y-12">
                            <SkillWheel skills={frontendSkills} title="Frontend" direction="left" />
                            <SkillWheel skills={backendSkills} title="Backend" direction="right" />
                            <SkillWheel skills={toolsAndDatabases} title="Tools & Databases" direction="left" />
                            <SkillWheel skills={designSoftware} title="Design Software" direction="right" />
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
};