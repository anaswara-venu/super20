import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera, Image as ImageIcon, Video } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Interactive Classroom Session', category: 'Classroom' },
        { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Group Study Discussion', category: 'Activities' },
        { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Recent Award Ceremony', category: 'Events' },
        { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Tech-enabled Learning', category: 'Classroom' },
        { url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Rank Holder Felicitation', category: 'Events' },
        { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Study Library', category: 'Facilities' },
        { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Online Batch Recording', category: 'Facilities' },
        { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Weekend Workshop', category: 'Activities' },
    ];

    const categories = ['All', 'Classroom', 'Events', 'Activities', 'Facilities'];
    const [filter, setFilter] = useState('All');

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-[160px] min-h-screen pb-20"
        >
            {/* Header */}
            <section className="bg-secondary py-20">
                <div className="container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-accent">Gallery</span></h1>
                        <p className="text-gray-500 max-w-2xl mx-auto italic">
                            A glimpse into the life at Super 20, from energetic classrooms to celebrated success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter */}
            <div className="container-custom py-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${filter === cat ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <section className="container-custom py-8">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence>
                        {filteredImages.map((img, idx) => (
                            <motion.div
                                layout
                                key={img.url}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative aspect-square group cursor-pointer overflow-hidden rounded-3xl"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                    <ZoomIn className="text-accent mb-4" size={32} />
                                    <h3 className="text-white font-bold text-sm mb-1">{img.title}</h3>
                                    <span className="text-accent text-[10px] uppercase font-bold tracking-widest">{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="fixed top-8 right-8 text-white hover:text-accent transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-5xl w-full max-h-[80vh] relative flex flex-col items-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <img src={selectedImage.url} alt={selectedImage.title} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
                            <div className="mt-8 text-center">
                                <h3 className="text-white text-xl font-bold mb-1">{selectedImage.title}</h3>
                                <p className="text-accent uppercase text-xs tracking-widest">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quick Stats Section */}
            <section className="section-padding container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary shrink-0 transition-transform hover:rotate-6">
                            <Camera size={32} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Smart Classrooms</h4>
                            <p className="text-sm text-gray-400">Air-conditioned and AV equipped halls.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary shrink-0 transition-transform hover:rotate-6">
                            <Video size={32} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Digital Content</h4>
                            <p className="text-sm text-gray-400">High-quality recorded video sessions.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary shrink-0 transition-transform hover:rotate-6">
                            <ImageIcon size={32} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Modern Library</h4>
                            <p className="text-sm text-gray-400">Huge collection of reference books.</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Gallery;
