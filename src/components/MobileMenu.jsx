import { useEffect } from "react";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(244,246,220,0.95)] z-40 flex flex-col items-center justify-center 
                        transition-all duration-300 ease-in-out
                        ${
                            menuOpen
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                        }`}                
        >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-[#6a5d3e] text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                &times;
            </button>
            <a      href="#home"
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-[#6a5d3e] my-4 transform transition-transform duration-300
                    ${menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"}`}>  
                        Home
                    </a>

                    <a href="#about" 
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-[#6a5d3e] my-4 transform transition-transform duration-300
                    ${menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"}`}>  
                        About
                    </a>

                    <a href="#projects" 
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-[#6a5d3e] my-4 transform transition-transform duration-300
                    ${menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"}`}>  
                        Projects
                    </a>

                    <a href="#contact" 
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-[#6a5d3e] my-4 transform transition-transform duration-300
                    ${menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"}`}>  
                        Contact
            </a>
        </div>
    );
}