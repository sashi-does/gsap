import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  "Nike", "Apple", "Google", "Netflix", "Adobe", "CocaCola", "Samsung", "Intel",
  "Spotify", "Amazon", "Microsoft", "Pepsi", "Sony", "Tesla", "Meta",
  
];

const BrandSection = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#brandSection",
      start: "top top",
      end: "+=2000", // scroll distance while pinned
      scrub: true,
      pin: true,
    });

    gsap.fromTo(
      ".row-left",
      { xPercent: -90 },
      {
        xPercent: 60,
        scrollTrigger: {
          trigger: "#brandSection",
          start: "top top",
          end: "+=2000",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".row-right",
      { xPercent: 55 },
      {
        xPercent: -96,
        scrollTrigger: {
          trigger: "#brandSection",
          start: "top top",
          end: "+=2000",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="brandSection"
      className="bg-white h-[100vh] text-black overflow-hidden relative flex flex-col justify-center"
    >
      {/* Row 1 - Scroll left to right */}
      <div className="flex overflow-hidden mb-10">
        <div className="row-left flex space-x-16 text-4xl font-bold uppercase">
          {brands.map((brand, i) => (
            <span className="" key={`left-${i}`}>{brand}</span>
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll right to left */}
      <div className="flex overflow-hidden">
        <div className="row-right flex space-x-16 text-4xl font-bold uppercase">
          {brands.map((brand, i) => (
            <span key={`right-${i}`}>{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
