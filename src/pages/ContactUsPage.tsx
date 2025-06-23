import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const contactDetails = [
	{ 
		icon: MapPin, 
		title: 'Our Address', 
		value: 'SR.No 317, Near Orchids North Main Road, Lane E, Shefali Apartment, Office 01, Koregaon Park, Pune - 411001',
		subtext: 'Visit us during business hours'
	},
	{ 
		icon: Phone, 
		title: 'Talk To Expert', 
		value: 'Rizvi : (+91) 9822554090',
		subtext: 'Available Mon-Fri, 9AM-6PM'
	},
	{ 
		icon: Mail, 
		title: 'Email Us', 
		value: 'razvi@parcomputing.com',
		subtext: 'We reply within 24 hours'
	},
];

const quickInfo = [
	{ icon: Clock, title: 'Business Hours', value: 'Mon-Fri: 9:00 AM - 6:00 PM' },
	{ icon: MessageCircle, title: 'Response Time', value: 'Within 24 hours' },
];

export default function ContactUsPage() {
	const contactRef = useRef(null);
	const formRef = useRef(null);
	const isContactInView = useInView(contactRef, { once: false, margin: "-100px" });
	const isFormInView = useInView(formRef, { once: false, margin: "-100px" });

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { 
			opacity: 0, 
			y: 30,
			scale: 0.95,
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: {
				type: "spring" as const,
				stiffness: 100,
				damping: 15,
			},
		},
	};

	return (
		<AnimatedPage>
			<PageMetadata title="Contact | PAR Computing" faviconHref={emojiFavicon('✉️')} />
			<PageHero
				title="Contact Us"
				subtitle="We're here to help and answer any question you might have. Let's discuss your IT infrastructure needs."
				imageUrl="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=1974&auto=format&fit=crop"
			/>
			
			{/* Contact Information Section */}
			<section ref={contactRef} className="relative w-full py-20 sm:py-32 overflow-hidden">
				{/* Background with floating decorations */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-[var(--gradient-background)]" />
					<div className="absolute inset-0">
						{[...Array(20)].map((_, i) => (
							<div
								key={i}
								className="absolute w-2 h-2 bg-teal-400/20 rounded-full animate-pulse"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 2}s`,
									animationDuration: `${2 + Math.random() * 2}s`,
								}}
							/>
						))}
					</div>
				</div>

				<div className="container mx-auto px-4 md:px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
							Get in{" "}
							<span className="gradient-text">Touch</span>
						</h2>
						<p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
							Ready to transform your IT infrastructure? We're here to help you every step of the way.
						</p>
					</motion.div>

					{/* Contact Details Grid */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isContactInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
					>
						{contactDetails.map((detail) => (
							<motion.div
								key={detail.title}
								variants={cardVariants}
								whileHover={{ 
									scale: 1.03,
									transition: { type: "spring", stiffness: 300, damping: 20 }
								}}
								className="group"
							>
								<div className="glass-card h-full bg-[var(--glassmorphism)]/80 backdrop-blur-xl border-[var(--glassmorphism-border)] hover:border-teal-400/50 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl p-6">
									<div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500" />
									
									<div className="flex flex-col items-center text-center relative z-10">
										<motion.div 
											className="bg-gradient-to-br from-teal-400 to-cyan-400 text-white p-4 rounded-xl shadow-lg group-hover:shadow-teal-400/25 transition-all duration-300 mb-4"
											whileHover={{ rotate: 5, scale: 1.05 }}
										>
											<detail.icon className="w-6 h-6" />
										</motion.div>
										<h3 className="text-lg font-bold mb-2 text-[var(--foreground)] group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
											{detail.title}
										</h3>
										<p className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-relaxed mb-2">
											{detail.value}
										</p>
										<p className="text-xs text-[var(--muted-foreground)]/80">
											{detail.subtext}
										</p>
									</div>

									<div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<div className="shimmer absolute inset-0" />
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Quick Info */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isContactInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 gap-6"
					>
						{quickInfo.map((info) => (
							<motion.div
								key={info.title}
								variants={cardVariants}
								className="bg-[var(--glassmorphism)]/60 backdrop-blur-xl border border-[var(--glassmorphism-border)] rounded-xl p-4 hover:border-teal-400/50 transition-all duration-300 group"
							>
								<div className="flex items-center gap-3">
									<div className="bg-gradient-to-br from-teal-400/20 to-cyan-400/20 p-2 rounded-lg">
										<info.icon className="w-5 h-5 text-teal-500" />
									</div>
									<div>
										<h4 className="font-semibold text-[var(--foreground)]">{info.title}</h4>
										<p className="text-sm text-[var(--muted-foreground)]">{info.value}</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section ref={formRef} className="relative w-full py-20 sm:py-32 overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-[var(--gradient-background)]" />
					<div className="absolute inset-0">
						{[...Array(15)].map((_, i) => (
							<div
								key={i}
								className="absolute w-2 h-2 bg-teal-400/20 rounded-full animate-pulse"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 2}s`,
									animationDuration: `${2 + Math.random() * 2}s`,
								}}
							/>
						))}
					</div>
				</div>

				<div className="container mx-auto px-4 md:px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.8 }}
						className="max-w-2xl mx-auto"
					>
						<div className="bg-[var(--glassmorphism)]/80 backdrop-blur-xl border border-[var(--glassmorphism-border)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-teal-400/50">
							<div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl" />
							
							<div className="relative z-10">
								<div className="text-center mb-8">
									<h2 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--foreground)]">
										Send us a{" "}
										<span className="gradient-text">Message</span>
									</h2>
									<p className="text-[var(--muted-foreground)]">
										Fill out the form below and we'll get back to you as soon as possible.
									</p>
								</div>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<Input 
												type="text" 
												name="name"
												placeholder="Your Name" 
												value={formData.name}
												onChange={handleInputChange}
												className="glass-input bg-[var(--glassmorphism)]/50 border-[var(--glassmorphism-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-teal-400"
											/>
										</div>
										<div>
											<Input 
												type="email" 
												name="email"
												placeholder="Your Email" 
												value={formData.email}
												onChange={handleInputChange}
												className="glass-input bg-[var(--glassmorphism)]/50 border-[var(--glassmorphism-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-teal-400"
											/>
										</div>
									</div>
									<div>
										<Input 
											type="text" 
											name="subject"
											placeholder="Subject" 
											value={formData.subject}
											onChange={handleInputChange}
											className="glass-input bg-[var(--glassmorphism)]/50 border-[var(--glassmorphism-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-teal-400"
										/>
									</div>
									<div>
										<Textarea 
											name="message"
											placeholder="Your Message" 
											rows={5}
											value={formData.message}
											onChange={handleInputChange}
											className="glass-input bg-[var(--glassmorphism)]/50 border-[var(--glassmorphism-border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-teal-400 resize-none"
										/>
									</div>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<Button 
											type="submit" 
											className="w-full btn-gradient py-4 text-lg font-semibold shadow-lg hover:shadow-teal-400/25 transition-all duration-300"
										>
											<Send className="w-5 h-5 mr-2" />
											Send Message
										</Button>
									</motion.div>
								</form>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</AnimatedPage>
	);
}