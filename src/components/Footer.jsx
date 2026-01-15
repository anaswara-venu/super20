import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-accent p-1.5 rounded-md">
                            <span className="text-primary font-black text-xl italic">S20</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl leading-none text-white">SUPER 20</span>
                            <span className="text-[10px] tracking-widest text-accent">PSC COACHING CENTRE</span>
                        </div>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Leading Kerala PSC coaching institute in Cherthala, dedicated to helping students achieve their government career goals with expert faculty and proven methods.
                    </p>
                    <div className="flex space-x-4">
                        {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                            <a key={idx} href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3 text-gray-300">Quick Links</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        {['Home', 'About Us', 'Courses', 'Results', 'Faculty', 'Gallery', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`} className="hover:text-accent transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3 text-gray-300">Popular Courses</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        {['LDC Coaching', 'Degree Level PSC', 'Secretariat Assistant', 'Police / Excise', 'Technical PSC'].map((course) => (
                            <li key={course} className="hover:text-accent transition-colors cursor-pointer">
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3 text-gray-300">Contact Us</h3>
                    <ul className="space-y-5 text-gray-400 text-sm">
                        <li className="flex items-start space-x-3">
                            <MapPin className="text-accent shrink-0" size={20} />
                            <span>Opp. Private Bus Stand, Cherthala, Alappuzha, Kerala</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone className="text-accent shrink-0" size={20} />
                            <span>+91 8848 148 113</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail className="text-accent shrink-0" size={20} />
                            <span>info@super20psc.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-white/10 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Super 20 PSC Coaching Centre. All rights reserved. Designed with ❤️ for aspirants.</p>
            </div>
        </footer>
    );
};

export default Footer;
