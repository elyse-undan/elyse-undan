import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const Home = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const texts = [
        "Artist, UI/UX, and Software Engineer",
        "A passionate developer crafting elegant solutions.",
        "Art enthusiast exploring digital creativity."
    ];

    const typeText = (text) => {
        setIsAnimating(true);
        let index = 0;
        setDisplayText("");
        
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typeInterval);
                setIsAnimating(false);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    };

    const eraseText = () => {
        setIsAnimating(true);
        let currentLength = displayText.length;
        const originalText = displayText;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        
        // First scramble phase
        const scrambleInterval = setInterval(() => {
            let scrambled = '';
            for (let i = 0; i < currentLength; i++) {
                if (originalText[i] === ' ') {
                    scrambled += ' ';
                } else {
                    scrambled += characters[Math.floor(Math.random() * characters.length)];
                }
            }
            setDisplayText(scrambled);
        }, 200);
        
        // After scrambling for a bit, start deleting
        setTimeout(() => {
            clearInterval(scrambleInterval);
            
            const eraseInterval = setInterval(() => {
                if (currentLength > 0) {
                    let scrambled = '';
                    for (let i = 0; i < currentLength - 1; i++) {
                        if (originalText[i] === ' ') {
                            scrambled += ' ';
                        } else {
                            scrambled += characters[Math.floor(Math.random() * characters.length)];
                        }
                    }
                    setDisplayText(scrambled);
                    currentLength--;
                } else {
                    clearInterval(eraseInterval);
                    setIsAnimating(false);
                    // Switch to the next text
                    const nextIndex = (currentTextIndex + 1) % texts.length;
                    setCurrentTextIndex(nextIndex);
                    typeText(texts[nextIndex]);
                }
            }, 20);
        }, 300);
    };

    const handleMouseEnter = () => {
        if (!isAnimating) {
            eraseText();
        }
    };

    useEffect(() => {
        typeText(texts[0]);
    }, []);

    return (
        <section 
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20" 
            style={{
                background: 'linear-gradient(to bottom, #F9F1E6 0%, #ffffff 100%)'
            }}
        >
            <div className="text-center max-w-4xl mx-auto">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight" style={{fontFamily: 'Outfit, sans-serif', color: 'var(--text-hero)'}}>
                    hi! i'm elyse
                </h1>
                
                {/* Animated subtitle */}
                <div 
                    className="subtitle-text text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center cursor-pointer transition-colors px-4"
                    style={{color: 'var(--text-body)'}}
                    onMouseEnter={handleMouseEnter}
                >
                    <span>
                        {displayText}<span style={{animation: 'blink 1s infinite'}}>|</span>
                    </span>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                    <a 
                        href="#work" 
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg active:shadow-lg text-center touch-manipulation"
                        style={{
                            fontFamily: 'Outfit, sans-serif',
                            backgroundColor: 'var(--orange)',
                            color: 'var(--text-hero)',
                            border: 'none',
                            textDecoration: 'none'
                        }}
                    >
                        View Work
                    </a>
                    <Link 
                        to="/contact"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 border-2 hover:bg-black hover:text-white active:bg-black active:text-white text-center touch-manipulation"
                        style={{
                            fontFamily: 'Outfit, sans-serif',
                            backgroundColor: 'transparent',
                            color: 'var(--text-hero)',
                            borderColor: 'var(--text-hero)'
                        }}
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    )
}