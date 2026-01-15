import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Quote } from 'lucide-react';

const Results = () => {
    const toppers = [
        { name: 'Adarsh S.', exam: 'LDC Alappuzha', rank: 'Rank 12', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Meera Nair', exam: 'Secretariat Assistant', rank: 'Rank 45', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Rahul Krishnan', exam: 'Sub Inspector', rank: 'Rank 102', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Sneha P.', exam: 'LDC Alappuzha', rank: 'Rank 89', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Vishnu Dev', exam: 'LGS Alappuzha', rank: 'Rank 24', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Arya S. Kumar', exam: 'University Assistant', rank: 'Rank 156', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    ];

    const testimonials = [
        {
            name: "Sandeep R.",
            quote: "The personalized attention I received at Super 20 was the game-changer. The shortcut methods for Maths are amazing!",
            post: "LDC Rank Holder"
        },
        {
            name: "Anjali Krishna",
            quote: "I was struggling with English and Malayalam grammar. The faculty here simplified everything. Highly recommended.",
            post: "Secretariat Assistant"
        },
        {
            name: "Jithin Thomas",
            quote: "The weekly mock tests exactly mirrored the PSC pattern. It helped me manage my time perfectly in the real exam.",
            post: "Police Constable Rank Holder"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="pt-[160px] min-h-screen"
        >
            {/* Hero Section */}
            <section className="bg-primary py-20 text-white text-center">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Trophy className="mx-auto text-accent mb-6" size={64} />
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our Success Stories</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We take pride in the achievements of our students. Their dedication combined with our guidance has produced consistent results year after year.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Hall of Fame */}
            <section className="section-padding container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Hall of Fame</h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {toppers.map((topper, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 text-center hover:shadow-xl transition-all group"
                        >
                            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 relative">
                                <img src={topper.image} alt={topper.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute top-2 right-2 bg-accent text-primary p-1.5 rounded-lg shadow-lg">
                                    <Star size={16} fill="currentColor" />
                                </div>
                            </div>
                            <h3 className="font-bold text-sm mb-1">{topper.name}</h3>
                            <p className="text-xs text-primary font-bold mb-1">{topper.rank}</p>
                            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{topper.exam}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative"
                            >
                                <Quote className="text-accent/20 absolute top-8 right-8" size={48} />
                                <div className="flex text-accent mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-600 italic mb-8 flex-grow">"{t.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-primary">{t.name}</h4>
                                    <p className="text-sm text-gray-400">{t.post}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Result Counter CTA */}
            <section className="section-padding container-custom">
                <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl text-white mb-8">Ready to be our next Success Story?</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-10">Join the elite group of aspirants who cracked the PSC with strategic preparation at Super 20.</p>
                        <button className="btn-accent !px-12 !py-4 text-lg hover:scale-105 transition-transform">Join Now</button>
                    </div>
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
                </div>
            </section>
        </motion.div>
    );
};

export default Results;
