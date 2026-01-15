const PagePlaceholder = ({ name }) => (
    <div className="pt-32 pb-20 container-custom">
        <div className="reveal animate-fade-in opacity-100 translate-y-0">
            <h1 className="text-4xl md:text-5xl mb-6">{name}</h1>
            <div className="w-20 h-1.5 bg-accent mb-12"></div>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                We are building something amazing for the {name} page. Stay tuned as we update the content to help you in your Kerala PSC preparation journey.
            </p>
            <div className="mt-12 p-8 bg-secondary rounded-2xl border border-gray-200">
                <p className="text-gray-500 italic">Content for {name} is currently being implemented...</p>
            </div>
        </div>
    </div>
);

export const Home = () => <PagePlaceholder name="Home" />;
export const About = () => <PagePlaceholder name="About Us" />;
export const Courses = () => <PagePlaceholder name="Courses" />;
export const Results = () => <PagePlaceholder name="Results & Achievements" />;
export const Faculty = () => <PagePlaceholder name="Our Faculty" />;
export const Gallery = () => <PagePlaceholder name="Gallery" />;
export const Contact = () => <PagePlaceholder name="Contact Us" />;
