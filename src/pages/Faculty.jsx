import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Mail, Linkedin, Play } from 'lucide-react';

const Faculty = () => {
    const team = [
        {
            name: 'Mr. Santhosh Kumar',
            role: 'Director & Lead Faculty',
            qualification: 'MA, B.Ed (PSC Expert)',
            experience: '12+ Years',
            specialty: 'Malayalam, Geography, Current Affairs',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Mrs. Deepa Raj',
            role: 'Senior Faculty',
            qualification: 'M.Sc, SET',
            experience: '8 Years',
            specialty: 'Mathematics & Mental Ability',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Mr. Arun K. P.',
            role: 'Senior Faculty',
            qualification: 'MA History, NET',
            experience: '10 Years',
            specialty: 'Indian History & Constitution',
            image: 'https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Ms. Lekshmi Nair',
            role: 'Visiting Faculty',
            qualification: 'MA English',
            experience: '6 Years',
            specialty: 'English Grammar & Vocabulary',
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Mr. Rajesh V.',
            role: 'Science Expert',
            qualification: 'M.Sc (Physics)',
            experience: '15 Years',
            specialty: 'General Science & IT',
            image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Mr. Sivaprasad',
            role: 'Static GK Specialist',
            qualification: 'MA Sociology',
            experience: '7 Years',
            specialty: 'Static GK & Kerala Facts',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-[160px] min-h-screen"
        >
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 text-white"
                    >
                        Meet Our <span className="text-accent">Expert Faculty</span>
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Our team consists of experienced educators and PSC rank holders who are committed to guiding you through every step of your preparation.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle,_#FFD700_1px,_transparent_1px)] bg-[size:30px_30px]"></div>
                </div>
            </section>

            {/* Faculty Grid */}
            <section className="section-padding container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((teacher, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative mb-8 pt-12">
                                {/* Background Card */}
                                <div className="bg-white rounded-[2rem] shadow-xl p-8 pt-20 border border-gray-100 transition-all duration-300 group-hover:border-accent group-hover:shadow-2xl">
                                    {/* Image Avatar */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-200">
                                        <img
                                            src={teacher.image}
                                            alt={teacher.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-primary mb-1">{teacher.name}</h3>
                                        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{teacher.role}</p>

                                        <div className="w-12 h-1 bg-gray-100 mx-auto mb-6 group-hover:w-24 group-hover:bg-accent transition-all duration-500"></div>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-center text-sm text-gray-600 justify-center gap-2">
                                                <GraduationCap size={18} className="text-primary-light" />
                                                <span>{teacher.qualification}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600 justify-center gap-2">
                                                <Briefcase size={18} className="text-primary-light" />
                                                <span>{teacher.experience} of Teaching</span>
                                            </div>
                                            <div className="inline-block px-4 py-2 bg-secondary rounded-xl text-primary font-medium text-sm">
                                                Specialty: {teacher.specialty}
                                            </div>
                                        </div>

                                        <div className="flex justify-center gap-4">
                                            <button className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                                                <Linkedin size={18} />
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                                                <Mail size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Expertise Section */}
            <section className="section-padding bg-primary text-white">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl text-white mb-6">Learn from those who have cleared the path.</h2>
                        <div className="w-20 h-1.5 bg-accent mb-8"></div>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Our faculty members are not just teachers; they are mentors who have personally experienced the rigors of PSC preparation. They bring industry secrets, rank-making shortcuts, and motivational support to the classroom.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <Award className="text-accent" />
                                <span className="font-semibold">Rank Holder Mentors</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="text-accent" />
                                <span className="font-semibold">Daily Doubt Solving</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="text-accent" />
                                <span className="font-semibold">Personalized Tracking</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="text-accent" />
                                <span className="font-semibold">Focused Group Study</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center group cursor-pointer">
                            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform">
                                <Play fill="currentColor" size={32} />
                            </div>
                            <p className="absolute bottom-6 font-bold tracking-widest uppercase text-xs opacity-50">Watch Faculty Intro</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Faculty;
