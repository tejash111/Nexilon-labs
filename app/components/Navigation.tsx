'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Header / Nav Bar */}
      <div className="fixed top-5 left-5 right-5 z-50 text-white">
        <div className="w-full px-6 md:px-8 lg:px-12 py-5 md:py-6 grid grid-cols-3 items-center">
          {/* Left - Hamburger */}
          <div className="flex items-center justify-start mix-blend-difference">
            <button 
              onClick={toggleMenu}
              className="group flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
          
          {/* Center - Branding */}
          <div className="flex justify-center mix-blend-difference">
            <div className="font-semibold tracking-wide text-lg md:text-xl whitespace-nowrap">
              NEXION-<span className='text-[#fe4d01]'>LABS</span>
            </div>
          </div>

          {/* Right - CTA Button / Phone Number */}
          <div className="flex items-center justify-end">
            {isOpen ? (
              <div className="font-mono h-13 text-sm md:text-lg whitespace-nowrap mix-blend-difference">
                0161 504 8900
              </div>
            ) : (
              <button 
                className="px-3 w-50 h-13 md:px-6 lg:px-8 py-2 border !bg-[#fe4d01] border-white/20 !text-white text-[15px] md:text-[15px] font-mono uppercase tracking-[0.15em] hover:!bg-white hover:!text-black transition-colors whitespace-nowrap focus:!outline-none focus:!ring-0 focus:!bg-[#fe4d01] focus:!text-white active:!bg-[#fe4d01] active:!text-white"
                style={{ WebkitTapHighlightColor: 'transparent', backgroundColor: '#fe4d01', color: 'white' }}
              >
                START A PROJECT
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050505] z-40 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="h-full  w-full flex flex-col items-center justify-center ">
          {/* Menu Grid - Centered */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 pt-12 pb-12">
            
            {/* Column 1 */}
            <div className="space-y-6 lg:border-r border-white/10 lg:pr-8">
              <h3 className="text-2xl md:text-4xl font-light mb-8">Web Design</h3>
              <ul className="space-y-4 font-mono text-xs md:text-lg text-zinc-400">
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>Layout Composer</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>Web Design</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>WordPress</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6 lg:border-r border-white/10 lg:pr-8">
              <h3 className="text-2xl md:text-4xl font-light mb-8">Web Development</h3>
              <ul className="space-y-4  font-mono text-xs md:text-lg text-zinc-400">
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>API Development</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>Calculators Dev</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>Platform Dev</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-6 lg:border-r border-white/10 lg:pr-8">
              <h3 className="text-2xl md:text-4xl font-light mb-8">SEO</h3>
              <ul className="space-y-4 font-mono text-xs md:text-lg text-zinc-400">
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>Organic SEO</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>International SEO</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>Technical SEO</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-light mb-8">CRO</h3>
              <ul className="space-y-4 font-mono text-xs md:text-lg text-zinc-400">
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>Market Discovery</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
                <li className="flex justify-between items-center group cursor-pointer hover:text-[#fe4d01] transition-colors">
                  <span>User Psychology</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Footer Links - Below Menu Grid */}
          <div className="w-full max-w-7xl mt-20">
            <div className="flex flex-wrap gap-6 md:gap-12 text-base md:text-lg font-light text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Projects</a>
              <a href="#" className="hover:text-white transition-colors">Guides</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Support Portal</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
