import { motion } from 'framer-motion';
import AnimatedPage from '@/components/AnimatedPage';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import PageMetadata from '@/components/PageMetadata';
import { MapPin, Clock, Briefcase, Users, Heart, Zap } from 'lucide-react';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

const jobOpenings = [
  {
    id: 1,
    title: "Senior IT Consultant",
    location: "Pune, Maharashtra",
    type: "Full-time",
    department: "Consulting",
    description: "We are seeking an experienced IT Consultant to join our dynamic team. The ideal candidate will have a strong background in network infrastructure, cloud solutions, and a passion for solving complex problems for our clients.",
    requirements: [
      "5+ years of experience in IT consulting",
      "Strong knowledge of cloud platforms (AWS, Azure, GCP)",
      "Experience with network infrastructure design",
      "Excellent client communication skills"
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Analyst",
    location: "Remote",
    type: "Full-time",
    department: "Security",
    description: "Protect our clients' digital assets by identifying and mitigating security risks. You will be responsible for monitoring networks, investigating incidents, and implementing security best practices.",
    requirements: [
      "3+ years of cybersecurity experience",
      "Knowledge of security frameworks (NIST, ISO 27001)",
      "Experience with SIEM tools",
      "Security certifications preferred (CISSP, CISM)"
    ]
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    location: "Hybrid",
    type: "Full-time",
    department: "Cloud Services",
    description: "Design and implement scalable cloud architectures for our enterprise clients. Lead technical discussions and drive cloud adoption strategies.",
    requirements: [
      "7+ years of cloud architecture experience",
      "Expert knowledge of AWS/Azure/GCP",
      "Experience with containerization and microservices",
      "Strong leadership and mentoring skills"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    description: "Continuous learning opportunities and skill development"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with diverse, talented professionals"
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and generous time off"
  }
];

export default function CareersPage() {
    return (
        <AnimatedPage>
            <PageMetadata title="Careers | PAR Computing" faviconHref={emojiFavicon('💼')} />
            
            {/* Background with floating decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0" style={{ background: 'var(--gradient-background)' }}></div>
              <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-32 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>

            <PageHero
                title="Join Our Team"
                subtitle="Grow with us and be a part of our journey to redefine the IT landscape."
                imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Why Work With Us Section */}
            <section className="relative w-full section-spacing overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                
                {/* Floating decorations matching HomePage style */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
              </div>
              
              <div className="max-w-6xl mx-auto container-spacing relative z-10">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                    Why Choose <span className="gradient-text">PAR Computing</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Join a team that values innovation, growth, and making a meaningful impact in the technology sector.
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
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="group text-center p-8 rounded-3xl backdrop-blur-md shadow-lg border hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
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

            {/* Job Openings Section */}
            <section className="relative w-full section-spacing overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[var(--gradient-background)]" />
                
                {/* Floating decorations matching HomePage style */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl" />
              </div>
              
              <div className="max-w-4xl mx-auto container-spacing relative z-10">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                    Current <span className="gradient-text">Openings</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We are always looking for talented individuals to join our team. Explore our open positions below.
                  </p>
                </motion.div>

                <motion.div 
                  className="space-y-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {jobOpenings.map((job) => (
                    <motion.div
                      key={job.id}
                      className="group relative overflow-hidden p-8 rounded-2xl backdrop-blur-md shadow-lg border hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
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
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                {job.title}
                              </h3>
                              <motion.span 
                                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full border border-primary/30"
                                whileHover={{ scale: 1.05 }}
                              >
                                {job.department}
                              </motion.span>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                                  <MapPin className="w-4 h-4 text-primary" />
                                </div>
                                <span className="font-medium">{job.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                                  <Clock className="w-4 h-4 text-primary" />
                                </div>
                                <span className="font-medium">{job.type}</span>
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-6 leading-relaxed">
                              {job.description}
                            </p>
                            
                            <div className="mb-8">
                              <h4 className="font-bold mb-4 text-lg">Requirements:</h4>
                              <ul className="space-y-3">
                                {job.requirements.map((req, index) => (
                                  <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                                      {req}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="lg:ml-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button className="w-full sm:w-auto btn-spacing bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/25">
                                  Apply Now
                                </Button>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button 
                                  variant="outline" 
                                  className="w-full sm:w-auto btn-spacing glass border-[var(--glassmorphism-border)] text-[var(--foreground)] hover:bg-[var(--glassmorphism)] bg-[var(--glassmorphism)]/30 backdrop-blur-sm"
                                >
                                  View Details
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="relative container-spacing-lg section-spacing-lg">
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--foreground)]">
                      Don't See Your <span className="gradient-text">Perfect Role?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
                    </p>
                    <Button className="btn-spacing bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                      Send Your Resume
                    </Button>
                  </div>
                </motion.div>
              </div>
            </section>
        </AnimatedPage>
    );
}