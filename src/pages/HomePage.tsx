import HeroSection from "@/components/HeroSection";
import PageMetadata from "@/components/PageMetadata";
import { SolutionCarousel } from "@/components/SolutionCarousel";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const HomePage = () => {
    return (
        <>
            <PageMetadata
                title="Par-Computing - Empowering Your Digital Future"
                faviconHref={emojiFavicon('🏠')}
            />
            <HeroSection />
            <main className="relative z-10 bg-background will-change-transform">
                <SolutionCarousel />
                <AboutSection />
                <IndustriesSection />
                <WhyChooseUsSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <PartnersSection />
                <ContactSection />
            </main>
        </>
    );
};

export default HomePage;
