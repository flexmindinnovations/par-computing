import { useLocation, NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) {
        return null; // Don't show on home page
    }

    // A function to capitalize and format the breadcrumb name
    const formatCrumb = (crumb: string) => {
        return crumb
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <nav className="flex items-center text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <NavLink to="/" className="hover:text-foreground">Home</NavLink>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const displayName = formatCrumb(name);

                return (
                    <span key={name} className="flex items-center">
                        <ChevronRight className="w-4 h-4 mx-1.5" />
                        {isLast ? (
                            <span className="text-foreground font-medium">{displayName}</span>
                        ) : (
                            <NavLink to={routeTo} className="hover:text-foreground">
                                {displayName}
                            </NavLink>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs; 