import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const contactDetails = [
	{
		icon: MapPin,
		title: "Our Address",
		content:
			"SR.No 317, Near Orchids North Main Road, Lane E,Shefali Apartment,Office 01,Koregoan Park, Pune - 411001",
		color: "from-teal-400 to-cyan-400",
	},
	{
		icon: Phone,
		title: "Talk To Expert",
		content: "Rizvi : (+91)9822554090",
		color: "from-purple-400 to-pink-400",
	},
	{
		icon: Mail,
		title: "Email Us",
		content: "razvi@parcomputing.com",
		color: "from-orange-400 to-red-400",
	},
];

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
		<section ref={ref} className="section-spacing relative overflow-hidden">
			{/* Dynamic background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[var(--gradient-background)]" />

				{/* Animated particles */}
				<div className="absolute inset-0">
					{[...Array(15)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							animate={{
								y: [-20, 20, -20],
								opacity: [0.3, 0.8, 0.3],
							}}
							transition={{
								duration: 3 + Math.random() * 2,
								repeat: Infinity,
								delay: Math.random() * 2,
							}}
						/>
					))}
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Get In{" "}
						<span className="gradient-text">Touch</span>
					</h2>
					<p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
						Ready to transform your business? Contact us today and let's
						discuss how we can help you achieve your goals.
					</p>
				</motion.div>				{/* Contact Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
				>
					{contactDetails.map((detail, index) => {
						const Icon = detail.icon;
						return (
							<motion.div
								key={index}
								variants={cardVariants}
								whileHover={{ scale: 1.05, y: -5 }}
								className="group h-full"							>
								<div className="glass-card text-center p-8 bg-[var(--glassmorphism)] backdrop-blur-xl border border-[var(--glassmorphism-border)] hover:border-teal-400/30 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-teal-400/10 relative overflow-hidden h-full flex flex-col justify-between min-h-[280px]">
									{/* Background glow */}
									<div
										className={`absolute inset-0 bg-gradient-to-br ${detail.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
									/>

									{/* Icon */}
									<motion.div
										className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${detail.color} rounded-2xl flex items-center justify-center text-[var(--primary-foreground)] shadow-lg group-hover:shadow-xl transition-all duration-300`}
										whileHover={{ rotate: 10, scale: 1.1 }}
									>
										<Icon className="w-8 h-8" />
									</motion.div>

									<div className="flex-grow flex flex-col justify-center">
										<h3 className="text-xl font-bold mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
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
					<div className="glass-card p-8 md:p-12 bg-[var(--glassmorphism)] backdrop-blur-xl border border-[var(--glassmorphism-border)] rounded-3xl relative overflow-hidden">
						{/* Background gradient */}
						<div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-3xl" />

						<div className="relative z-10">
							<h3 className="text-2xl font-bold text-center mb-8">
								Ready to Start Your Project?
							</h3>

							{/* {!formSubmitted ? ( */}
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">									<Input
										placeholder="Your Name"
										required
										className="glass-input bg-[var(--glassmorphism)] border-[var(--glassmorphism-border)] focus:border-teal-400/50"
									/>
									<Input
										type="email"
										placeholder="Your Email"
										required
										className="glass-input bg-[var(--glassmorphism)] border-[var(--glassmorphism-border)] focus:border-teal-400/50"
									/>
								</div>
								<Input
									placeholder="Subject"									required
									className="glass-input bg-[var(--glassmorphism)] border-[var(--glassmorphism-border)] focus:border-teal-400/50"
								/>
								<Textarea
									placeholder="Tell us about your project..."
									rows={5}
									required
									className="glass-input bg-[var(--glassmorphism)] border-[var(--glassmorphism-border)] focus:border-teal-400/50 resize-none"
								/>
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="text-center"
								>
									<Button
										type="submit"
										className="btn-gradient px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-teal-400/25 transition-all duration-300 w-full md:w-auto"
									>
										Send Message
										<Send className="w-5 h-5 ml-2" />
									</Button>
								</motion.div>
							</form>
							{/* ) : ( */}
							{/* <motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className="text-center py-8"
							>
								<motion.div
									className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white"
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{
										type: "spring",
										stiffness: 200,
										damping: 15,
									}}
								>                    <CheckCircle className="w-8 h-8" />
								</motion.div>
								<h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">
									Message Sent Successfully!
								</h3>
								<p className="text-muted-foreground">
									Thank you for reaching out. We'll get back to you within
									24 hours.
								</p>
							</motion.div> */}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;