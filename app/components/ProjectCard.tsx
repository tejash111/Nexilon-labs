'use client';

import { useState, useEffect, useRef, createContext, useContext } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
}

// Context to track which project is currently active
const ActiveProjectContext = createContext<{
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}>({
  activeIndex: null,
  setActiveIndex: () => {},
});

// Provider component that wraps all project cards
export function ProjectsContainer({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ActiveProjectContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </ActiveProjectContext.Provider>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { activeIndex, setActiveIndex } = useContext(ActiveProjectContext);
  const cardRef = useRef<HTMLDivElement>(null);
  const isActive = activeIndex === index;

  useEffect(() => {
    const checkVisibility = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how centered the card is in the viewport
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
      
      // Card is considered "active" if its center is within 30% of viewport center
      const threshold = windowHeight * 0.35;
      
      if (distanceFromCenter < threshold && rect.top < windowHeight && rect.bottom > 0) {
        setActiveIndex(index);
      }
    };

    // Check on scroll
    window.addEventListener('scroll', checkVisibility, { passive: true });
    // Initial check
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [index, setActiveIndex]);

  return (
    <div 
      ref={cardRef}
      className="group cursor-pointer"
    >
      <div className="aspect-[5/3] bg-zinc-100 rounded-sm overflow-hidden mb-6 relative transition-transform duration-500 ease-out">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`w-full h-full object-cover transition-all duration-700 
            ${isActive ? 'grayscale-0' : 'grayscale'} 
            md:grayscale md:group-hover:grayscale-0`}
        />
        <div className={`absolute inset-0 transition-colors duration-500 
          ${isActive ? 'bg-black/10' : 'bg-black/0'} 
          md:bg-black/0 md:group-hover:bg-black/10`} 
        />
      </div>
      <div className={`flex justify-between items-baseline mb-3 border-b pb-3 transition-colors duration-500
        ${isActive ? 'border-accent' : 'border-black/10'}
        md:border-black/10 md:group-hover:border-accent`}
      >
        <h3 className={`text-3xl font-medium tracking-tight transition-colors duration-500
          ${isActive ? 'text-accent' : 'text-black'}
          md:text-black md:group-hover:text-accent`}
        >
          {project.title}
        </h3>
        <span className="font-mono text-xs text-zinc-400">{new Date().getFullYear()}</span>
      </div>
      <p className="text-zinc-600 max-w-lg mb-6">
        {project.description}
      </p>
      <div className="flex gap-3 flex-wrap">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className={`px-3 py-1 border rounded-full text-[10px] font-mono uppercase tracking-wider transition-colors duration-500
              ${isActive ? 'border-accent/30 text-accent' : 'border-zinc-200 text-zinc-500'}
              md:border-zinc-200 md:text-zinc-500 md:group-hover:border-accent/30 md:group-hover:text-accent`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
