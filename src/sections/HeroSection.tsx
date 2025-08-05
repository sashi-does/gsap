export const HeroSection = ({ videoRef }: { videoRef: any }) => {
  return (
    <section
      id="section1"
      className="dark relative top-0 bottom-0 left-0 right-0 h-[100vh] w-full overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        muted
        autoPlay
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <svg
          className="w-8 h-8 animate-bounce text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};
