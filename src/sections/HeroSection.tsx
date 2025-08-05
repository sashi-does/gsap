import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';

export const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleTimeUpdate = () => {
            if (videoElement && videoElement.duration - videoElement.currentTime <= 3) {
                setShowNavbar(true);
            }
        };

        if (videoElement) {
            videoElement.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <video
                ref={videoRef}
                src="/videos/hero.mp4"
                muted
                autoPlay
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
           

            {showNavbar && <Navbar />}
        </section>
    );
};
