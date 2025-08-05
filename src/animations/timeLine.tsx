import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function TimeLine() {
  const timeline = gsap.timeline({
    repeat: -1,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 200,
      duration: 1,
      ease: "back.inOut",
      borderRadius: "100%",
    });
    timeline.to("#yellow-box", {
      y: 200,
      duration: 1,
      ease: "back.inOut",
      borderRadius: "0%",
    });
    timeline.to("#yellow-box", {
      x: 0,
      duration: 1,
      ease: "back.inOut",
      borderRadius: "100%",
    });
    timeline.to("#yellow-box", {
      y: 0,
      duration: 1,
      ease: "back.inOut",
      borderRadius: "100%",
    });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          if (timeline.paused()) {
            timeline.resume();
          } else timeline.pause();
        }}
      >
        Start/Pause
      </button>
      <div
        id="yellow-box"
        className="bg-yellow-600 rounded-xl h-[100px] w-[100px]"
      ></div>
    </>
  );
}
