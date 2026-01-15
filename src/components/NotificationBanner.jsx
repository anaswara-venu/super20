import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const NotificationBanner = () => {
    return (
        <div className="fixed top-0 w-full z-[60] bg-gradient-to-r from-accent via-[#FFE066] to-accent text-primary px-4 py-2 shadow-md">
            <div className="container-custom flex items-center justify-center space-x-4">
                <Bell size={18} className="shrink-0 animate-bounce" />
                <p className="text-sm md:text-base font-black tracking-tight flex items-center gap-2">
                    <span className="hidden sm:inline">📢</span> New Batch Starting Soon | Limited Seats | Call Now: 8848148113
                </p>
                <a
                    href="tel:+918848148113"
                    className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase hover:scale-105 transition-transform"
                >
                    Contact
                </a>
            </div>

            {/* Subtle moving light effect */}
            <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
            />
        </div>
    );
};

export default NotificationBanner;
