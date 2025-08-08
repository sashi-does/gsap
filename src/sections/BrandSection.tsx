import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  "apple.png",
  "att.png",
  "aws.png",
  "cannes-lions.png",
  "cnn.png",
  "coca-cola.png",
  "hbo.png",
  "live-nation.png",
  "madiso-square-garden.png",
  "mgm.png",
  "robin-hood.png",
  "shakira.png",
  "sxsw.png",
  "wb.png",
  "world-economic-forum.png",
  "youtube.png",
];

const brandss = [
  
  "cadillac.png",
  "carnegie-hall.png",
  "dior.png",
  "edc.png",
  "electric-forest.png",
  "google.png",
  "netflix.png",
  "nfl.png",
  "nike.png",
  "radio-city.png",
  "redbull.png",
  "royal-caribbean.png",
  "salesforce.png",
  "samsung.png",
  "turner.png",
];


const BrandSection = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#brandSection",
      start: "top top",
      end: "+=8000", // longer scroll = smoother
      scrub: true,
      pin: true,
    });
  
    gsap.fromTo(
      ".row-right",
      { x: "-100vw" }, // reduce distance
      {
        x: "100vw",
        scrollTrigger: {
          trigger: "#brandSection",
          start: "top top",
          end: "+=8000",
          scrub: true,
        },
      }
    );
  
    gsap.fromTo(
      ".row-left",
      { x: "100vw" },
      {
        x: "-100vw",
        scrollTrigger: {
          trigger: "#brandSection",
          start: "top top",
          end: "+=8000",
          scrub: true,
        },
      }
    );
  
    gsap.fromTo(
      [".row-left", ".row-right"],
      { scale: 1 },
      {
        scale: 1.5,
        scrollTrigger: {
          trigger: "#brandSection",
          start: "top top",
          end: "+=8000",
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
            <img
            key={`left-${i}`}
            src={`/images/brands/${brand}`}
            alt={brand.replace(".png", "")}
            className="h-13 w-auto object-contain"
          />
          
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll right to center */}
      <div className="flex overflow-hidden">
        <div className="row-right mb-5 flex space-x-16 text-[40px] font-bold uppercase origin-center">
        {brandss.map((brand, i) => (
            <img
            key={`left-${i}`}
            src={`/images/brandss/${brand}`}
            alt={brand.replace(".png", "")}
            className="h-13 w-auto object-contain"
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
