import { useState, useEffect } from "react"; 
export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

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
        <div className="fixed inset-0 z-50 bg-[#f4f6dc] text-[#6a5d3e] flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}<span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-2 bg-[#b8be86] rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-[#676c3b] shadow-[0_0_15px_#676c3b] animate-loading">
                </div>
            </div>
        </div>
    );
};