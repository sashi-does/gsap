import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  useGSAP(() => {
    gsap.to(".image", {
      scale: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#image",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div
      id="image"
      className="relative bg-white h-[100vh] w-full overflow-hidden"
    >
      <img
        src="/images/warner.png"
        className="image absolute top-0 left-0 w-full mx-auto h-full object-cover z-10"
        style={{ transform: "scale(1)" }}
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center z-0 text-center px-6">
        <h1 className="font-extrabold text-2xl md:text-4xl leading-tight tracking-wide text-black">
          <span className="font-stencil">WE ARE</span> A CREATIVE STUDIO &
          PRODUCTION COMPANY WITH
          <br />
          DECADES OF EXPERIENCE DESIGNING
          <br />
          & DEVELOPING <br />
          <span className="font-stencil">
            EXPERIENTIAL
            <br />
            ENTERTAINMENT
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Section;
