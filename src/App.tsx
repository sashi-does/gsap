import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroSection } from './sections/HeroSection'
import Navbar from './components/Navbar'
import Section from './sections/Section'
import SmoothScrollWrapper from './SmoothScrollWrapper'
import BrandSection from './sections/BrandSection'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Show navbar after 5 seconds (manual timing)
    const timeout = setTimeout(() => {
      setShowNavbar(true)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <SmoothScrollWrapper>
      
      <HeroSection videoRef={videoRef} />
      <Section />
      <BrandSection />
    </SmoothScrollWrapper>
  )
}
