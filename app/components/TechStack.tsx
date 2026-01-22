'use client';

import Image from 'next/image';

interface Tech {
  name: string;
  icon: string;
}

export default function TechStack() {
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
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className="group relative h-48  flex flex-col items-center justify-center p-8 transition-all duration-500 overflow-hidden hover:bg-zinc-900/30 lg:last:border-r-0 md:[&:nth-child(4n)]:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r lg:[&:nth-child(2n)]:border-r"
          >
            {/* Icon */}
            <div className="w-20 h-20 relative transition-all duration-500 group-hover:scale-110">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain transition-all duration-500 brightness-0 invert grayscale group-hover:brightness-100 group-hover:invert-0 group-hover:grayscale-0"
              />
            </div>
            
            {/* Label */}
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-600 group-hover:text-white transition-colors duration-500 mt-4">
              {tech.name}
            </div>

         
          </div>
        ))}
      </div>
    </div>
  );
}
