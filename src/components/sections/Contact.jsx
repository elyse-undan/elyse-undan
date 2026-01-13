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
            className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10"
            style={{backgroundColor: '#F9F1E6'}}>
            <RevealOnScroll>
                <div className="w-full max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{fontFamily: 'Kabel, sans-serif', color: 'var(--text-hero)'}}> 
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 transition focus:outline-none focus:border-black focus:bg-gray-50 placeholder-gray-500 text-black"
                            style={{fontFamily: 'Kabel, sans-serif', backgroundColor: 'white'}} 
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
                            className="w-full border border-gray-400 rounded-lg px-4 py-3 transition focus:outline-none focus:border-black focus:bg-white placeholder-gray-600 text-black"
                            style={{fontFamily: 'Kabel, sans-serif', backgroundColor: '#F9F1E6'}} 
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
                            className="w-full border border-gray-400 rounded-lg px-4 py-3 transition focus:outline-none focus:border-black focus:bg-white placeholder-gray-600 text-black resize-none"
                            style={{fontFamily: 'Kabel, sans-serif', backgroundColor: '#F9F1E6'}}
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
                        className="w-full font-medium py-3 px-6 rounded-lg transition-all duration-200 bg-black hover:bg-gray-800 relative z-20"
                        style={{
                            fontFamily: 'Kabel, sans-serif',
                            color: '#F9F1E6'
                        }}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </section>
    )
}