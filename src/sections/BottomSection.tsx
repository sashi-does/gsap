import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BottomSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const data = [
    {
      heading: "Immersive Experiences",
      img: "/images/exp1.jpg",
    },
    {
      heading: "Art Installations",
      img: "/images/exp2.jpg",
    },
    {
      heading: "Brand Activations",
      img: "/images/exp3.jpg",
    },
    {
      heading: "Concerts & Festivals",
      img: "/images/exp4.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      gsap.set(".panel", { autoAlpha: 0, y: 50 });

      panels.forEach((panel, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: () => `top+=${i * window.innerHeight} top`,
            end: () => `top+=${(i + 1) * window.innerHeight} top`,
            scrub: true,
          },
        });

        tl.to(panel, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(panel, { autoAlpha: 0, y: -50, duration: 0.6, ease: "power2.in" }, "+=0.6");
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${data.length * window.innerHeight}`,
        pin: true,
        scrub: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="section">
      <div ref={contentRef} className="content">
        {data.map((item, i) => (
          <div key={i} className="panel">
            <img src={item.img} alt="visual" className="bg-image" />
            <h1 className="heading">{item.heading}</h1>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section {
          height: 100vh;
          position: relative;
          background: black;
          overflow: hidden;
        }

        .content {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .panel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: white;
        }

        .bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          z-index: 1;
        }

        .heading {
          z-index: 2;
          font-size: 4rem;
          font-weight: bold;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
