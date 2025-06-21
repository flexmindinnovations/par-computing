import { motion } from 'framer-motion';
import { Award, Handshake, Lightbulb, Users, ShieldCheck, Truck, Headphones, ThumbsUp } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';

const values = [
    { name: 'Excellence', description: "It's what differentiates us. It's not easy, but one can't achieve excellence with ease.", icon: Award },
    { name: 'Dedication', description: 'When a person contributes dedication, that person elevates the benchmark of the overall company.', icon: Handshake },
    { name: 'Innovation', description: 'Our innovative brilliance has proved that we can remodel the industry into being more dynamic.', icon: Lightbulb },
    { name: 'Trust', description: 'An association built over the strong foundations of trust reaches great heights.', icon: Users },
];

const whyChooseUs = [
    { title: 'Pre-Sales Consultancy', description: 'We provide a comprehensive solution approach by understanding your requirements to design the perfect solution.', icon: Headphones },
    { title: '24/7 Tech Support', description: 'We offer various SLA levels, both onsite and offsite, for all your critical needs.', icon: ShieldCheck },
    { title: 'Delivery Across India', description: 'We can deliver and service any location across India and overseas.', icon: Truck },
    { title: '100% Satisfaction Guarantee', description: 'We want you to be completely satisfied with our services. No hassles, no problems.', icon: ThumbsUp },
];

export default function AboutPage() {
    return (
        <AnimatedPage>
            <div className="bg-transparent text-foreground">
                {/* About Section */}
                <motion.section
                    className="py-16 px-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About PAR Computing</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Founded in 2007, PAR Computing Solutions Pvt Ltd has a dedicated team of professionals with over 10 years of experience in IT Infrastructure Management. We strive for incremental satisfaction by shaping the right business strategies to deliver opportunities in a competitive environment through a process-oriented approach.
                    </p>
                </motion.section>

                {/* Core Values Section */}
                <section className="py-16 bg-card/40 rounded-2xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.name}
                                    className="p-6 bg-card/80 backdrop-blur-md rounded-xl shadow-lg text-center border border-border"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <value.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{value.name}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {whyChooseUs.map((reason, index) => (
                                <motion.div
                                    key={reason.title}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                                            <reason.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">{reason.title}</h3>
                                        <p className="mt-1 text-muted-foreground">{reason.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
} 