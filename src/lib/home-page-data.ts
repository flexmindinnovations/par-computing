import { getImage, CATEGORIES } from '@/utils/imageUtils';

export const heroSlides = [
  {
    title: "ISO 9001:2015 Certified",
    description: "PAR Computing Solutions Pvt Ltd - Your trusted partner for end-to-end IT infrastructure management since 2007.",
    buttonText: "Get Quote Now",
    buttonLink: "/contact",
    imageUrl: getImage(CATEGORIES.HERO, 'cloud-storage'),
  },
  {
    title: "Networking Solutions",
    description: "Flexible supplier of network infrastructure, taking on procurement and implementation of robust networking solutions.",
    buttonText: "Learn More",
    buttonLink: "/solutions/networking",
    imageUrl: getImage(CATEGORIES.SOLUTIONS, 'datacenter'),
  },
  {
    title: "Cloud & Security Solutions",
    description: "Comprehensive cloud-based solutions and IT security designed to both protect and enable your business growth.",
    buttonText: "Explore Solutions",
    buttonLink: "/solutions",
    imageUrl: getImage(CATEGORIES.HERO, 'cloud1'),
  },
];

export const aboutSectionData = {
  description: "PAR Computing Solutions Pvt Ltd founded in 2007 with a team of dedicated Professionals with 10+ years of experience in field of IT Infrastructure Management & Facility Management. Par Computing Solutions Pvt Ltd strives consistently since day one in incremental satisfaction through learning curve in shaping right business strategies to deliver right business opportunities in a competitive environment through a process oriented approach. Par Computing provides end to end & Turnkey Infrastructure Solution.",
  solutions: [
    "Networking Solutions",
    "Cloud & Security",
    "Unified Communications",
    "Storage & Backup",
    "IT Infrastructure Management",
    "24/7 Technical Support"
  ],
  imageUrl: getImage(CATEGORIES.HERO, 'cloud-storage'),
  emergencyContact: {
    title: "Emergency Support",
    phone: "+91 9822554090"
  }
};

export const companyOverview = {
  title: "ABOUT PAR COMPUTING Solutions Pvt Ltd",
  subtitle: "We work with you to address your most critical business priorities",
  description: "PAR Computing Solutions Pvt Ltd founded in 2007 with a team of dedicated Professionals with 10+ years of experience in field of IT Infrastructure Management & Facility Management. Par Computing Solutions Pvt Ltd strives consistently since day one in incremental satisfaction through learning curve in shaping right business strategies to deliver right business opportunities in a competitive environment through a process oriented approach. Par Computing provides end to end & Turnkey Infrastructure Solution.",
  certification: "ISO 9001:2015 Certified Company",
  contact: {
    email: "razvi@parcomputing.com",
    phone: "+91 9822554090",
    address: "SR.No 317, Near Orchids North Main Road, Lane E, Shefali Apartment, Office 01, Koregoan Park, Pune - 411001"
  }
};

export const coreSolutions = [
  {
    title: "Networking Solutions",
    description: "Par Computing Solutions Pvt Ltd being a flexible supplier of network infrastructure, take on a procurement, comprehensive networking solutions for modern enterprises.",
    icon: "Network"
  },
  {
    title: "Unified Communication Solutions",
    description: "Unified communications can be defined as an evolving technologies that automates and unifies human and device communications across multiple platforms.",
    icon: "MessageCircle"
  },
  {
    title: "Cloud Solutions",
    description: "A cloud based solution refers to on-demand services, computer networks, storage, and applications that are accessible over the internet.",
    icon: "Cloud"
  },
  {
    title: "Internet Security & Hosting",
    description: "Our IT Security solutions are designed to both, protect and enable your business. These on-demand solutions provide comprehensive security coverage.",
    icon: "Shield"
  },
  {
    title: "Storage & Backup Solutions",
    description: "Our services provide high speed network of shared storage devices that provide consolidated storage and storage management for your critical data.",
    icon: "HardDrive"
  }
];

export const industriesServed = [
  {
    title: "Banking, Financial & Insurance Services",
    description: "The global financial sector has strongly withstood the economic downturn as one of the few sectors to rapidly adopt technology as a tool for growth, Asia remains a front runner to progress.",
    icon: "Building"
  },
  {
    title: "Education",
    description: "PAR Computing Solutions Pvt Ltd is a pioneer in collaborating and customizing technologies for education vertical. Today our solution portfolio is establishing technology as a strategic resource for faculty.",
    icon: "GraduationCap"
  },
  {
    title: "Healthcare",
    description: "Technology in the last two decades, has revolutionized the way healthcare is delivered worldwide and in India as well. Par Computing Solutions Pvt Ltd provide best technology and networks toward healthcare management.",
    icon: "Heart"
  },
  {
    title: "Travel & Hospitality",
    description: "The economic downturn gripping the global economy has had a major impact on the hospitality industry. We provide tailored solutions for this dynamic sector.",
    icon: "Plane"
  },
  {
    title: "IT / ITeS",
    description: "The IT/ITeS industry in India has become one of the fastest growing industries and has played a key role in putting India on the global map in the last decade.",
    icon: "Monitor"
  },
  {
    title: "Manufacturing",
    description: "It comprises of various sub groups like Automobiles, Oil and Gas, Mining and Metals, Cement, Energy / Utilities, FMCG, Consumer Durables, Engineering.",
    icon: "Factory"
  }
];

export const whyChooseUs = [
  {
    title: "PRE SALES CONSULTANCY",
    description: "Shro provides a comprehensive solution approach to your requirements by deploying presales consultants who understand your requirement and then design a solution",
    icon: "Users"
  },
  {
    title: "24/7 TECH SUPPORT",
    description: "We have various SLA levels, onsite and offsite support, you can opt for our highest service level of 24*7 for all your critical needs.",
    icon: "Clock"
  },
  {
    title: "DELIVERY ALL ACROSS INDIA",
    description: "We can deliver and service in any location across India and overseas, we can also execute import transactions, high sea sales, and duty exempt deals.",
    icon: "MapPin"
  },
  {
    title: "PROACTIVE SALES APPROACH",
    description: "A great sales team which invests its time in understanding your business pain areas and then propose a solution which meets your need.",
    icon: "Target"
  },
  {
    title: "100% Satisfaction Guarantee",
    description: "We want you to be completely satisfied with our services.",
    icon: "CheckCircle"
  },
  {
    title: "27x7 Support",
    description: "It takes to make you happy. No hassles, no problems.",
    icon: "Headphones"
  }
];

export const whyChooseUsValues = [
  {
    title: "Excellence",
    description: "Our employees always have the understanding that excellence is what differentiates us at Lauren. They completely comprehend that its not easy, but one can't achieve excellence with ease."
  },
  {
    title: "Dedication",
    description: "Dedication is an integral part of the workforce at Lauren, our employees understand that when a person contributes dedication, that person elevates the benchmark of the overall company."
  },
  {
    title: "Innovation",
    description: "We applaud innovation at Lauren. Our innovative brilliance in many of our ventures has proved that we can remodel the industry into being more dynamic than it already is."
  },
  {
    title: "Trust",
    description: "An association built over the strong foundations of trust reaches great height and Lauren is an absolute embodiment of the same idea."
  }
];

export const workingProcess = [
  {
    step: "01",
    title: "Research Project",
    description: "Find Sources, Evaluate Sources, Establish a Working"
  },
  {
    step: "02", 
    title: "Targeting",
    description: "Breaking a market into segments & customers whose desires"
  },
  {
    step: "03",
    title: "Results", 
    description: "Results are the specific actions to prevent future problems."
  }
];

export const whyChooseUsSection = {
  imageUrl: getImage(CATEGORIES.ABOUT, 'network-people'),
};
