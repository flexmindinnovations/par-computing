const DotPattern = () => (
    <div 
        className="absolute inset-0 h-full w-full pointer-events-none -z-10"
        style={{
            backgroundColor: 'var(--dot-bg)',
            backgroundImage: 'radial-gradient(circle at 1px 1px, var(--dot-color) 1px, transparent 0)',
            backgroundSize: '2rem 2rem'
        }}
    />
);

export default DotPattern; 