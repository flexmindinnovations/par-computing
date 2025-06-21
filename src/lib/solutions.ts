import { Layers3, MessageSquare, Cloud, ShieldCheck, Database } from 'lucide-react';

export const solutions = [
    { 
        id: 'networking-solutions',
        name: 'Networking Solutions', 
        shortDescription: 'Flexible and robust network infrastructure, procurement, configuration, and management for seamless connectivity.', 
        longDescription: 'Par Computing Solutions Pvt Ltd, being a flexible supplier of network infrastructure, takes on procurement, configuration, and management for all your networking needs. We provide robust, scalable solutions to ensure your business stays connected and performs at its peak.',
        icon: Layers3, 
        href: '/solution/networking-solutions' 
    },
    { 
        id: 'unified-communication',
        name: 'Unified Communication Solutions', 
        shortDescription: 'Evolving technologies that automate and unify human and device communication across your enterprise.', 
        longDescription: 'Unified communications can be defined as evolving technologies that automate and unify human and device communication. We integrate all your communication tools to enhance collaboration and productivity across your organization.',
        icon: MessageSquare, 
        href: '/solution/unified-communication' 
    },
    { 
        id: 'cloud-solutions',
        name: 'Cloud Solutions', 
        shortDescription: 'On-demand services, computer networks, storage, and applications that provide scalability and flexibility.', 
        longDescription: 'A cloud-based solution refers to on-demand services, computer networks, storage, and applications. We provide secure, flexible cloud infrastructure and migration services to help you leverage the power of the cloud.',
        icon: Cloud, 
        href: '/solution/cloud-solutions' 
    },
    { 
        id: 'internet-security',
        name: 'Internet Security & Hosting', 
        shortDescription: 'Comprehensive IT Security solutions designed to both protect your assets and enable your business operations.',
        longDescription: 'Our IT Security solutions are designed to both protect and enable your business. These on-demand solutions protect your network against internet-borne threats while enabling secure access to your business applications.',
        icon: ShieldCheck, 
        href: '/solution/internet-security' 
    },
    { 
        id: 'storage-backup',
        name: 'Storage & Backup Solutions', 
        shortDescription: 'High-speed network of shared storage devices that provide consolidated, reliable storage and backup.', 
        longDescription: 'Our services provide a high-speed network of shared storage devices that provide consolidated storage and storage resources. We ensure your data is secure, accessible, and backed up efficiently.',
        icon: Database, 
        href: '/solution/storage-backup' 
    },
];

export const getSolutionById = (id: string | undefined) => {
    if (!id) return undefined;
    return solutions.find(solution => solution.id === id);
} 