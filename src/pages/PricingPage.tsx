import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";

export function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      price: '$19',
      period: 'per month',
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic analytics',
        'Email support'
      ],
      color: 'var(--secondary-color)',
      textColor: '#333',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Ideal for growing businesses and teams',
      price: '$49',
      period: 'per month',
      features: [
        'Unlimited projects',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Team collaboration tools'
      ],
      color: 'var(--primary-color)',
      textColor: 'white',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: '$99',
      period: 'per month',
      features: [
        'Unlimited projects',
        '500GB storage',
        'Custom analytics',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees'
      ],
      color: 'var(--highlight-color)',
      textColor: 'white',
      popular: false
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
          Simple, Transparent <span style={{ color: 'var(--primary-color)' }}>Pricing</span>
        </h1>
        <p className="opacity-80 text-lg leading-relaxed">
          Choose the plan that's right for you and start experiencing the power of Computing.
          All plans come with a 14-day free trial, no credit card required.
        </p>
      </motion.section>
      
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </motion.section>
      
      <motion.section 
        className="theme-card p-10 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Need a custom plan?</h2>
            <p className="opacity-80 mb-6">
              We understand that some organizations have unique requirements. 
              Contact our sales team to discuss a custom solution tailored to 
              your specific needs.
            </p>
            <Button variant="accent" size="lg">
              Contact Sales
            </Button>
          </div>
          
          <div className="space-y-4">
            <FaqItem 
              question="Can I switch plans later?" 
              answer="Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle."
            />
            <FaqItem 
              question="Is there a discount for annual billing?" 
              answer="Yes! You can save up to 20% by choosing annual billing on any of our plans."
            />
            <FaqItem 
              question="What payment methods do you accept?" 
              answer="We accept all major credit cards, PayPal, and bank transfers for annual plans."
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function PricingCard({ plan }: { plan: any }) {
  return (
    <motion.div 
      className={`rounded-xl overflow-hidden ${plan.popular ? 'ring-4 ring-primary-color' : ''}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
    >
      {plan.popular && (
        <div className="bg-primary-color text-white text-center py-1.5 font-medium">
          Most Popular
        </div>
      )}
      
      <div className="theme-card p-6 h-full flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="opacity-70">{plan.description}</p>
        </div>
        
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="opacity-70 ml-1">{plan.period}</span>
          </div>
        </div>
        
        <div className="space-y-3 mb-8 flex-grow">
          {plan.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <span style={{ color: 'var(--primary-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className="w-full py-3 rounded-md font-medium"
          style={{ 
            backgroundColor: plan.color,
            color: plan.textColor
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div 
import { motion } from 'framer-motion';

export function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      price: '$19',
      period: 'per month',
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic analytics',
        'Email support'
      ],
      color: 'var(--secondary-color)',
      textColor: '#333',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Ideal for growing businesses and teams',
      price: '$49',
      period: 'per month',
      features: [
        'Unlimited projects',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Team collaboration tools'
      ],
      color: 'var(--primary-color)',
      textColor: 'white',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: '$99',
      period: 'per month',
      features: [
        'Unlimited projects',
        '500GB storage',
        'Custom analytics',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees'
      ],
      color: 'var(--highlight-color)',
      textColor: 'white',
      popular: false
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
          Simple, Transparent <span style={{ color: 'var(--primary-color)' }}>Pricing</span>
        </h1>
        <p className="opacity-80 text-lg leading-relaxed">
          Choose the plan that's right for you and start experiencing the power of Computing.
          All plans come with a 14-day free trial, no credit card required.
        </p>
      </motion.section>
      
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </motion.section>
      
      <motion.section 
        className="theme-card p-10 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Need a custom plan?</h2>
            <p className="opacity-80 mb-6">
              We understand that some organizations have unique requirements. 
              Contact our sales team to discuss a custom solution tailored to 
              your specific needs.
            </p>
            <motion.button 
              className="btn btn-accent px-6 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
          
          <div className="space-y-4">
            <FaqItem 
              question="Can I switch plans later?" 
              answer="Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle."
            />
            <FaqItem 
              question="Is there a discount for annual billing?" 
              answer="Yes! You can save up to 20% by choosing annual billing on any of our plans."
            />
            <FaqItem 
              question="What payment methods do you accept?" 
              answer="We accept all major credit cards, PayPal, and bank transfers for annual plans."
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function PricingCard({ plan }: { plan: any }) {
  return (
    <motion.div 
      className={`rounded-xl overflow-hidden ${plan.popular ? 'ring-4 ring-primary-color' : ''}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
    >
      {plan.popular && (
        <div className="bg-primary-color text-white text-center py-1.5 font-medium">
          Most Popular
        </div>
      )}
      
      <div className="theme-card p-6 h-full flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="opacity-70">{plan.description}</p>
        </div>
        
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="opacity-70 ml-1">{plan.period}</span>
          </div>
        </div>
        
        <div className="space-y-3 mb-8 flex-grow">
          {plan.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <span style={{ color: 'var(--primary-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <motion.button 
          className="w-full py-3 rounded-md font-medium"
          style={{ 
            backgroundColor: plan.color,
            color: plan.textColor
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div 
      className="theme-border border-b pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="font-bold mb-2">{question}</h4>
      <p className="opacity-70">{answer}</p>
    </motion.div>
  );
}
