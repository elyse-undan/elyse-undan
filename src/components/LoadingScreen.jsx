import { useState, useEffect } from "react"; 
export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "hello, vast world";

    useEffect(() => {
        console.log("LoadingScreen mounted");
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                console.log("LoadingScreen completing");
                setTimeout(() => {
                    if (onComplete) {
                        onComplete();
                    }
                }, 1000);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]);
    
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-4xl font-bold" style={{backgroundColor: '#F9F1E6', color: 'var(--text-hero)'}}>
            <div>
                {text}|
            </div>
            <div className="mt-4 text-lg">Loading...</div>
        </div>
    );
};