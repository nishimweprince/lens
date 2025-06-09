import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
  const baseClasses = 'font-bold tracking-tight';
  
  const levelClasses = {
    1: 'text-4xl md:text-6xl lg:text-8xl',
    2: 'text-3xl md:text-5xl lg:text-6xl',
    3: 'text-2xl md:text-4xl lg:text-5xl',
    4: 'text-xl md:text-3xl lg:text-4xl',
    5: 'text-lg md:text-2xl lg:text-3xl',
    6: 'text-base md:text-xl lg:text-2xl',
  };
  
  const combinedClasses = `${baseClasses} ${levelClasses[level]} ${className}`;
  
  switch (level) {
    case 1:
      return <h1 className={combinedClasses}>{children}</h1>;
    case 2:
      return <h2 className={combinedClasses}>{children}</h2>;
    case 3:
      return <h3 className={combinedClasses}>{children}</h3>;
    case 4:
      return <h4 className={combinedClasses}>{children}</h4>;
    case 5:
      return <h5 className={combinedClasses}>{children}</h5>;
    case 6:
      return <h6 className={combinedClasses}>{children}</h6>;
    default:
      return <h1 className={combinedClasses}>{children}</h1>;
  }
};
