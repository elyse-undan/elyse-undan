import { useEffect, useState } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-[#ADD7EE]/20 ${
            isScrolled 
                ? 'bg-[#F9EFBB]/80 backdrop-blur-md shadow-lg' 
                : 'bg-[#F9EFBB] backdrop-blur-lg'
        }`}>
            <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
                <a href="#home" className="font-mono text-xl font-bold ml-2 text-black">
                    elyse.undan
                </a>                {/* Hamburger Menu Icon for Mobile */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden mr-2 flex items-center justify-center text-black text-2xl" onClick={()=> setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8 mr-2">
                    <a href="#home" className="text-black hover:text-gray-600 transition-colors font-medium">
                        Home
                    </a>
                    <a href="#about" className="text-black hover:text-gray-600 transition-colors font-medium">
                        About
                    </a>
                    <a href="#projects" className="text-black hover:text-gray-600 transition-colors font-medium">
                        Projects
                    </a>
                    <a href="#contact" className="text-black hover:text-gray-600 transition-colors font-medium">
                        Contact
                    </a>
                </div>            </div>
        </nav>
    );
}