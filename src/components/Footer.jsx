import { useState, useEffect } from 'react';

export const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { 
            timeZone: 'America/New_York',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };
    return (
        <footer className="bg-black text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* Left Section - CTA and Email */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{fontFamily: 'Blonden, sans-serif'}}>
                            Contact Me!
                        </h2>
                        
                        <div className="mb-8">
                            <a 
                                href="mailto:elysedelrosario@gmail.com" 
                                className="inline-block px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                elysedelrosario@gmail.com
                            </a>
                        </div>
                        
                        <div className="text-gray-300 leading-relaxed max-w-md">
                            <p>
                                Software Engineer | UI/UX Designer | Artist 
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Section - Contact Button */}
                    <div className="flex justify-start lg:justify-end">
                        <button 
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    const rect = contactSection.getBoundingClientRect();
                                    // Only scroll if contact section is not already in view
                                    if (rect.top < -100) {
                                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }
                            }}
                            className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
                
                {/* Bottom Section - Details and Socials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
                    
                    {/* Version */}
                    <div>
                        <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Version</h4>
                        <p className="text-white">2025 © Elyse Undan</p>
                    </div>
                    
                    {/* Timezone */}
                    <div>
                        <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Timezone</h4>
                        <p className="text-white">
                            {formatTime(currentTime)} EST (GMT-5)
                        </p>
                    </div>
                    
                    {/* Socials */}
                    <div>
                        <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Socials</h4>
                        <div className="flex space-x-4">
                            <a 
                                href="https://github.com/elyse-undan" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Github
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/elyse-undan-8698702a3/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};