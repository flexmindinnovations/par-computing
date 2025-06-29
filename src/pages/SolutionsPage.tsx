import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RevealOnScroll, StaggerContainer, Parallax, GradientText } from '@/components/animation/ScrollAnimation';
import CallToActionSection from '@/components/CallToActionSection';

// Solutions data
interface Solution {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  features: string[];
}

const solutionsData: Solution[] = [
  {
    id: 'networking',
    title: 'Networking Solutions',
    description: 'Par Computing Solutions Pvt Ltd being a flexible supplier of network infrastructure, take on a procurement, consulting and integration role.',
    fullDescription: `Par Computing Solutions Pvt Ltd being a flexible supplier of network infrastructure, take on a procurement, consulting and integration role. We provide installation and testing services and will ensure that all cabling systems are fully compatible with all other elements of your communication and technology networks.

Our systems provide the high degree of availability and reliability required to run all your business applications. Our teams are fully experienced in implementation of current and emerging technologies. Our specialist networking consultants will provide you with tailored solutions to meet your exact requirements from the most straightforward networking installation to a complex multi-site implementation with WAN connectivity.`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <line x1="3" x2="21" y1="9" y2="9"></line>
        <line x1="9" x2="9" y1="21" y2="9"></line>
      </svg>
    ),
    features: [
      'End-to-end networking solutions',
      'Network design & architecture',
      'Network security implementation',
      'LAN/WAN connectivity',
      'High availability systems',
      'Multi-site implementations'
    ]
  },
  {
    id: 'unified-communication',
    title: 'Unified Communication Solutions',
    description: 'Unified communications can be defined as an evolving technologies that automates and unifies human and device communications.',
    fullDescription: `Unified communications can be defined as an evolving technologies that automates and unifies human and device communications. UC integrates all your communication systems: instant messaging; live chat; video conferencing; desktop sharing; and data sharing into a single platform, making it easier for employees to connect with each other and with your clients.

Par Computing Solutions helps organizations build a unified communication platform that combines their voice, video, and data into a single network to meet the demands of an increasingly dispersed and mobile work environment.`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        <path d="M15 4.5V6"></path>
        <path d="M18.5 3v1.5"></path>
        <path d="M14.5 17v1.5"></path>
        <path d="M18 16.5V18"></path>
      </svg>
    ),
    features: [
      'Voice over IP (VoIP) systems',
      'Video conferencing',
      'Instant messaging integration',
      'Desktop & file sharing',
      'Mobile integration',
      'Cloud-based communication'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'A cloud based solution refers to on-demand services, computer networks, storage, applications, and resources accessed via the internet.',
    fullDescription: `What Is A Cloud Based Solution? A cloud based solution refers to on-demand services, computer networks, storage, applications, and resources accessed via the internet and through another provider's shared cloud computing framework and infrastructure.

The "cloud" concept is much more than just file storage. Cloud-based solutions allow for a flexible work environment and offers huge benefits to businesses. Par Computing Solutions offers tailor-made cloud solutions that perfectly match your business needs. Whether you need cloud-based software, storage, infrastructure, or a complete cloud transformation, our expert team can design, implement, and manage the right solution for you.`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    ),
    features: [
      'Public, private & hybrid cloud',
      'Cloud migration services',
      'SaaS, PaaS & IaaS solutions',
      'Cloud security & compliance',
      'Data backup & disaster recovery',
      'Cloud optimization & management'
    ]
  },
  {
    id: 'security',
    title: 'Internet Security & Hosting',
    description: 'Our IT Security solutions are designed to both protect and enable your business. These on-demand solutions provide comprehensive protection.',
    fullDescription: `Our IT Security solutions are designed to both, protect and enable your business. These on-demand solutions provide comprehensive protection to deployments and extensions of corporate IT infrastructure. We help companies identify their critical assets and formulate security policies that balance the evolving threat landscape.

Our hosting solutions provide reliable, secure, and scalable infrastructure for your websites and applications. We offer a range of hosting options, from shared hosting to dedicated servers, ensuring your online presence is always available and performing optimally.`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    features: [
      'Firewall implementation',
      'Intrusion detection & prevention',
      'Endpoint security',
      'Vulnerability assessment',
      'Website & application hosting',
      'Managed security services'
    ]
  },
  {
    id: 'storage',
    title: 'Storage & Backup Solutions',
    description: 'Our services provide high speed network of shared storage devices that provide consolidated storage and storage services to clients.',
    fullDescription: `Our services provide high speed network of shared storage devices that provide consolidated storage and storage services to clients. We offers comprehensive storage solutions that enable enterprises and mid-sized companies to overcome their storage challenges.

We help organizations implement robust backup and disaster recovery solutions to protect critical business data. Our solutions ensure that your data is securely backed up, easily recoverable, and protected against hardware failures, cyberattacks, and natural disasters.`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 5c0 1.1-2.5 2-5.5 2S10 6.1 10 5s2.5-2 5.5-2 5.5.9 5.5 2z"></path>
        <path d="M10 5v6c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2V5"></path>
        <path d="M10 11v6c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2v-6"></path>
        <path d="M3 17v2c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2v-2"></path>
        <path d="M3 7v10c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2V7"></path>
        <path d="M3 7c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2"></path>
      </svg>
    ),
    features: [
      'SAN/NAS solutions',
      'Data backup & archiving',
      'Disaster recovery planning',
      'Cloud storage integration',
      'Data deduplication',
      'Automated backup systems'
    ]
  }
];

export function SolutionsPage() {
  return (
    <div className="bg-[var(--background)] pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <RevealOnScroll className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <GradientText
              text="Our Solutions"
              className="text-4xl md:text-5xl font-bold mb-6"
              colors={["var(--primary)", "var(--secondary)"]}
              element="h1"
            />
            <p className="text-lg opacity-80 mb-8 text-[var(--muted-foreground)]">
              Comprehensive IT solutions designed to optimize your business operations and drive digital transformation
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Solutions List Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {solutionsData.map((solution, index) => (
              <Parallax key={solution.id} offset={30}>
                <ServiceCard service={solution} index={index} />
              </Parallax>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <RevealOnScroll className="container mx-auto px-6 py-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <GradientText
              text="Benefits of Our Solutions"
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"
              colors={["var(--primary)", "var(--secondary)"]}
              element="h2"
            />
            <p className="opacity-80 text-[var(--muted-foreground)]">
              Our tailored IT solutions provide numerous advantages to help your business thrive in today's digital landscape.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.10}>
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>}
              title="Improved Efficiency"
              description="Our solutions streamline operations and automate processes, reducing manual efforts and increasing productivity."
            />
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>}
              title="Cost Optimization"
              description="Reduce your IT overhead, optimize resource utilization, and achieve more with your existing investments."
            />
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>}
              title="Enhanced Security"
              description="Protect your crucial data and systems with advanced security measures and proactive monitoring."
            />
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path><path d="M22 12h-2"></path><path d="M2 12h2"></path><path d="M12 2v2"></path><path d="M12 20v2"></path></svg>}
              title="Scalability"
              description="Our solutions grow with your business, adapting to your changing needs without extensive redesign."
            />
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>}
              title="Competitive Advantage"
              description="Stay ahead with cutting-edge technology that enables innovation and market differentiation."
            />
            <BenefitCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>}
              title="Seamless Integration"
              description="We ensure all systems work together harmoniously, creating a unified IT environment."
            />
          </StaggerContainer>
        </RevealOnScroll>
      </section>

      {/* CTA Section */}
      <CallToActionSection />
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, index }: { service: Solution; index: number }) {
  return (
    <motion.div
      className="group relative h-full min-h-[380px] p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0">
        <div className="h-full w-full rounded-2xl bg-[var(--card)]"></div>
      </div>
      {/* Card Content */}
      <div className="relative z-10 grid md:grid-cols-3 gap-4 items-center flex-1">
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
            <span className="text-3xl text-white">
              {service.icon}
            </span>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <h3 className="text-2xl font-bold mb-2 text-[var(--card-foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">{service.title}</h3>
          <p className="opacity-80 mb-2 text-[var(--muted-foreground)]">{service.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {service.features.slice(0, 4).map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full flex-shrink-0" />
                <span className="text-sm text-[var(--muted-foreground)]">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto">
            <Link to={`/solutions/${service.id}`}>
              <motion.button
                className="px-6 py-2 rounded-full text-white font-medium flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-lg hover:from-[var(--primary)]/90 hover:to-[var(--secondary)]/90 hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      {/* Hover Background Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
    </motion.div>
  );
}

// Benefit Card Component
function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      className="group theme-card p-6 min-h-[320px] flex flex-col justify-between rounded-xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary)]/30 hover:-translate-y-2"
      whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
        <div className="text-white text-2xl">
          {icon}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold mb-2 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">{title}</h3>
        <p className="opacity-80 text-[var(--muted-foreground)]">{description}</p>
      </div>
    </motion.div>
  );
}

export default SolutionsPage;
