'use client';

import { useState, useEffect, useRef, createContext, useContext } from 'react';

interface Service {
  title: string;
  desc: string;
  tags: string[];
}

const services: Service[] = [
  {
    title: "Web Design",
    desc: "Crafting immersive visual narratives that resonate with your audience. We blend aesthetics with usability to create memorable experiences.",
    tags: ["UI/UX", "Prototyping", "Design Systems"]
  },
  {
    title: "Web Development",
    desc: "Building robust, scalable applications using cutting-edge technologies. Focus on performance, security, and maintainable code architecture.",
    tags: ["React/Next.js", "Node.js", "WebGL"]
  },
  {
    title: "Search Engine Optimization",
    desc: "Data-driven strategies to increase visibility and drive organic traffic. Technical SEO, content optimization, and authority building.",
    tags: ["Technical SEO", "Analytics", "Growth"]
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Analyzing user behavior to optimize user journeys. We turn visitors into customers through A/B testing and data analysis.",
    tags: ["A/B Testing", "User Research", "Analytics"]
  }
];

// Context to track which service is currently active
const ActiveServiceContext = createContext<{
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}>({
  activeIndex: null,
  setActiveIndex: () => {},
});

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { activeIndex, setActiveIndex } = useContext(ActiveServiceContext);
  const cardRef = useRef<HTMLDivElement>(null);
  const isActive = activeIndex === index;

  useEffect(() => {
    // Only use scroll detection on mobile
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const checkVisibility = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how centered the card is in the viewport
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
      
      // Card is considered "active" if its center is within 25% of viewport center
      const threshold = windowHeight * 0.15;
      
      if (distanceFromCenter < threshold && rect.top < windowHeight && rect.bottom > 0) {
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', checkVisibility, { passive: true });
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [index, setActiveIndex]);

  return (
    <div 
      ref={cardRef}
      className={`
        group relative overflow-hidden transition-all duration-300 ease-out
        min-h-[120px] py-8 px-6 border-b border-white/10
        md:min-h-0 md:h-80 md:p-12 md:border-b-0 md:odd:border-r md:border-white/10
        flex flex-col justify-start md:justify-center
        hover:bg-zinc-900/30
        ${isActive ? 'bg-zinc-900/50 md:bg-transparent' : ''}
      `}
    >
      {/* Title */}
      <div className="flex justify-between items-center md:block relative z-20 bg-inherit">
        <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight md:group-hover:-translate-y-4 transition-all duration-500 ease-out
          ${isActive ? 'text-white' : 'text-zinc-400 md:text-white'}`}
        >
          {service.title}
          <span className={`text-accent transition-opacity duration-300
            ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-0 md:group-hover:opacity-100'}`}
          >_</span>
        </h3>
        {/* Mobile expand indicator */}
        <span className={`md:hidden text-xl text-accent transition-transform duration-300
          ${isActive ? 'rotate-45' : 'rotate-0'}`}
        >
          +
        </span>
      </div>
      
      {/* Content - Scroll reveal on mobile, hover reveal on desktop */}
      <div 
        className={`
          overflow-hidden transition-all duration-500 ease-out relative z-10
          /* Mobile: natural flow expansion */
          ${isActive ? 'max-h-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0'}
          /* Desktop: absolute positioned reveal */
          md:absolute md:left-12 md:right-12 md:top-[60%]
          md:max-h-none md:pt-0
          md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0
        `}
      >
        <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-4 md:mb-6 max-w-md">
          {service.desc}
        </p>
        <div className="flex gap-2 md:gap-3 flex-wrap">
          {service.tags.map((tag) => (
            <span key={tag} className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-accent border border-accent/20 px-2 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
    </div>
  );
}

export function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ActiveServiceContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
        <div className="hidden md:block col-span-2 border-t border-white/10" />
      </div>
    </ActiveServiceContext.Provider>
  );
}
