'use client';

import { useState, useEffect, useRef, createContext, useContext } from 'react';
import Image from 'next/image';

interface Tech {
  name: string;
  icon: string;
}

// Context to track which row is currently active (for 2-column mobile layout)
const ActiveTechContext = createContext<{
  activeRow: number | null;
  setActiveRow: (row: number | null) => void;
}>({
  activeRow: null,
  setActiveRow: () => {},
});

function TechItem({ tech, index }: { tech: Tech; index: number }) {
  const { activeRow, setActiveRow } = useContext(ActiveTechContext);
  const itemRef = useRef<HTMLDivElement>(null);
  // On mobile (2 columns), both items in same row are active
  const rowIndex = Math.floor(index / 2);
  const isActive = activeRow === rowIndex;

  useEffect(() => {
    // Only use scroll detection on mobile
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const checkVisibility = () => {
      if (!itemRef.current) return;
      
      const rect = itemRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how centered the item is in the viewport
      const itemCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(itemCenter - viewportCenter);
      
      // Item is considered "active" if its center is within 15% of viewport center
      const threshold = windowHeight * 0.15;
      
      if (distanceFromCenter < threshold && rect.top < windowHeight && rect.bottom > 0) {
        setActiveRow(rowIndex);
      }
    };

    window.addEventListener('scroll', checkVisibility, { passive: true });
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [rowIndex, setActiveRow]);


  return (
    <div 
      ref={itemRef}
      className={`group relative h-48 flex flex-col items-center justify-center p-8 transition-all duration-500 overflow-hidden hover:bg-zinc-900/30 lg:last:border-r-0 md:[&:nth-child(4n)]:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r lg:[&:nth-child(2n)]:border-r
        ${isActive ? 'bg-zinc-900/50 md:bg-transparent' : ''}
      `}
    >
      {/* Icon */}
      <div className="w-20 h-20 relative transition-all duration-500 group-hover:scale-110">
        <Image
          src={tech.icon}
          alt={tech.name}
          fill
          className={`object-contain transition-all duration-500 
            ${isActive 
              ? 'brightness-100 invert-0 grayscale-0 scale-110' 
              : 'brightness-0 invert grayscale md:brightness-0 md:invert md:grayscale'
            }
            md:group-hover:brightness-100 md:group-hover:invert-0 md:group-hover:grayscale-0
          `}
        />
      </div>
      
      {/* Label */}
      <div className={`font-mono text-xs uppercase tracking-wider transition-colors duration-500 mt-4
        ${isActive ? 'text-white' : 'text-zinc-600 md:text-zinc-600'}
        md:group-hover:text-white
      `}>
        {tech.name}
      </div>
    </div>
  );
}

export default function TechStack() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  
  const technologies: Tech[] = [
    { name: 'React', icon: '/logo/react-svgrepo-com.svg' },
    { name: 'Next.js', icon: '/logo/nextjs.svg' },
    { name: 'TypeScript', icon: '/logo/typescript-official-svgrepo-com.svg' },
    { name: 'Node.js', icon: '/logo/node-js-svgrepo-com.svg' },
    { name: 'Tailwind', icon: '/logo/tailwind-svgrepo-com.svg' },
    { name: 'Python', icon: '/logo/python-svgrepo-com.svg' },
    { name: 'GitHub', icon: '/logo/github.svg' },
    { name: 'AWS', icon: '/logo/aws-svgrepo-com.svg' },
    { name: 'Docker', icon: '/logo/doker.svg' },
    { name: 'PostgreSQL', icon: '/logo/postgresql.svg' },
    { name: 'MongoDB', icon: '/logo/mongodb.svg' },
    { name: 'Redis', icon: '/logo/redis.svg' }
  ];

  return (
    <ActiveTechContext.Provider value={{ activeRow, setActiveRow }}>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech, index) => (
            <TechItem key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </ActiveTechContext.Provider>
  );
}
