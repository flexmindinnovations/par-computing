import type { LucideIcon } from "lucide-react";
import { 
    Cloud, 
    Shield, 
    Database, 
    Code, 
    Smartphone, 
    BarChart3, 
    Cog, 
    Users, 
    Lock,
    Server,
    Globe,
    Zap
} from "lucide-react";

export interface Solution {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: LucideIcon;
    slug: string;
    category: string;
    color: string;
}

export const solutions: Solution[] = [
    {
        id: "cloud-infrastructure",
        title: "Cloud Infrastructure",
        description: "Scalable and secure cloud solutions that grow with your business. Deploy, manage, and scale applications with confidence.",
        features: [
            "Auto-scaling capabilities",
            "99.9% uptime guarantee",
            "Multi-region deployment",
            "Cost optimization tools"
        ],
        icon: Cloud,
        slug: "cloud-infrastructure",
        category: "Infrastructure",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity Solutions",
        description: "Comprehensive security measures to protect your digital assets from evolving threats and vulnerabilities.",
        features: [
            "24/7 threat monitoring",
            "Advanced threat detection",
            "Compliance management",
            "Security audits"
        ],
        icon: Shield,
        slug: "cybersecurity",
        category: "Security",
        color: "from-red-500 to-orange-500"
    },
    {
        id: "data-analytics",
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with advanced analytics and business intelligence tools.",
        features: [
            "Real-time dashboards",
            "Predictive analytics",
            "Custom reporting",
            "Data visualization"
        ],
        icon: BarChart3,
        slug: "data-analytics",
        category: "Analytics",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: "web-development",
        title: "Web Development",
        description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
        features: [
            "Responsive design",
            "SEO optimization",
            "Performance optimization",
            "Progressive web apps"
        ],
        icon: Code,
        slug: "web-development",
        category: "Development",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "mobile-solutions",
        title: "Mobile Solutions",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        features: [
            "iOS & Android apps",
            "Cross-platform development",
            "App store optimization",
            "Mobile UI/UX design"
        ],
        icon: Smartphone,
        slug: "mobile-solutions",
        category: "Development",
        color: "from-indigo-500 to-blue-500"
    },
    {
        id: "database-management",
        title: "Database Management",
        description: "Robust database solutions for data storage, management, and optimization across all platforms.",
        features: [
            "Database optimization",
            "Backup & recovery",
            "Performance tuning",
            "Migration services"
        ],
        icon: Database,
        slug: "database-management",
        category: "Infrastructure",
        color: "from-teal-500 to-green-500"
    },
    {
        id: "automation-tools",
        title: "Automation Tools",
        description: "Streamline your workflows with intelligent automation solutions that boost productivity.",
        features: [
            "Process automation",
            "Workflow optimization",
            "Integration services",
            "Custom automation"
        ],
        icon: Cog,
        slug: "automation-tools",
        category: "Automation",
        color: "from-orange-500 to-red-500"
    },
    {
        id: "team-collaboration",
        title: "Team Collaboration",
        description: "Enhanced collaboration tools that bring teams together and improve communication efficiency.",
        features: [
            "Real-time collaboration",
            "Project management",
            "Communication tools",
            "File sharing"
        ],
        icon: Users,
        slug: "team-collaboration",
        category: "Collaboration",
        color: "from-cyan-500 to-blue-500"
    },
    {
        id: "identity-management",
        title: "Identity Management",
        description: "Secure identity and access management solutions for enterprise-level security requirements.",
        features: [
            "Single sign-on (SSO)",
            "Multi-factor authentication",
            "Access control",
            "Identity verification"
        ],
        icon: Lock,
        slug: "identity-management",
        category: "Security",
        color: "from-red-500 to-pink-500"
    },
    {
        id: "server-solutions",
        title: "Server Solutions",
        description: "High-performance server infrastructure designed for reliability, scalability, and optimal performance.",
        features: [
            "Dedicated servers",
            "Load balancing",
            "Server monitoring",
            "Backup solutions"
        ],
        icon: Server,
        slug: "server-solutions",
        category: "Infrastructure",
        color: "from-gray-500 to-slate-500"
    },
    {
        id: "network-services",
        title: "Network Services",
        description: "Comprehensive networking solutions that ensure reliable connectivity and optimal performance.",
        features: [
            "Network design",
            "VPN services",
            "Network monitoring",
            "Bandwidth optimization"
        ],
        icon: Globe,
        slug: "network-services",
        category: "Infrastructure",
        color: "from-blue-500 to-indigo-500"
    },
    {
        id: "performance-optimization",
        title: "Performance Optimization",
        description: "Boost your system performance with advanced optimization techniques and monitoring solutions.",
        features: [
            "Performance analysis",
            "Speed optimization",
            "Resource management",
            "Scalability planning"
        ],
        icon: Zap,
        slug: "performance-optimization",
        category: "Optimization",
        color: "from-yellow-500 to-orange-500"
    }
];

// Helper function to get solutions by category
export const getSolutionsByCategory = (category: string) => {
    return solutions.filter(solution => solution.category === category);
};

// Helper function to get solution by slug
export const getSolutionBySlug = (slug: string) => {
    return solutions.find(solution => solution.slug === slug);
};

// Get all unique categories
export const getCategories = () => {
    return [...new Set(solutions.map(solution => solution.category))];
};
