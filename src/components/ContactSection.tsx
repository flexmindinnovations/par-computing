import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactDetails = [
	{
		icon: MapPin,
		title: "Our Address",
		content:
			"SR.No 317, Near Orchids North Main Road, Lane E,Shefali Apartment,Office 01,Koregoan Park, Pune - 411001",
	},
	{
		icon: Phone,
		title: "Talk To Expert",
		content: "Rizvi : (+91)9822554090",
	},
	{
		icon: Mail,
		title: "Email Us",
		content: "razvi@parcomputing.com",
	},
];

const cardClass =
	"bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 text-center h-full transition-shadow transition-border transition-transform duration-300 hover:shadow-lg hover:border-[var(--primary)]/30 hover:-translate-y-2 flex flex-col items-center";

const ContactSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, margin: "-100px" });
	const [formSubmitted, setFormSubmitted] = useState(false);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.9,
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormSubmitted(true);
		setTimeout(() => setFormSubmitted(false), 3000);
	};

	return (
		<section ref={ref} className="section-spacing relative overflow-hidden bg-[var(--background)]">
			<div className="container mx-auto px-4 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-8"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Get In{" "}
						<span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
							Touch
						</span>
					</h2>
					<p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
						Ready to transform your business? Contact us today and let's
						discuss how we can help you achieve your goals.
					</p>
				</motion.div>
				{/* Contact Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
				>
					{contactDetails.map((detail, index) => {
						const Icon = detail.icon;
						return (
							<motion.div
								key={index}
								variants={cardVariants}
								whileHover={{ scale: 1.05, y: -5 }}
								className="group h-full"
							>
								<div className={cardClass}>
									<motion.div
										className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center text-[var(--primary-foreground)] shadow-lg group-hover:shadow-xl transition-all duration-300"
										whileHover={{ rotate: 10, scale: 1.1 }}
									>
										<Icon className="w-8 h-8" />
									</motion.div>
									<div className="flex-grow flex flex-col justify-center">
										<h3 className="text-xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors duration-300">
											{detail.title}
										</h3>
										<p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
											{detail.content}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
					}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="max-w-2xl mx-auto"
				>
					<div className={cardClass}>
						<h3 className="text-2xl font-bold text-center mb-8">
							Ready to Start Your Project?
						</h3>

						{!formSubmitted ? (
							<form onSubmit={handleSubmit} className="space-y-6 w-full">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<Input
										placeholder="Your Name"
										required
										className="bg-[var(--card)] border-[var(--border)] focus:border-[var(--primary)]/50"
									/>
									<Input
										type="email"
										placeholder="Your Email"
										required
										className="bg-[var(--card)] border-[var(--border)] focus:border-[var(--primary)]/50"
									/>
								</div>
								<Input
									placeholder="Subject"
									required
									className="bg-[var(--card)] border-[var(--border)] focus:border-[var(--primary)]/50"
								/>
								<Textarea
									placeholder="Tell us about your project..."
									rows={5}
									required
									className="bg-[var(--card)] border-[var(--border)] focus:border-[var(--primary)]/50 resize-none"
								/>
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="text-center"
								>
									<Button
										type="submit"
										className="btn-primary rounded-xl text-lg w-full md:w-auto"
									>
										Send Message
										<Send className="w-5 h-5 ml-2" />
									</Button>
								</motion.div>
							</form>
						) : (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className="text-center py-8"
							>
								<div
									className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center text-white"
								>
									{/* You can use a check icon here if you have one, e.g. <CheckCircle className="w-8 h-8" /> */}
									<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<h3 className="text-xl font-bold mb-2 text-[var(--primary)]">
									Message Sent Successfully!
								</h3>
								<p className="text-muted-foreground">
									Thank you for reaching out. We'll get back to you within 24 hours.
								</p>
							</motion.div>
						)}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection; 