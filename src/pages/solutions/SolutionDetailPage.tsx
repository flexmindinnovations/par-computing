import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from "@/components/AnimatedPage";
import { getSolutionById } from '@/lib/solutions';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Users, Clock, Shield } from 'lucide-react';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const keyBenefits = [
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Delivered successful outcomes for 100+ clients"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with industry expertise"
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Quick implementation with minimal downtime"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance standards"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description: "Comprehensive analysis of your current infrastructure and requirements"
  },
  {
    step: "02",
    title: "Planning",
    description: "Custom solution design tailored to your business objectives"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Seamless deployment with minimal business disruption"
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing maintenance and optimization for peak performance"
  }
];

export default function SolutionDetailPage() {
    const { solutionId } = useParams<{ solutionId: string }>();
    const solution = getSolutionById(solutionId);

    if (!solution) {
        return <Navigate to="/404" replace />;
    }

    return (
        <AnimatedPage>
            <PageMetadata title={`${solution.name} | PAR Computing`} faviconHref={emojiFavicon('💡')} />
            
            {/* Background with floating decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0" style={{ background: 'var(--gradient-background)' }}></div>
              <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-32 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>

            <PageHero
                title={solution.name}
                subtitle="A tailored approach to meet your specific business needs."
                imageUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Solution Overview */}
            <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-16">
              <div className="max-w-4xl mx-auto">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Solution <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Overview</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {solution.longDescription}
                  </p>
                </motion.div>

                {/* Key Features */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 mb-16"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {/* Enhanced feature cards */}
                  {[
                    {
                      title: "Scalable Architecture",
                      description: "Built to grow with your business needs, ensuring long-term sustainability and performance.",
                      icon: "⚡"
                    },
                    {
                      title: "Advanced Security",
                      description: "Enterprise-grade security measures to protect your data and maintain compliance standards.",
                      icon: "🔒"
                    },
                    {
                      title: "24/7 Support",
                      description: "Round-the-clock technical support to ensure your operations run smoothly at all times.",
                      icon: "🛠️"
                    },
                    {
                      title: "Cost Effective",
                      description: "Optimized solutions that deliver maximum value while reducing operational costs.",
                      icon: "💰"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl p-8 backdrop-blur-md shadow-lg border hover:shadow-xl transition-all duration-500 hover:scale-105"
                      style={{ 
                        background: 'var(--glassmorphism)',
                        borderColor: 'var(--glassmorphism-border)'
                      }}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 flex items-start gap-6">
                        <div className="text-3xl bg-gradient-to-br from-primary to-secondary p-3 rounded-xl shadow-lg flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Key Benefits */}
            <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-16">
              <div className="max-w-6xl mx-auto">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">This Solution</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Experience the advantages of working with industry-leading experts.
                  </p>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {keyBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="group text-center p-8 rounded-2xl backdrop-blur-md shadow-lg border hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
                      style={{ 
                        background: 'var(--glassmorphism)',
                        borderColor: 'var(--glassmorphism-border)'
                      }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <motion.div 
                          className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
                          whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                          <benefit.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Implementation Process */}
            <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-16">
              <div className="max-w-6xl mx-auto">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Implementation <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Process</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Our proven methodology ensures successful delivery every time.
                  </p>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="group text-center p-8 rounded-2xl backdrop-blur-md shadow-lg border hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
                      style={{ 
                        background: 'var(--glassmorphism)',
                        borderColor: 'var(--glassmorphism-border)'
                      }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <motion.div 
                          className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
                          whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                          <span className="text-white font-bold text-lg">{step.step}</span>
                        </motion.div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="relative px-4 md:px-8 lg:px-16 py-16 md:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div 
                  className="relative overflow-hidden rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl border border-white/10"
                  style={{ background: 'var(--glassmorphism)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Get <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Started?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Let's discuss how {solution.name} can transform your business operations and drive growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="px-8 py-3 border-primary/50 hover:bg-primary/10">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
        </AnimatedPage>
    );
} 