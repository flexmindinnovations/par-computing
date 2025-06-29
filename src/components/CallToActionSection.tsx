import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlurInOnScroll } from '@/components/animation/ScrollAnimation';
import { Button } from "@/components/ui/Button";

const CallToActionSection = () => (
  <section className="py-24 bg-[var(--background)] relative overflow-hidden">
    <BlurInOnScroll className="relative container mx-auto px-6 text-center max-w-4xl" once={false}>
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-8 text-[var(--foreground)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Ready to <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Transform</span> Your Business?
      </motion.h2>
      <motion.p 
        className="text-xl md:text-2xl mb-12 text-[var(--muted-foreground)] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Let's <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent font-semibold">collaborate</span> to achieve your technology goals and drive <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent font-semibold">innovation</span> in your organization.
      </motion.p>
      <Link to="/contact">
        <Button variant="primary" size="lg">
          Get Started Today
        </Button>
      </Link>
    </BlurInOnScroll>
  </section>
);

export default CallToActionSection; 