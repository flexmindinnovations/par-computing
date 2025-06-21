import HeroSection from '@/components/HeroSection';
import AnimatedPage from '@/components/AnimatedPage';

const services = [
  { title: 'Networking Solutions', desc: 'Flexible and robust network infrastructure, procurement, and configuration.' },
  { title: 'Unified Communication', desc: 'Evolving technologies that automate and unify human and device communication.' },
  { title: 'Cloud Solutions', desc: 'On-demand services, computer networks, storage, and applications.' },
  { title: 'Internet Security & Hosting', desc: 'IT Security solutions designed to both protect and enable your business.' },
  { title: 'Storage & Backup Solutions', desc: 'High-speed network of shared storage devices for consolidated data.' },
];

export default function HomePage() {
  return (
    <AnimatedPage>
        <div className="w-full min-h-screen flex flex-col items-center justify-start bg-transparent">
            <HeroSection />

            <div className="w-full max-w-6xl mt-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Solutions</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-card/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform border border-border"
                    >
                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            {service.title}
                        </h3>
                        <p className="text-muted-foreground text-base">
                            {service.desc}
                        </p>
                    </div>
                ))}
                {/* This is a spacer div to center the last two items on a 3-column grid */}
                {services.length % 3 === 2 && <div className="hidden lg:block"></div>}
            </div>
        </div>
    </AnimatedPage>
  );
}