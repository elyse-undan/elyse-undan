import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
            setFormData({name: "", email: "", message: ""});
        }, (error) => {
            console.log(error.text);
            alert("An error occurred, please try again.");
        })
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white">
        <RevealOnScroll>
            <div className="w-full max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#676c3b] to-[#6a5d3e] bg-clip-text text-transparent text-center"> 
                    Get in Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name}
                            className="w-full bg-[#d0be8f]/20 border border-[#d0be8f]/30 rounded px-4 py-3 text-[#6a5d3e] transition focus:outline-none focus:border-[#676c3b] focus:bg-[#676c3b]/10" 
                            placeholder="Name.." 
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>

                    <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={formData.email}
                            className="w-full bg-[#d0be8f]/20 border border-[#d0be8f]/30 rounded px-4 py-3 text-[#6a5d3e] transition focus:outline-none focus:border-[#676c3b] focus:bg-[#676c3b]/10" 
                            placeholder="Email.." 
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>

                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            value={formData.message}
                            className="w-full bg-[#d0be8f]/20 border border-[#d0be8f]/30 rounded px-4 py-3 text-[#6a5d3e] transition focus:outline-none focus:border-[#676c3b] focus:bg-[#676c3b]/10"
                            placeholder="Your Message..."
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#676c3b] text-[#f4f6dc] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(103,108,59,0.4)]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </RevealOnScroll>
        </section>
    )
}