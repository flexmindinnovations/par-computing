import { RevealOnScroll } from '@/components/animation/ScrollAnimation';
import CallToActionSection from '@/components/CallToActionSection';
import { industriesServed } from '@/lib/home-page-data';
import { Building, GraduationCap, Heart, Plane, Monitor, Factory } from 'lucide-react';

const iconMap = {
  Building,
  GraduationCap,
  Heart,
  Plane,
  Monitor,
  Factory
};

// Compose industries data with benefits for this page
const industriesWithBenefits = [
  {
    ...industriesServed[0],
    benefits: [
      "Secure financial data management solutions",
      "Regulatory compliance assistance",
      "Fraud detection and prevention systems",
      "High-availability infrastructure for 24/7 operations",
      "Scalable cloud solutions for growing financial institutions"
    ]
  },
  {
    ...industriesServed[1],
    benefits: [
      "Digital classroom solutions",
      "Campus-wide networking infrastructure",
      "Student information management systems",
      "E-learning platform integrations",
      "Data security and privacy compliance"
    ]
  },
  {
    ...industriesServed[2],
    benefits: [
      "Electronic health record (EHR) systems",
      "Telemedicine infrastructure solutions",
      "Medical data storage and backup systems",
      "Healthcare compliance and security protocols",
      "Hospital management system integrations"
    ]
  },
  {
    ...industriesServed[3],
    benefits: [
      "Guest management systems",
      "Hotel and resort networking solutions",
      "Booking and reservation platform integrations",
      "Customer relationship management solutions",
      "Secure payment processing systems"
    ]
  },
  {
    ...industriesServed[4],
    benefits: [
      "High-performance computing solutions",
      "Scalable cloud infrastructure",
      "Secure VPN and remote working solutions",
      "Data center design and management",
      "Disaster recovery and business continuity planning"
    ]
  },
  {
    ...industriesServed[5],
    benefits: [
      "Industrial IoT solutions",
      "Supply chain management systems",
      "Enterprise resource planning (ERP) integration",
      "Production floor automation networks",
      "Industrial data security solutions"
    ]
  }
];

export function IndustriesPage() {
  return (
    <div className="bg-[var(--background)] pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center py-16 flex flex-col items-center justify-center">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industries{' '}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              We Serve
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-body text-[var(--muted-foreground)] leading-relaxed antialiased opacity-80">
            PAR Computing Solutions creates tailored technology solutions for organizations across diverse industries. Our expertise spans multiple sectors, allowing us to address unique challenges with specialized approaches.
          </p>
        </RevealOnScroll>
      </section>

      {/* Industries Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWithBenefits.map((industry) => {
              const IconComponent = iconMap[industry.icon as keyof typeof iconMap];
              return (
                <RevealOnScroll key={industry.title}>
                  <div className="group relative bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-[var(--primary)]/30 flex flex-col justify-between min-h-[340px]">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                          {industry.title}
                        </h3>
                        <p className="text-[var(--muted-foreground)] leading-relaxed font-body antialiased">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                    {/* Benefits/solutions list, visible on hover */}
                    {industry.benefits && (
                      <ul className="mt-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--muted-foreground)] text-sm pl-2 list-disc">
                        {industry.benefits.map((benefit: string, i: number) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToActionSection />
    </div>
  );
}

export default IndustriesPage;
