import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, GraduationCap, Shield, UserCheck, Zap, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const courseList = [
        {
            title: 'LDC / LGS Regular Batch',
            description: 'Comprehensive coaching for Lower Division Clerk and Last Grade Servant exams. Focus on basics to advanced levels.',
            features: ['Daily Morning/Evening Batches', 'Weekly Mock Tests', 'Updated Study Materials', 'Mental Ability Mastery'],
            icon: BookOpen,
            duration: '6 Months',
            badge: 'Bestseller'
        },
        {
            title: 'Degree Level PSC',
            description: 'Elite coaching for Secretariat Assistant, University Assistant, and other degree level notifications.',
            features: ['Intensive Subject Classes', 'Previous Question Analysis', 'Special Malayalam/English Sessions', 'Current Affairs Hub'],
            icon: GraduationCap,
            duration: '8 Months',
            badge: 'Premium'
        },
        {
            title: 'Secretariat Assistant',
            description: 'Specialized focus on one of Kerala\'s most prestigious administrative exams.',
            features: ['Detailed GS Coverage', 'Analytical Reasoning', 'Daily Practice Papers', 'Exam Strategy Workshops'],
            icon: UserCheck,
            duration: '6 Months',
            badge: 'Focused'
        },
        {
            title: 'Police / Excise / Fireman',
            description: 'Physical oriented theory classes and focused training for uniform post exams.',
            features: ['Fitness Guidance', 'Uniform Post Syllabus Focus', 'Rapid Mock Exams', 'OMR Practice Sessions'],
            icon: Shield,
            duration: '4 Months',
            badge: 'Popular'
        },
        {
            title: 'Crash Courses',
            description: 'Last-minute intensive revision for upcoming exams to boost your ranks.',
            features: ['High-yield Topic Revision', 'Shortcuts & Tricks', 'Marathon Mock Tests', 'Confidence Building'],
            icon: Zap,
            duration: '30-45 Days',
            badge: 'Limited'
        },
        {
            title: 'Technical PSC',
            description: 'Coaching for Overseer, Draughtsman, and other technical level exams.',
            features: ['Technical Subject Expertise', 'Calculation Shortcuts', 'Full Syllabus Coverage', 'Doubt Clearing Units'],
            icon: BookOpen,
            duration: '5 Months',
            badge: 'Expert'
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-[160px] min-h-screen pb-20"
        >
            {/* Header */}
            <section className="bg-primary-dark py-20 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our Course Programs</h1>
                        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            We offer specialized coaching programs tailored to different PSC exam categories, ensuring every aspirant finds the right path to success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="section-padding container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {courseList.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                        >
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <course.icon size={28} />
                                    </div>
                                    <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {course.badge}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{course.title}</h3>
                                <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                                    {course.description}
                                </p>

                                <div className="space-y-3 mb-8 flex-grow">
                                    {course.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mb-8 text-sm font-medium text-gray-500">
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-2 text-primary" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar size={16} className="mr-2 text-primary" />
                                        Flexible Batches
                                    </div>
                                </div>

                                <Link to="/contact" className="w-full py-4 bg-gray-50 hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-100">
                                    Enquire Now <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Enrollment CTA */}
            <section className="container-custom">
                <div className="bg-accent/10 rounded-[2.5rem] border border-accent/20 p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Not sure which course to choose?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Get a free counseling session with our experts. We'll help you identify the best exams suited for your qualification and career goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/contact" className="btn-primary !py-4 !px-10">Talk to Counselor</Link>
                        <a href="tel:+918848148113" className="font-bold text-primary flex items-center gap-2 hover:underline">
                            Call Support <Phone size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Courses;
