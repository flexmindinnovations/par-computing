import { motion } from 'framer-motion';
import { coreValues } from '@/lib/core-values';
import { Star, Clock, Lightbulb, Shield } from 'lucide-react';
import React from 'react';
import CallToActionSection from '@/components/CallToActionSection';
import { Image } from '@/components/ui/Image';
import { aboutSectionData } from '@/lib/home-page-data';

const iconMap: Record<string, React.ReactElement> = {
  star: <Star className="w-8 h-8 text-[var(--primary)]" />,
  clock: <Clock className="w-8 h-8 text-[var(--accent)]" />,
  bulb: <Lightbulb className="w-8 h-8 text-[var(--highlight-color)]" />,
  shield: <Shield className="w-8 h-8 text-[var(--secondary)]" />,
};

export function AboutPage() {
  return (
    <div className="space-y-16 bg-[var(--background)] pt-24">
      {/* Hero Section */}
      <motion.section className="container mx-auto px-4 max-w-4xl text-center py-16">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"
        >
          About PAR Computing Solutions
        </h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl font-body text-[var(--muted-foreground)] leading-relaxed antialiased opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Founded in 2007, PAR Computing Solutions Pvt Ltd has been working with dedicated
          professionals with over 10+ years of experience in IT Infrastructure Management &
          Facility Management. We strive consistently to increase client satisfaction through
          learning and by shaping the right business strategies to deliver optimal opportunities
          in a competitive environment.
        </motion.p>
      </motion.section>

      {/* Company Story Section */}
      <motion.section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-12">
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg relative aspect-video w-full h-full bg-[var(--background)]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={aboutSectionData.imageUrl}
            alt="PAR Computing Solutions - Company Overview"
            className="w-full h-full object-cover"
            rounded
            animation={{
              initial: { opacity: 0, scale: 1.05, x: 40 },
              animate: { opacity: 1, scale: 1, x: 0 },
              transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
        </motion.div>

        <div className="space-y-6">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"
          > Our Mission </h2>
          <motion.p
            className="max-w-2xl text-lg md:text-xl font-body text-[var(--muted-foreground)] leading-relaxed antialiased opacity-80"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            PAR Computing Solutions Pvt Ltd works with you to address your most critical
            business priorities. We provide end-to-end & turnkey infrastructure solutions
            including Networking Solutions, Storage & Backup Solutions, Cloud Solutions,
            Unified Communication Solutions, and Internet Security & Hosting.
          </motion.p>
          <motion.p
            className="max-w-2xl text-lg md:text-xl font-body text-[var(--muted-foreground)] leading-relaxed antialiased opacity-80"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our process-oriented approach has helped us shape successful business
            strategies for numerous clients across various industries. We take pride
            in our ability to understand unique business challenges and provide
            tailored solutions that drive growth and efficiency.
          </motion.p>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section className="py-16 rounded-xl container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value: { title: string; description: string; icon: string }, idx: number) => (
            <motion.div
              key={value.title}
              className="group relative h-full p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0">
                <div className="h-full w-full rounded-2xl bg-[var(--card)]"></div>
              </div>
              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 group-hover:from-[var(--primary)]/20 group-hover:to-[var(--secondary)]/20 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {iconMap[value.icon]}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--card-foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">{value.title}</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed group-hover:text-[var(--card-foreground)] transition-colors duration-300">
                  {value.description}
                </p>
              </div>
              {/* Hover Background Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-12 container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4 text-lg md:text-xl font-body text-[var(--muted-foreground)] opacity-80">
            <li>✔️ Deep industry expertise and proven track record</li>
            <li>✔️ End-to-end IT infrastructure and business solutions</li>
            <li>✔️ Focus on innovation, quality, and client satisfaction</li>
            <li>✔️ Agile, process-driven, and customer-centric approach</li>
            <li>✔️ Trusted by leading organizations across industries</li>
          </ul>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CallToActionSection />
    </div>
  );
}
