import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const contactDetails = [
	{ icon: MapPin, title: 'Our Address', value: 'SR.No 317, Near Orchids North Main Road, Lane E, Shefali Apartment, Office 01, Koregaon Park, Pune - 411001' },
	{ icon: Phone, title: 'Talk To Expert', value: 'Rizvi : (+91) 9822554090' },
	{ icon: Mail, title: 'Email Us', value: 'razvi@parcomputing.com' },
];

export default function ContactUsPage() {
	return (
		<AnimatedPage>
			<PageMetadata title="Contact | PAR Computing" faviconHref={emojiFavicon('✉️')} />
			<PageHero
				title="Contact Us"
				subtitle="We're here to help and answer any question you might have."
				imageUrl="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=1974&auto=format&fit=crop"
			/>
			<div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
				<div className="bg-transparent text-foreground">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
								<div className="p-8 bg-card/60 backdrop-blur-md rounded-2xl shadow-lg border border-border/60 hover:border-primary/80 transition-all duration-300 group">
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
			</div>
		</AnimatedPage>
	);
}