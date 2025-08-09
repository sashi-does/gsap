import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  "bally.png",
  "cannes-lions.png",
  "cnn.png",
  "coachella.png",
  "coca-cola.png",
  "hbo.png",
  "live-nation.png",
  "madison-square-garden.png",
  "mgm.png",
  "pharrel.png",
  "robin-hood.png",
  "shakira.png",
  "sphere.png",
  "sxsw.png",
  "target.png",
  "wb.png",
  "world-economic-forum.png",
  "youtube.png",
];

const brandss = [
  "accenture.png",
  "adidas.png",
  "apple.png",
  "att.png",
  "aws.png",
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
    // Calculate the width of each row dynamically
    const leftRow = document.querySelector(".row-left");
    const rightRow = document.querySelector(".row-right");
    const vw = window.innerWidth;

    if (leftRow && rightRow) {
      const leftWidth = leftRow.scrollWidth;
      const rightWidth = rightRow.scrollWidth;

      // Pin the section and animate rows
      ScrollTrigger.create({
        trigger: "#brandSection",
        start: "top top",
        end: () => `+=${Math.max(leftWidth, rightWidth) * 2}`, // End when content is fully off-screen
        scrub: true,
        pin: true,
      });

      gsap.fromTo(
        ".row-right",
        { x: `-100vw` }, // Start from left edge
        {
          x: `100vw`, // Move to right edge
          scrollTrigger: {
            trigger: "#brandSection",
            start: "top top",
            end: () => `+=${rightWidth * 2}`, // End based on row width
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".row-left",
        { x: `100vw` }, // Start from right edge
        {
          x: `-100vw`, // Move to left edge
          scrollTrigger: {
            trigger: "#brandSection",
            start: "top top",
            end: () => `+=${leftWidth * 2}`, // End based on row width
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
            end: () => `+=${Math.max(leftWidth, rightWidth) * 2}`, // Sync with pin end
            scrub: true,
          },
        }
      );
    }
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
              key={`right-${i}`} // Unique key for right row
              src={`/images/brandss/${brand}`} // Corrected path
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