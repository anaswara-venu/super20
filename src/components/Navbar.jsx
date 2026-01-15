import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Results', path: '/results' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 top-[40px] bg-primary shadow-lg py-3">
            <div className="container-custom flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="bg-accent p-1.5 rounded-lg shadow-inner">
                        <span className="text-primary font-black text-xl italic">S20</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl leading-none text-white">
                            SUPER 20
                        </span>
                        <span className="text-[10px] tracking-widest text-accent">
                            PSC COACHING CENTRE
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-accent flex items-center space-x-2 !py-2 !px-4 text-sm whitespace-nowrap">
                        <UserPlus size={16} />
                        <span>Enroll Now</span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary overflow-hidden shadow-xl"
                    >
                        <div className="container-custom py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-medium py-2 border-b border-primary-light ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-3">
                                <Link to="/contact" className="btn-accent text-center flex justify-center items-center space-x-2">
                                    <UserPlus size={20} />
                                    <span>Enroll Now</span>
                                </Link>
                                <a href="tel:+918848148113" className="flex items-center justify-center space-x-2 text-white border border-white/20 py-3 rounded-lg">
                                    <Phone size={18} />
                                    <span>Call Us</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
