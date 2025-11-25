import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);
    
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-white/10 shadow-lg"> 
            <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
                <a href="#home" className="font-mono text-xl font-bold text-white ml-2">
                    elyse<span className="text-blue-500">.tech</span>
                </a>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden mr-2 flex items-center justify-center text-white text-2xl" onClick={()=> setMenuOpen((prev) => !prev)}> 
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8 mr-2">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                        About
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                        Contact
                    </a>
                </div>

            </div>
        </nav>
    );
}