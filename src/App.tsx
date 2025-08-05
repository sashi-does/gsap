import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroSection } from './sections/HeroSection'
import Section from './sections/Section'
import SmoothScrollWrapper from './SmoothScrollWrapper'
import BrandSection from './sections/BrandSection'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null)


  return (
    <SmoothScrollWrapper>
      
      <HeroSection videoRef={videoRef} />
      <Section />
      <BrandSection />
    </SmoothScrollWrapper>
  )
}
