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
            className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white relative z-10">
            <RevealOnScroll>
                <div className="w-full max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-black text-center" style={{fontFamily: 'Blonden, sans-serif'}}> 
                        Get in Touch</h2>
                </div>
            </RevealOnScroll>
            
            {/* Form with same width as button */}
            <div className="w-full max-w-4xl mx-auto px-4">
                <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name}
                            className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-white placeholder-gray-700" 
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
                            className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-white placeholder-gray-700" 
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
                            className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black focus:bg-white placeholder-gray-700"
                            placeholder="Your Message..."
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                    </div>
                </form>
                
                {/* Button with same container width */}
                <div className="mt-6">
                    <button
                        type="submit"
                        form="contact-form"
                        className="w-full bg-black text-white py-3 px-6 rounded font-medium transition-colors duration-200 hover:bg-gray-800 relative z-20"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </section>
    )
}