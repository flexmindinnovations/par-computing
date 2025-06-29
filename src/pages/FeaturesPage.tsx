import { motion } from 'framer-motion';

export function FeaturesPage() {
  const featuresData = [
    {
      title: 'Cloud Computing',
      description: 'Scalable and flexible cloud solutions that grow with your business needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      ),
      color: 'var(--primary-color)'
    },
    {
      title: 'Data Analysis',
      description: 'Powerful analytics tools to help you understand and visualize your data.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
      color: 'var(--accent-color)'
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate artificial intelligence to enhance your applications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path>
          <path d="M17 6.18A10 10 0 0 1 22 12v8"></path>
          <path d="M7 6.18A10 10 0 0 0 2 12v8"></path>
        </svg>
      ),
      color: 'var(--highlight-color)'
    },
    {
      title: 'Secure Storage',
      description: 'Encrypt and store your sensitive data with military-grade protection.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      color: 'var(--primary-color)'
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time, no matter where they are.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      color: 'var(--accent-color)'
    },
    {
      title: 'Advanced API',
      description: 'Powerful yet simple APIs that make integration a breeze.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      ),
      color: 'var(--highlight-color)'
    }
  ];

  return (
    <div className="space-y-16">
      <motion.section 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">
          Powerful <span style={{ color: 'var(--highlight-color)' }}>Features</span>
        </h1>
        <p className="opacity-80 text-lg leading-relaxed">
          Our platform comes packed with innovative features designed to enhance 
          productivity, security, and overall user experience. Explore what Computing
          has to offer and revolutionize the way you work.
        </p>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </motion.section>

      <motion.section 
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-3xl font-bold">Customizable to Your Needs</h2>
          <p className="opacity-80 leading-relaxed">
            We understand that every business is unique. That's why our platform 
            is highly customizable, allowing you to tailor it to your specific requirements.
            From custom branding to workflow configurations, make Computing truly yours.
          </p>
          <ul className="space-y-3">
            {['Custom branding options', 'Flexible workflow configuration', 'Personalized dashboards', 'Integration with existing tools'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
              >
                <span className="text-primary-color">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7"></path>
                  </svg>
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="theme-card aspect-square rounded-lg p-8 flex items-center justify-center order-1 md:order-2">
          <div 
            className="w-full h-full rounded-lg flex items-center justify-center bg-[var(--secondary-color)]"
          >
            <motion.div 
              className="text-[var(--primary-color)] text-9xl font-bold opacity-25"
              animate={{ 
                scale: [1, 1.1, 1], 
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 5, 
                ease: "easeInOut", 
                repeat: Infinity 
              }}
            >
              C
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function FeatureCard({ title, description, icon, color }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  color: string;
}) {
  return (
    <motion.div 
      className="theme-card p-6 rounded-xl"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div 
        className="rounded-full w-12 h-12 flex items-center justify-center mb-4" 
        style={{ backgroundColor: color, color: 'white' }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-70">{description}</p>
    </motion.div>
  );
}
