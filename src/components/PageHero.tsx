import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div
      className="relative w-full h-64 md:h-80 overflow-hidden mb-12 shadow-lg"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-shadow-lg">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 text-shadow">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHero; 