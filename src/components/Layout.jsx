import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useState, useEffect } from 'react';

export const Layout = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isOverParagraph, setIsOverParagraph] = useState(false);
    const [isOverTitle, setIsOverTitle] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            
            // Check if hovering over text elements
            const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
            
            const isParagraph = elementUnderMouse && elementUnderMouse.tagName === 'P';
            setIsOverParagraph(isParagraph);
            
            const isTitleText = elementUnderMouse && (
                elementUnderMouse.tagName === 'H1' || 
                elementUnderMouse.tagName === 'H2' || 
                elementUnderMouse.tagName === 'H3' ||
                elementUnderMouse.tagName === 'A' ||
                elementUnderMouse.tagName === 'SPAN' ||
                (elementUnderMouse.tagName === 'DIV' && elementUnderMouse.textContent && elementUnderMouse.textContent.trim() !== '')
            );
            setIsOverTitle(isTitleText);
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen" style={{background: 'linear-gradient(180deg, var(--bg-coral) 0%, var(--bg-pink) 35%, var(--bg-mint) 100%)', color: 'var(--text-body)'}}>
            {/* Custom cursor */}
            <div 
                className="fixed pointer-events-none rounded-full"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#B3E5FC',
                    transform: 'translate(-50%, -50%)',
                    opacity: 1,
                    zIndex: isOverParagraph ? 10 : 50,
                    transition: 'all 0.1s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    mixBlendMode: isOverTitle ? 'difference' : 'normal'
                }}
            />
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};