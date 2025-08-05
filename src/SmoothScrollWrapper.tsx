import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const containerRef = useRef<HTMLDivElement>(null)
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNavbar(true)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
    }

    return () => {
      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);

  return (
    <div className='relative' ref={containerRef} id="smooth-wrapper">
    {showNavbar && <Navbar />}
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScrollWrapper;
