// components/ImageRevealSection.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
];

const ImageRevealSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const targets = gsap.utils.toArray('.reveal-img');

    targets.forEach((img: any, i) => {
      gsap.fromTo(
        img,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          WE ARE A CREATIVE STUDIO & PRODUCTION COMPANY
        </h1>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="reveal-img opacity-0 transform translate-y-10"
          >
            <img
              src={src}
              alt={`Scroll Image ${index}`}
              className="w-full h-64 object-cover rounded-lg shadow-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageRevealSection;
