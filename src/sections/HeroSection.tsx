
export const HeroSection = ({videoRef}: {videoRef: any}) => {
    

    return (
        <section id="section1" className="dark relative top-0 bottom-0 left-0 right-0 h-[100vh] w-full overflow-hidden">
            <video
                ref={videoRef}
                src="/videos/hero.mp4"
                muted
                autoPlay
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            /> 
        </section>
    );
};
