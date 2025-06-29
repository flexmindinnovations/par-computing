import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Button } from "@/components/ui/Button";
import { GradientText } from '@/components/animation/ScrollAnimation';

// Sample partner data - you can replace with actual partner logos
const partners = [
  { name: "Microsoft", logo: "microsoft" },
  { name: "AWS", logo: "aws" },
  { name: "Google Cloud", logo: "google-cloud" },
  { name: "IBM", logo: "ibm" },
  { name: "Oracle", logo: "oracle" },
  { name: "Salesforce", logo: "salesforce" },
  { name: "Adobe", logo: "adobe" },
  { name: "Cisco", logo: "cisco" },
  { name: "Intel", logo: "intel" },
  { name: "Dell", logo: "dell" },
  { name: "HP", logo: "hp" },
  { name: "VMware", logo: "vmware" },
  { name: "Red Hat", logo: "redhat" },
  { name: "SAP", logo: "sap" },
  { name: "NVIDIA", logo: "nvidia" },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header">
            Trusted by <GradientText text="Industry Leaders" className="gradient-text" />
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            We partner with world-class technology companies to deliver exceptional solutions
          </p>
        </motion.div>

        {/* Marquee Row */}
        <Marquee gradient={false} speed={40} pauseOnHover className="py-2">
          {partners.map((partner, index) => (
            <div
              key={partner.name + index}
              className="flex-shrink-0 w-32 h-16 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md hover:border-[var(--primary)]/30 transition-all duration-300 mx-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--primary)] mb-1">
                  {partner.name.charAt(0)}
                </div>
                <div className="text-xs text-[var(--muted-foreground)] font-medium">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--muted-foreground)] mb-4">
            Want to become a partner?
          </p>
          <Button variant="primary" size="lg">
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 