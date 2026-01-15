import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Clock, Heart } from 'lucide-react';

const About = () => {
    const values = [
        { title: 'Goal Oriented', icon: Target, desc: 'Every lesson is designed with the exam pattern in mind.' },
        { title: 'Student First', icon: Heart, desc: 'We prioritize individual student needs and doubts.' },
        { title: 'Excellence', icon: Award, desc: 'Aiming for the top ranks in every PSC notification.' },
        { title: 'Consistency', icon: Clock, desc: 'Regular classes and tests to keep spirits high.' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-[160px] min-h-screen"
        >
            {/* Page Header */}
            <section className="bg-primary py-20 text-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 text-white"
                    >
                        About <span className="text-accent">Super 20</span>
                    </motion.h1>
                    <p className="text-gray-300 max-w-xl text-lg">
                        Empowering aspirants in Cherthala to achieve their dreams of a government career.
                    </p>
                </div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/10 -skew-x-12 transform translate-x-1/2"></div>
            </section>

            {/* History & Story */}
            <section className="section-padding container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Classroom"
                                className="rounded-3xl shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-3xl -z-0"></div>
                            <div className="absolute top-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
                                <p className="text-primary font-bold text-3xl">8+</p>
                                <p className="text-gray-500 text-sm">Years of Legacy</p>
                            </div>
                        </div>
                    </motion.div>

                    <div>
                        <h2 className="text-3xl md:text-4xl mb-6">Our Journey & History</h2>
                        <div className="w-20 h-1.5 bg-accent mb-8"></div>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Super 20 PSC Coaching Centre was founded with a single mission: to provide quality, accessible coaching to PSC aspirants in and around Cherthala. What started as a small initiative with 20 motivated students has now grown into a premier destination for competitive exam preparation.
                            </p>
                            <p>
                                The name "Super 20" represents our commitment to small, focused batch sizes and intensive coaching that ensures no student is left behind. Over the years, we have helped hundreds of students secure jobs in various government departments, including LDC, Secretariat, and Police.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-8">
                                <Target size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To simplify the complex PSC exam roadmap and provide students with the right resources, shortcuts, and psychological support to succeed in their first attempt.
                            </p>
                        </div>

                        <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-8">
                                <Eye size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To be the most trusted and result-oriented coaching academy in Kerala, known for building not just careers, but confidence and character in every aspirant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Message */}
            <section className="section-padding container-custom">
                <div className="bg-primary rounded-[3rem] overflow-hidden p-8 md:p-16 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
                        <div className="lg:col-span-1">
                            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden border-4 border-accent/20">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Director"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-2 text-white">
                            <h2 className="text-3xl md:text-4xl mb-4 text-white">Director's Message</h2>
                            <div className="w-16 h-1 bg-accent mb-8"></div>
                            <div className="italic text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                                "Success in competitive exams is 30% knowledge and 70% strategy and discipline. At Super 20, we don't just teach subjects; we train minds. Our approach is personalized, ensuring that every student finds their unique path to a government job. We believe that with the right guidance, anyone can crack the Kerala PSC."
                            </div>
                            <div>
                                <p className="font-bold text-xl text-accent">Mr. Santhosh Kumar</p>
                                <p className="text-gray-400">Director & Lead Faculty</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <div className="text-[12rem] font-serif font-black leading-none">"</div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <v.icon className="text-accent mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                                <p className="text-gray-500 text-sm">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
