import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#f4f6dc] from-80% to-white">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#676c3b] to-[#6a5d3e] bg-clip-text text-transparent"> Hi, I'm Elyse Undan</h1>
            
            <p className="text-[#6a5d3e]/80 text-lg mb-8 max-w-lg mx-auto">
                A passionate developer crafting elegant solutions with code.
            </p>

            <div className ="flex justify-center space-x-4">
                <a href="#projects" className="bg-[#676c3b] text-[#f4f6dc] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(103,108,59,0.4)]">
                    View Projects
                </a>

                <a href="#contact" className="border border-[#676c3b]/50 text-[#676c3b] py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(103,108,59,0.4)] hover:bg-[#676c3b]/10">
                    Contact Me
                </a>
            </div>
            </div>
        </RevealOnScroll>
    </section>

}