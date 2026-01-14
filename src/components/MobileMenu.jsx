import { useEffect } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({menuOpen, setMenuOpen, isRouter = false}) => {
    
    return (
        <div className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center 
                        transition-all duration-300 ease-in-out
                        ${
                            menuOpen
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                        }`}
                        style={{backgroundColor: '#F9F1E6'}}
        >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-3xl focus:outline-none touch-manipulation" style={{color: 'var(--text-nav)'}} aria-label="Close Menu">
                &times;
            </button>
            
            {isRouter ? (
                <>
                    <Link to="/"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            Home
                    </Link>

                    <Link to="/work" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            Work
                    </Link>

                    <Link to="/about" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            About
                    </Link>

                    <Link to="/art" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            Art
                    </Link>

                    <Link to="/contact" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            Contact
                    </Link>
                </>
            ) : (
                <>
                    <a href="#home"
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            Home
                    </a>

                    <a href="#about" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            About
                    </a>

                    <a href="#projects" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            Projects
                    </a>

                    <a href="#contact" 
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"}`}
                        style={{color: 'var(--text-nav)', fontFamily: 'Kabel, sans-serif'}}>  
                            Contact
                    </a>
                </>
            )}
        </div>
    );
}