import ParallaxSection from './components/ParallaxSection';
import ScrollReveal from './components/ScrollReveal';
import Navigation from './components/Navigation';
import TechStack from './components/TechStack';
import { ServicesGrid } from './components/ServiceCard';
import ProjectCard, { ProjectsContainer } from './components/ProjectCard';
import { projects } from './data/projects';

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
                <a href="#work" className="hover:text-white transition-colors cursor-pointer">WORK</a>
                <a href="#services" className="hover:text-white transition-colors cursor-pointer">SERVICES</a>
                <a href="#about" className="hover:text-white transition-colors cursor-pointer">ABOUT</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Selected Works / Sticky Scroll Section */}
      <section id="work" className="bg-white text-black py-32 px-4 md:px-8 scroll-mt-20">
        <div className="max-w-full mx-auto flex flex-col md:flex-row gap-12 md:gap-24 relative">
          {/* Left Column - Sticky */}
          <div className="md:w-1/3">
            <div className="sticky top-1/4">
              <ScrollReveal>
                <div className="font-mono text-accent text-xl tracking-widest uppercase mb-6">
                  Featured Projects
                </div>
                <h2 className="text-6xl md:text-7xl font-medium tracking-tighter leading-none mb-8">
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
            <ProjectsContainer>
              {projects.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 100}>
                  <ProjectCard project={project} index={index} />
                </ScrollReveal>
              ))}
            </ProjectsContainer>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="relative min-h-fit text-white !mt-20 !pt-20 border-t border-white/10 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        
        <ScrollReveal>
          <div className="relative z-10 max-w-7xl mx-auto !px-8 md:!px-16 !mb-16">
             <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6">Our Services</h2>
             <p className="text-zinc-500 max-w-xl text-lg">Comprehensive digital solutions engineered for growth and performance.</p>
          </div>
        </ScrollReveal>

        <div className="relative z-10 border-y border-white/10">
          <ServicesGrid />
        </div>
      </section>

      {/* Tech Stack / Icons Grid */}
      <section className="relative min-h-fit text-white py-32 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        
        <ScrollReveal>
          <div className="relative z-10 max-w-7xl mx-auto !px-8 md:!px-16 !mb-16">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6">Technical Specifications</h2>
            <p className="text-zinc-500 max-w-xl text-lg">Technologies and platforms we work with to build exceptional digital products.</p>
          </div>
        </ScrollReveal>

        <div className="relative z-10">
          <TechStack />
        </div>
      </section>

 

    

      {/* Footer */}
      <footer id="about" className="relative bg-[#050505] text-white border-t border-white/10 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        
        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32" style={{ paddingLeft: 'clamp(1.5rem, 5vw, 8rem)', paddingRight: 'clamp(1.5rem, 5vw, 4rem)', paddingTop: 'clamp(4rem, 8vw, 8rem)', paddingBottom: 'clamp(2rem, 4vw, 4rem)' }}>
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
                <h4 className="font-semibold mb-10 text-xl tracking-wide" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>About</h4>
                <ul className="space-y-6 text-zinc-400 text-base" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Work & Results</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="font-semibold mb-10 text-xl tracking-wide" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Services</h4>
                <ul className="space-y-6 text-zinc-400 text-base" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                <h4 className="font-semibold mb-10 text-xl tracking-wide" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Clients</h4>
                <ul className="space-y-6 text-zinc-400 text-base" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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

         
        </div>
      </footer>
    </main>
  );
}

