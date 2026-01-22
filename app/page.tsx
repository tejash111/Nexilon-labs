import ParallaxSection from './components/ParallaxSection';
import ScrollReveal from './components/ScrollReveal';
import Navigation from './components/Navigation';
import TechStack from './components/TechStack';
import { projects } from './data/projects';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-accent selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
        <ParallaxSection speed={-0.2} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        </ParallaxSection>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="font-mono text-accent text-sm md:text-lg tracking-[0.3em] uppercase mb-8">
              Software Agency
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-[10vw] leading-[0.8] font-bold tracking-tighter text-white mb-12 mix-blend-overlay">
              NEXION<span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>—</span><span className="text-accent">LABS</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="max-w-xl mx-auto space-y-6">
              <p className="text-lg md:text-xl font-light text-zinc-400">
                We design and build scalable software products.


                <br />
                The last agency you’ll ever need.
              </p>
              
              <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left font-mono text-[20px] text-zinc-500 uppercase tracking-widest border-t border-white/10 mt-12 pt-4">
                <div>WORK</div>
                <div>SERVICES</div>
                <div>ABOUT</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Selected Works / Sticky Scroll Section */}
      <section className="bg-white text-black py-32 px-4 md:px-8">
        <div className="max-w-full mx-auto flex flex-col md:flex-row gap-12 md:gap-24 relative">
          {/* Left Column - Sticky */}
          <div className="md:w-1/3">
            <div className="sticky top-1/4">
              <ScrollReveal>
                <div className="font-mono text-accent text-xl tracking-widest uppercase mb-6">
                  Featured Projects
                </div>
                <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
                  Selected<br />Works
                </h2>
                <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-sm">
                  A collection of digital instruments crafted for the modern web. Each project represents a unique challenge solved with precision.
                </p>
                <div className="mt-12 hidden md:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column - Scrollable Projects */}
          <div className="md:w-2/3 space-y-32 md:pt-32">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 100}>
                <div className="group cursor-pointer">
                  <div className="aspect-[5/3] bg-zinc-100 rounded-sm overflow-hidden mb-6 relative transition-transform duration-500 ease-out">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="flex justify-between items-baseline mb-3 border-b border-black/10 pb-3 group-hover:border-accent transition-colors duration-300">
                    <h3 className="text-3xl font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">{new Date().getFullYear()}</span>
                  </div>
                  <p className="text-zinc-600 max-w-lg mb-6">
                    {project.description}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 border border-zinc-200 rounded-full text-[10px] font-mono uppercase tracking-wider text-zinc-500 group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative min-h-[100vh] text-white !mt-20 !pt-20 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        
        <ScrollReveal>
          <div className="relative z-10 max-w-7xl mx-auto !px-8 md:!px-16 !mb-16">
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Our Services</h2>
             <p className="text-zinc-500 max-w-xl text-lg">Comprehensive digital solutions engineered for growth and performance.</p>
          </div>
        </ScrollReveal>

        <div className="relative z-10 border-y border-white/10">
          <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2">
            {[
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
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative h-80 border-b md:border-b-0 md:odd:border-r border-white/10 p-12 flex flex-col justify-center overflow-hidden transition-colors hover:bg-zinc-900/30"
              >
                {/* Default State */}
                <h3 className="text-4xl md:text-5xl font-light tracking-tight group-hover:-translate-y-4 transition-transform duration-500 ease-out z-10">
                  {service.title}<span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">_</span>
                </h3>
                
                {/* Hover State - Content Reveal */}
                <div className="absolute inset-x-12 top-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-out">
                  <p className="text-zinc-400 text-lg leading-relaxed mb-6 max-w-md">
                    {service.desc}
                  </p>
                  <div className="flex gap-3">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono uppercase tracking-wider text-accent border border-accent/20 px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Background Pattern - Optional subtle grid or noise on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
              </div>
            ))}
            {/* Fix for bottom border on mobile if needed, or grid layout handling */}
            <div className="hidden md:block col-span-2 border-t border-white/10" />
           </div>
        </div>
      </section>

      {/* Tech Stack / Icons Grid */}
      <section className="relative min-h-[100vh] text-white py-32 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        
        <ScrollReveal>
          <div className="relative z-10 max-w-7xl mx-auto !px-8 md:!px-16 !mb-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Technical Specifications</h2>
            <p className="text-zinc-500 max-w-xl text-lg">Technologies and platforms we work with to build exceptional digital products.</p>
          </div>
        </ScrollReveal>

        <div className="relative z-10">
          <TechStack />
        </div>
      </section>

 

    

      {/* Footer */}
      <footer className="relative bg-[#050505] text-white border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        
        <div className="relative z-10 px-8 md:px-16 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left Section - Contact */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <h3 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">Talk to us</h3>
                <a href="tel:01615048900" className="text-3xl lg:text-4xl font-semibold text-[#fe4d01] hover:text-[#ff6620] transition-colors">
                  0161 504 8900
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#fe4d01] hover:text-[#fe4d01] transition-colors">
                  <span className="text-xl">in</span>
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#fe4d01] hover:text-[#fe4d01] transition-colors">
                  <span className="text-xl">𝕏</span>
                </a>
              </div>

              {/* CTA Button */}
              <button className="bg-[#d4a849] text-black px-8 py-4 text-sm font-semibold hover:bg-[#e5b95a] transition-colors w-fit">
                Grow your business
              </button>
            </div>

            {/* Middle Sections - Links */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
              {/* About Column */}
              <div>
                <h4 className="font-semibold mb-8 text-base tracking-wide">About</h4>
                <ul className="space-y-4 text-zinc-400">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Work & Results</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="font-semibold mb-8 text-base tracking-wide">Services</h4>
                <ul className="space-y-4 text-zinc-400">
                  <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Web Development Agency</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Development Agency</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Platform Development Agency</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">CRO</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">SEO Agency Manchester</a></li>
                </ul>
              </div>

              {/* Clients Column */}
              <div>
                <h4 className="font-semibold mb-8 text-base tracking-wide">Clients</h4>
                <ul className="space-y-4 text-zinc-400">
                  <li><a href="#" className="hover:text-white transition-colors">Portal</a></li>
                </ul>
              </div>
            </div>

            {/* Right Section - Vertical Brand Name */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end">
              <div className="text-7xl lg:text-8xl font-light tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                NEXION-<span className='text-[#fe4d01]'>LABS</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-4">
              <div className="border border-white/20 px-4 py-2 text-xs">
                <div className="font-semibold text-white">⊕ Leadinfo</div>
                <div className="text-[10px] mt-1">Certified Partner</div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-xs md:text-sm">
              <span>© 2026 All Rights Reserved. Unbranded Manchester.</span>
              <span className="hidden md:inline">|</span>
              <span>Registered in England & Wales</span>
              <span className="hidden md:inline">|</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

