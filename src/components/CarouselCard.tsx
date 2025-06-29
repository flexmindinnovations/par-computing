import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import type { Solution } from "../lib/solutions";
import { cn } from "@/utils/cn";

interface CarouselCardProps {
    solution: Solution;
    index?: number;
    variants?: Variants;
    className?: string;
    isActive?: boolean; // New prop to control hover functionality
    isEdge?: boolean; // New prop for edge slides
}

export function CarouselCard({ solution, variants, className, isActive = true, isEdge = false }: CarouselCardProps) {
    return (
        <motion.div
            variants={variants}
            className={cn(
                "h-full w-full transition-all duration-500",
                className,
                isEdge && "scale-95 opacity-70 blur-[1px] pointer-events-none",
                !isActive && !isEdge && "opacity-0 scale-90 pointer-events-none"
            )}
            whileHover={isActive ? { y: -4, scale: 1.04 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <Link 
                to={`/solutions/${solution.slug}`}
                className={cn(
                    "block h-full",
                    isActive ? "group" : "group-disabled pointer-events-none"
                )}
                tabIndex={isActive ? 0 : -1}
                aria-disabled={!isActive}
            >
                <div className={cn(
                    "relative h-full w-full bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300 backdrop-blur-sm",
                    isActive 
                        ? "hover:border-[var(--primary)]/20" 
                        : isEdge
                            ? "opacity-50 blur-[1px]"
                            : "opacity-40"
                )}
                style={{
                    boxShadow: isActive 
                        ? "0 0 0 -1px rgba(0, 0, 0, 0.1)"
                        : "none"
                }}
                onMouseEnter={(e) => {
                    if (isActive) {
                        e.currentTarget.style.boxShadow = "0 0 10px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                    }
                }}
                onMouseLeave={(e) => {
                    if (isActive) {
                        e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                    }
                }}
                >
                    {/* Icon Container */}
                    <div className="relative mb-6">
                        <div className={cn(
                            "w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center transition-transform duration-200",
                            isActive ? "group-hover:scale-105" : ""
                        )}>
                            <solution.icon className="w-6 h-6 text-white" />
                        </div>
                        {/* Floating accent */}
                        <div className={cn(
                            "absolute -top-1 -right-1 w-3 h-3 bg-[var(--accent)] rounded-full transition-opacity duration-200",
                            isActive ? "opacity-0 group-hover:opacity-100" : "opacity-0"
                        )} />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <h3 className={cn(
                            "text-lg font-semibold line-clamp-2 antialiased tracking-wide transition-colors duration-200",
                            isActive 
                                ? "text-[var(--card-foreground)] group-hover:text-[var(--primary)]" 
                                : isEdge
                                    ? "text-[var(--muted-foreground)]"
                                    : "text-[var(--muted-foreground)]"
                        )}>
                            {solution.title}
                        </h3>
                        
                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed line-clamp-3 font-body antialiased">
                            {solution.description}
                        </p>
                        
                        {/* Features list */}
                        {solution.features && solution.features.length > 0 && (
                            <ul className="space-y-1">
                                {solution.features.slice(0, 2).map((feature: string, idx: number) => (
                                    <li key={idx} className="text-xs text-[var(--muted-foreground)] flex items-start font-body antialiased">
                                        <div className="w-1 h-1 bg-[var(--primary)] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                        <span className="line-clamp-1">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                        <span className={cn(
                            "text-sm font-medium antialiased tracking-wide transition-colors duration-200",
                            isActive 
                                ? "text-[var(--primary)] group-hover:text-[var(--secondary)]" 
                                : "text-[var(--muted-foreground)]"
                        )}>
                            Learn More
                        </span>
                        
                        <svg 
                            className={cn(
                                "w-4 h-4 transition-all duration-200",
                                isActive 
                                    ? "text-[var(--muted-foreground)] group-hover:text-[var(--primary)] group-hover:translate-x-0.5" 
                                    : "text-[var(--muted-foreground)]"
                            )}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-xl pointer-events-none transition-opacity duration-200",
                        isActive ? "opacity-0 group-hover:opacity-100" : "opacity-0"
                    )} />
                </div>
            </Link>
        </motion.div>
    );
}
