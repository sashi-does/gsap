"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkSection() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top 120px"
    }});

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative h-fit w-full">
      {/* Fixed heading - Independent container */}
      

      {/* Content with padding to account for fixed header */}
      <div className="pt-32">
      <header className="w-full z-50 bg-white py-8 text-center" style={{ height: "120px" }}>
        <h2 className="text-6xl font-inter my-5 text-black font-extrabold uppercase tracking-tight">
          <span className="font-dalaFloda">HOW</span>{" "}
          <span className="font-extrabold text-[58px]">BRILLIANT WORK</span>{" "}
          <span className="font-dalaFloda">GETS DONE</span>
        </h2>
      </header>
        <div className="horizontal-container flex h-screen overflow-x-hidden">
          <div className="panel flex-shrink-0 w-[50vw] h-screen bg-white p-12 flex flex-col border-r border-gray-200 overflow-y-hidden">
            <div className="flex flex-col w-[90%] flex-1">
              <span className="text-4xl text-black mr-2 font-dalaFloda">01.</span>
              <h3 className="text-2xl my-5 flex flex-col font-inter font-medium text-black leading-[1.05]">
                <span>Creative</span>
                <span>Direction</span>
              </h3>
              <p className="mt-4 text-[15px] font-montserrat text-gray-600 h-fit flex-1 overflow-y-auto">
                We believe that story comes first. Our multi-disciplinary
                creative teams bring experiences to life through the eyes of the
                audience. Unparalleled creative direction, razor-sharp scripts,
                and crystal clear presentations yield clear goals and standout
                results throughout the production process.
              </p>
              <img
                src="/images/works/sketch.png"
                alt="Nike Installation"
                className="h-fit w-fit" // Reduced from mt-6 to mt-2
              />
            </div>
          </div>

          <div className="panel flex-shrink-0 w-[50vw] h-screen bg-white p-12 flex flex-col border-r border-gray-200 overflow-y-hidden">
            <div className="flex flex-col w-[90%] flex-1">
              <span className="text-4xl text-black mr-2 font-dalaFloda">02.</span>
              <h3 className="text-2xl my-5 flex flex-col font-inter font-medium text-black leading-[1.05]">
                <span>Experience</span>
                <span>Design</span>
              </h3>
              <p className="mt-4 text-[15px] font-montserrat text-gray-600 h-fit flex-1 overflow-y-auto">
                We craft stunning spectaculars at a wide-range of scales, from
                intimate performances to global events. We oversee teams of
                world-class experts across the disciplines of live design - from
                production design to special effects, lighting to puppetry -
                ensuring events and installations where each element is perfectly
                balanced.
              </p>
              <img
                src="/images/works/nike.png"
                alt="Nike Installation"
                className="h-fit w-fit"  // Reduced from mt-6 to mt-2
              />
            </div>
          </div>

          <div className="panel flex-shrink-0 w-[50vw] h-screen bg-white p-12 flex flex-col border-r border-gray-200 overflow-y-hidden">
            <div className="flex flex-col w-[90%] flex-1">
              <span className="text-4xl text-black mr-2 font-dalaFloda">03.</span>
              <h3 className="text-2xl my-5 flex flex-col font-inter font-medium text-black leading-[1.05]">
                <span>Content</span>
                <span>Creation</span>
              </h3>
              <p className="mt-4 text-[15px] font-montserrat text-gray-600 h-fit flex-1 overflow-y-auto">
                We produce stunning content for all types of screens and
                surfaces. With significant experience in rendered and real time
                animation, live action filmmaking, spatial audio design,
                holography, and virtual reality, we use both cutting edge
                techniques and old school filmmaking tricks to create
                unforgettable storytelling moments.
              </p>
              <img
                src="/images/works/lion.png"
                alt="Content Creation"
                className="h-fit w-fit"  // Reduced from mt-6 to mt-2
              />
            </div>
          </div>

          <div className="panel flex-shrink-0 w-[50vw] h-screen bg-white p-12 flex flex-col border-r border-gray-200 overflow-y-hidden">
            <div className="flex flex-col w-[90%] flex-1">
              <span className="text-4xl text-black mr-2 font-dalaFloda">04.</span>
              <h3 className="text-2xl my-5 flex flex-col font-inter font-medium text-black leading-[1.05]">
                <span>Entertainment</span>
                <span>Technology</span>
              </h3>
              <p className="mt-4 text-[15px] font-montserrat text-gray-600 flex-1 h-fit overflow-y-auto">
                We oversee complex video environments, show control systems,
                scenic fabrication, lighting, rigging, automation, and systems
                integration for the world's biggest experiences. Our extensive
                background in both permanent installations and touring
                entertainment helps us bring the right technology to any project.
              </p>
              <img
                src="/images/works/cyber.png"
                alt="Innovative Solutions"
                className="h-fit w-fit" // Reduced from mt-6 to mt-2
              />
            </div>
          </div>

          <div className="panel flex-shrink-0 w-[50vw] h-screen bg-white p-12 flex flex-col border-r border-gray-200 overflow-y-hidden">
            <div className="flex flex-col w-[90%] flex-1">
              <span className="text-4xl text-black mr-2 font-dalaFloda">04.</span>
              <h3 className="text-2xl my-5 flex flex-col font-inter font-medium text-black leading-[1.05]">
                <span>Entertainment</span>
                <span>Technology</span>
              </h3>
              <p className="mt-4 text-[15px] font-montserrat text-gray-600 flex-1 h-fit overflow-y-auto">
                We oversee complex video environments, show control systems,
                scenic fabrication, lighting, rigging, automation, and systems
                integration for the world's biggest experiences. Our extensive
                background in both permanent installations and touring
                entertainment helps us bring the right technology to any project.
              </p>
              <img
                src="/images/works/cyber.png"
                alt="Innovative Solutions"
                className="h-fit w-fit" // Reduced from mt-6 to mt-2
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}