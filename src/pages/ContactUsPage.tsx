import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedPage from '@/components/AnimatedPage';

const contactDetails = [
  { icon: MapPin, title: 'Our Address', value: 'SR.No 317, Near Orchids North Main Road, Lane E, Shefali Apartment, Office 01, Koregaon Park, Pune - 411001' },
  { icon: Phone, title: 'Talk To Expert', value: 'Rizvi : (+91) 9822554090' },
  { icon: Mail, title: 'Email Us', value: 'razvi@parcomputing.com' },
];

export default function ContactUsPage() {
  return (
    <AnimatedPage>
      <div className="bg-transparent text-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">We're here to help and answer any question you might have.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <detail.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">{detail.title}</h3>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="p-8 bg-card/60 backdrop-blur-md rounded-2xl shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
} 