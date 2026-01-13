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

    return <section id="about">
        {/* About Section - Image Left, Text Right, Beige Background */}
        <div className="py-20" style={{background: '#F9F1E6'}}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Profile Image */}
                    <div className="w-full lg:w-1/3">
                        <img 
                            src="/elyse-undan/images/profile-photo.jpg" 
                            alt="Elyse Undan" 
                            className="w-full h-auto rounded-2xl object-cover"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/800x800/2196F3/ffffff?text=ElyseUndan";
                                console.log("Image failed to load, using placeholder");
                            }}
                            onLoad={() => console.log("Image loaded successfully")}
                        />
                    </div>

                    {/* About Content */}
                    <div className="w-full lg:w-2/3">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{fontFamily: 'Outfit, sans-serif', color: '#000000'}}>
                            About
                        </h1>
                        <div className="space-y-6">
                            <p style={{fontFamily: 'Jeju Myeongjo, serif', color: '#000000'}} className="text-lg leading-relaxed">
                                Hello! I'm Elyse Undan, a software developer and designer who loves creating digital experiences that feel intuitive, thoughtful, and authentic. I'm currently studying Computer Science at the University of Virginia, where I've been able to combine my technical background with my love for digital design, art, and the humanities.
                            </p>
                            
                            <p style={{fontFamily: 'Jeju Myeongjo, serif', color: '#000000'}} className="text-lg leading-relaxed">
                                I'm especially drawn to projects that sit at the intersection of creativity and problem-solving. Whether I'm designing interfaces, exploring interaction patterns, or building out full-stack features, I'm always thinking about how people experience technology and how design choices shape the way we connect with it. I love digging into research, simplifying complex systems, and turning ideas into clean, intentional experiences.
                            </p>
                            
                            <p style={{fontFamily: 'Jeju Myeongjo, serif', color: '#000000'}} className="text-lg leading-relaxed">
                                Outside of work, you'll usually find me experimenting with new visual styles, sketching, or diving into topics that explore human behavior and storytelling. I'm passionate about design that respects people, embraces curiosity, and makes everyday moments a little more meaningful.
                                If you're working on something exciting, or just want to talk design, art, or tech, feel free to reach out!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* Education Section - Orange Background */}
            <div className="py-20" style={{background: 'linear-gradient(135deg, #FFB74D 0%, #FF9800 100%)'}}>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-white mb-8" style={{fontFamily: 'Outfit, sans-serif'}}>
                        Education
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-black mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                            University of Virginia, Charlottesville, VA
                        </h3>
                        <div className="space-y-3 text-black">
                            <p style={{fontFamily: 'Jeju Myeongjo, serif'}} className="text-lg">
                                <strong>B.A. in Computer Science</strong> - August 2023 - May 2027
                            </p>
                            <p style={{fontFamily: 'Jeju Myeongjo, serif'}} className="text-lg">
                                <strong>Minor in Studio Art</strong>
                            </p>
                            <p style={{fontFamily: 'Jeju Myeongjo, serif'}} className="text-base">
                                <strong>Relevant Coursework:</strong> Software Engineering, Software Development Essentials, HCI in Software Development, Computer Systems and Organization I, Data Structures and Algorithms I & II, Discrete Math I & II, Introduction to Digital Art I & II
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Work Experience Section - Timeline Layout */}
            <div className="py-20" style={{background: '#ffffff'}}>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-black mb-12 text-center" style={{fontFamily: 'Outfit, sans-serif'}}>
                        Work Experience
                    </h2>
                    
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gray-300 h-full"></div>
                        
                        {/* Work Experience Cards - Ordered by Date (Most Recent First) */}
                        
                        {/* 1. UI/UX Design Intern - August 2025 - Present */}
                        <div className="relative flex items-center mb-12">
                            <div className="w-1/2 pr-8">
                                <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-black mb-2" style={{fontFamily: 'Outfit, sans-serif'}}>
                                        UI/UX Design and iOS & Android App Development Intern
                                    </h3>
                                    <p className="text-black/70 mb-3" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        Uplifty AI, Remote • August 2025 - Present
                                    </p>
                                    <p className="text-black" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        Optimized communication between 3 different teams through acting as a liaison and implementing front-end wireframe designs to code in React Native. Utilized Flask for backend development and voiced over app demo functionality to stakeholders.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white"></div>
                            <div className="w-1/2"></div>
                        </div>

                        {/* 2. Teaching Assistant - August 2025 - Present */}
                        <div className="relative flex items-center mb-12">
                            <div className="w-1/2"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white"></div>
                            <div className="w-1/2 pl-8">
                                <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-black mb-2" style={{fontFamily: 'Outfit, sans-serif'}}>
                                        Software Engineering Teaching Assistant
                                    </h3>
                                    <p className="text-black/70 mb-3" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        University of Virginia • August 2025 - Present
                                    </p>
                                    <p className="text-black" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        Managed 2 teams of students as project supervisor, engaged in office hours 3 sessions per week, and reinforced proficiency in software design concepts by evaluating 11+ student exams.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Research Assistant - July 2024 - January 2025 */}
                        <div className="relative flex items-center mb-12">
                            <div className="w-1/2 pr-8">
                                <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-black mb-2" style={{fontFamily: 'Outfit, sans-serif'}}>
                                        Research Assistant - Valuing the Social in Computing
                                    </h3>
                                    <p className="text-black/70 mb-3" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        University of Virginia • July 2024 - January 2025
                                    </p>
                                    <p className="text-black" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        Analyzed 30+ papers of qualitative data on intersections of race, gender, and social values in computing using coding and ethnographic research methods. Marketed lab research through daily website updates.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white"></div>
                            <div className="w-1/2"></div>
                        </div>

                        {/* 4. Public Relations Chair - March 2024 - Present */}
                        <div className="relative flex items-center">
                            <div className="w-1/2"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white"></div>
                            <div className="w-1/2 pl-8">
                                <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-black mb-2" style={{fontFamily: 'Outfit, sans-serif'}}>
                                        Public Relations Chair
                                    </h3>
                                    <p className="text-black/70 mb-3" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        Peer Advising Family Network, UVA • March 2024 - Present
                                    </p>
                                    <p className="text-black" style={{fontFamily: 'Jeju Myeongjo, serif'}}>
                                        Created 50+ digitally drawn graphics, videos, and merchandise. Provided peer-mentoring resources to 250+ Asian Pacific Islander and South Asian American students.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section - Keep As Is */}
            <div className="py-20" style={{background: '#ffffff'}}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-gray-50 rounded-xl p-8 border-gray-200 border hover:-translate-y-1 transition-all">
                        <h2 className="text-3xl font-bold mb-8 text-center text-black" style={{fontFamily: 'Outfit, sans-serif'}}> Skills </h2>
                        
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
    </section>
};