import { useEffect } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({menuOpen, setMenuOpen, isRouter = false}) => {
    
    return (
        <div className={`fixed top-0 left-0 w-full bg-[#F9EFBB]/95 z-40 flex flex-col items-center justify-center 
                        transition-all duration-300 ease-in-out
                        ${
                            menuOpen
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                        }`}                
        >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-black text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                &times;
            </button>
            
            {isRouter ? (
                <>
                    <Link to="/"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            Home
                    </Link>

                    <Link to="/about" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            About
                    </Link>

                    <Link to="/work" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            Work
                    </Link>

                    <Link to="/art" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            Art
                    </Link>

                    <Link to="/contact" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            Contact
                    </Link>
                </>
            ) : (
                <>
                    <a href="#home"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            Home
                    </a>

                    <a href="#about" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            About
                    </a>

                    <a href="#projects" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            Projects
                    </a>

                    <a href="#contact" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}>  
                            Contact
                    </a>
                </>
            )}
        </div>
    );
}