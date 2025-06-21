import { useParams, Navigate } from 'react-router-dom';
import AnimatedPage from "@/components/AnimatedPage";
import { getSolutionById } from '@/lib/solutions';
import PageHero from '@/components/PageHero';
import PageMetadata from '@/components/PageMetadata';

const emojiFavicon = (emoji: string) => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

export default function SolutionDetailPage() {
    const { solutionId } = useParams<{ solutionId: string }>();
    const solution = getSolutionById(solutionId);

    if (!solution) {
        return <Navigate to="/404" replace />;
    }

    return (
        <AnimatedPage>
            <PageMetadata title={`${solution.name} | PAR Computing`} faviconHref={emojiFavicon('💡')} />
            <PageHero
                title={solution.name}
                subtitle="A tailored approach to meet your specific business needs."
                imageUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="px-4 md:px-6 lg:px-8">
                <div className="bg-transparent text-foreground">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <p className="mt-6 text-lg text-muted-foreground">
                            {solution.longDescription}
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
} 