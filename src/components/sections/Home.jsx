import { RevealOnScroll } from "../RevealOnScroll"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const Home = () => {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const texts = [
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
                // Keep cursor blinking after text is complete
                const blinkInterval = setInterval(() => {
                    setShowCursor(prev => !prev);
                }, 500);
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
                    // Switch to the other text
                    const nextIndex = currentTextIndex === 0 ? 1 : 0;
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

    return <section id="home" className="min-h-screen flex flex-col justify-end relative bg-gradient-to-b from-[#F9EFBB] from-80% to-white p-8">
        <RevealOnScroll>
            {/* Title and typewriter text */}
            <div className="mb-12">
                <h1 className="text-7xl md:text-9xl font-bold mb-8 text-black" style={{fontFamily: 'Blonden, sans-serif'}}> 
                    hi! i'm elyse.
                </h1>
                <p 
                    className="text-black text-2xl md:text-3xl font-medium mb-8 max-w-4xl cursor-pointer transition-colors"
                    onMouseEnter={handleMouseEnter}
                >
                    {displayText}
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                </p>
            </div>

            {/* Buttons underneath */}
            <div className="flex space-x-6 mb-16">
                <Link to="/work" className="bg-black text-white py-4 px-8 rounded text-lg font-medium transition hover:-translate-y-0.5 hover:bg-gray-800 whitespace-nowrap">
                    View Works
                </Link>
                <a href="#contact" className="border-2 border-black text-black py-4 px-8 rounded text-lg font-medium transition hover:-translate-y-0.5 hover:bg-black hover:text-white whitespace-nowrap">
                    Contact Me
                </a>
            </div>
        </RevealOnScroll>
    </section>
}