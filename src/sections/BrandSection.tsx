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
      end: "+=4000",
      scrub: true,
      pin: true,
    });

    // Move from left (off-screen) to center
    gsap.fromTo(
      ".row-left",
      { x: "-165vw" },
      {
        x: "182vw",
        scrollTrigger: {
          trigger: "#brandSection",
          start: "top top",
          end: "+=4000",
          scrub: true,
        },
      }
    );

    // Move from right (off-screen) to center
    gsap.fromTo(
      ".row-right",
      { x: "100vw" },
      {
        x: "-247vw",
        scrollTrigger: {
          trigger: "#brandSection",
          start: "top top",
          end: "+=4000",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      [".row-left", ".row-right"],
      { scale: 1 },
      {
        scale: 2,
        scrollTrigger: {
          trigger: "#brandSection",
          start: "top top",
          end: "+=4000",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="brandSection"
      className="bg-white h-screen text-black overflow-hidden relative flex flex-col justify-center"
    >
      {/* Row 1 - Scroll left to center */}
      <div className="flex overflow-hidden mb-10">
        <div className="row-left my-5 flex space-x-16 text-[40px] font-bold uppercase origin-center">
          {brands.map((brand, i) => (
            <span key={`left-${i}`}>{brand}</span>
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll right to center */}
      <div className="flex overflow-hidden">
        <div className="row-right mb-5 flex space-x-16 text-[40px] font-bold uppercase origin-center">
          {brands.map((brand, i) => (
            <span key={`right-${i}`}>{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
