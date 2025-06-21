import HeroSection from '@/components/HeroSection';

const services = [
  { title: 'Networking', desc: 'Robust, scalable network solutions for your business.' },
  { title: 'Cloud Solutions', desc: 'Secure, flexible cloud infrastructure and migration.' },
  { title: 'Security', desc: 'Comprehensive IT security and compliance.' },
];

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-background">
      {/* Carousel */}
      <HeroSection />
      {/* Quick Service Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-background/80 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border border-border"
          >
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-center text-base">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}