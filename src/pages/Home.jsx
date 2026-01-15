import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Trophy, BookOpen, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Home = () => {
    const stats = [
        { label: 'Students Trained', value: 5000, suffix: '+' },
        { label: 'Success Stories', value: 1200, suffix: '+' },
        { label: 'Expert Faculty', value: 20, suffix: '+' },
        { label: 'Years Excellence', value: 8, suffix: '+' },
    ];

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            title: "Your Gateway to Kerala PSC Success",
            subtitle: "Join the most trusted coaching centre in Cherthala with a track record of top ranks."
        },
        {
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            title: "Expert Faculty, Proven Results",
            subtitle: "Learn from the best educators specialized in LDC, Degree Level, and Secretariat Assistant coaching."
        },
        {
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            title: "Smart Learning for Modern Aspirants",
            subtitle: "Flexible offline and online batches designed to fit your schedule and maximize your potential."
        }
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const highlights = [
        { title: 'Experienced Faculty', description: 'Learn from the best in the industry with years of PSC coaching experience.', icon: Users },
        { title: 'High Success Rate', description: 'Our proven methodology ensures a higher probability of clearing exams.', icon: Trophy },
        { title: 'Offline & Online Batches', description: 'Flexible learning options to suit your schedule and preference.', icon: BookOpen },
        { title: 'Comprehensive Study Material', description: 'Updated and exam-oriented notes and practice questions.', icon: Star },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full"
        >
            {/* Hero Section */}
            <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90 z-10"></div>
                            <motion.img
                                initial={{ scale: 1.25 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 6, ease: "linear" }}
                                src={slides[currentSlide].image}
                                alt="Super 20 PSC Coaching"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="container-custom relative z-20 text-white pt-[140px] md:pt-[180px] pb-24 md:pb-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${currentSlide}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/40 tracking-wider uppercase backdrop-blur-md">
                                    Super 20 PSC Coaching Centre
                                </span>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] text-white">
                                    {slides[currentSlide].title.split('Kerala PSC').length > 1 ? (
                                        slides[currentSlide].title.split('Kerala PSC').map((text, i, arr) => (
                                            <React.Fragment key={i}>
                                                {text}
                                                {i !== arr.length - 1 && <span className="text-accent italic font-serif">Kerala PSC</span>}
                                            </React.Fragment>
                                        ))
                                    ) : (
                                        slides[currentSlide].title
                                    )}
                                </h1>
                                <p className="text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed opacity-95 font-medium max-w-3xl mx-auto drop-shadow-lg">
                                    {slides[currentSlide].subtitle}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                    <Link to="/contact" className="btn-accent !px-12 !py-4 flex items-center gap-3 group w-full sm:w-auto justify-center text-lg shadow-2xl hover:scale-105 transition-transform">
                                        Enroll Now <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <div className="flex flex-wrap justify-center gap-3 w-full sm:w-auto">
                                        <Link to="/courses" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition-all backdrop-blur-md flex items-center gap-2">
                                            Our Courses
                                        </Link>
                                        <Link to="/faculty" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition-all backdrop-blur-md flex items-center gap-2">
                                            Expert Faculty
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-12 flex space-x-3 z-30">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-accent shadow-[0_0_15px_#FFD700]' : 'bg-white/30 hover:bg-white/50'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-12 shadow-xl relative mt-16 sm:mt-24 mx-4 lg:mx-auto max-w-6xl rounded-[2rem] border border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx}>
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                <CountUp end={stat.value} duration={3} enableScrollSpy />{stat.suffix}
                            </div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section-padding bg-secondary relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl mb-4">Why Choose Super 20?</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            We focus on individual attention and strategic preparation to help you clear the most competitive exams in Kerala.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Tips Banner */}
            <section className="bg-primary py-16 relative overflow-hidden">
                <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                    <div className="text-white text-center lg:text-left">
                        <h2 className="text-2xl md:text-4xl text-white mb-3 italic">Daily PSC Tips & Updates</h2>
                        <p className="text-gray-400 text-lg">Stay updated with the latest notifications and study tips daily.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            className="bg-primary-light border border-white/10 px-6 py-4 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent w-full"
                        />
                        <button className="btn-accent !px-8 flex items-center justify-center gap-2 whitespace-nowrap">
                            Subscribe Now <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </section>

            {/* CTA Section */}
            <section className="section-padding container-custom">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[3rem] overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="p-12 md:p-24 text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl text-white mb-8 font-bold leading-tight">Start Your Journey Towards a <br className="hidden md:block" /> Secure Career Today!</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
                            Admissions are open for new batches. Grab your seat and start preparing with the expert educators at Super 20, Cherthala.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/contact" className="btn-accent !px-12 !py-5 shadow-2xl text-lg hover:scale-105 transition-transform">
                                Online Registration
                            </Link>
                            <Link to="/courses" className="px-12 py-5 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all font-bold text-lg">
                                View All Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
