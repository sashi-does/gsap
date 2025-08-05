import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Stagger() {
  useGSAP(() => {
    gsap.to(".me", {
      y: 100,
      repeat: -1,
      yoyo: true,
      grid: 0.1,
      borderRadius: "100%",
      stagger: {
        grid: [7, 15],
        from: "center",
        amount: 1.5,
      },
    });
  });

  return (
    <div className="flex my-[300px] justify-center space-x-2">
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
      <div className="bg-purple-500 h-[150px] w-[60px] me"></div>
    </div>
  );
}
