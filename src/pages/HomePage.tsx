import HeroSection from '@/components/HeroSection';
import { SolutionCarousel } from '@/components/SolutionCarousel';
import { IndustriesServed } from '@/components/IndustriesServed';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { WorkingProcess } from '@/components/WorkingProcess';
import { PartnersSection } from '@/components/PartnersSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CallToActionSection from '@/components/CallToActionSection';

function HomePage() {
    return (
        <div className="space-y-16 gpu-accelerated">
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Solutions Section */}
            <SolutionCarousel />

            {/* Industries Served */}
            <IndustriesServed />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Working Process */}
            <WorkingProcess />

            {/* Partners Section */}
            <PartnersSection />

            {/* Call to Action */}
            <CallToActionSection />

            <ContactSection />
        </div>
    );
}

export default HomePage;
