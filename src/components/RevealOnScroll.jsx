import { useRef, useEffect } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, {threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    });

    return (
        <div ref={ref} className="reveal"> 
            {children} 
        </div>
    )
}