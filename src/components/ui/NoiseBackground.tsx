import React from "react";

const NoiseBackground = React.memo(() => (
    <div className="absolute inset-0 h-full w-full pointer-events-none -z-10">
        {/* Glassmorphism overlay with noise */}
        <div
            className="w-full h-full bg-white/10 dark:bg-zinc-900/10 backdrop-blur-xs"
            style={{
                maskImage:
                    'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                WebkitMaskImage:
                    'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                opacity: 0.7,
            }}
        />
    </div>
));

export default NoiseBackground; 