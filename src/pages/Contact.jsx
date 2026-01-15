import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-[160px] min-h-screen pb-20"
        >
            {/* Header */}
            <section className="bg-primary py-20 text-white overflow-hidden relative">
                <div className="container-custom relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 text-white"
                    >
                        Get In <span className="text-accent">Touch</span>
                    </motion.h1>
                    <p className="text-gray-400 max-w-xl text-lg">
                        Have questions about our courses or the admission process? We're here to help you every step of the way.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </section>

            <section className="section-padding container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 italic">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                                    <p className="text-gray-500 leading-relaxed">
                                        Opp. Private Bus Stand, Cherthala, <br />
                                        Alappuzha Dist., Kerala - 688524
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Phone Numbers</h4>
                                    <p className="text-gray-500 leading-relaxed">+91 88481 48113</p>
                                    <p className="text-gray-500 leading-relaxed">+91 94474 53448</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email Id</h4>
                                    <p className="text-gray-500 leading-relaxed">super20psc@gmail.com</p>
                                    <p className="text-gray-500 leading-relaxed">info@super20psc.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                                    <p className="text-gray-500 leading-relaxed">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-500 leading-relaxed">Sunday: Special Batches Only</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-gray-100">
                            <h4 className="font-bold mb-6">Connect with us:</h4>
                            <div className="flex gap-4">
                                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                                    <button key={i} className="w-12 h-12 rounded-xl bg-gray-50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                        <Icon size={22} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100">
                        <h3 className="text-2xl font-bold mb-8">Quick Inquiry Form</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all" placeholder="+91" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Interested Course</label>
                                <select className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all appearance-none">
                                    <option>Select a course</option>
                                    <option>LDC / LGS Regular Batch</option>
                                    <option>Degree Level PSC</option>
                                    <option>Secretariat Assistant</option>
                                    <option>Police / Excise / Fireman</option>
                                    <option>Crash Course</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                                <textarea rows="4" className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full btn-primary !py-5 flex items-center justify-center gap-2 group">
                                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <a
                                href="https://wa.me/918848148113"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full border-2 border-[#25D366] text-[#25D366] font-bold py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                            >
                                <MessageCircle size={22} /> Quick Chat on WhatsApp
                            </a>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Integration */}
            <section className="container-custom section-padding pt-0">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] border-8 border-white bg-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.123!2d76.3312!3d9.6912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08709367!2sCherthala%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Location Map"
                    ></iframe>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
