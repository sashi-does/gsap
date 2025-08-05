import CollectionSection from "./sections/CollectionSection";
import { HeroSection } from "./sections/HeroSection";
import ImageRevealSection from "./sections/ImageRevealSection";

export default function App() {
  return <div className="h-[100vh]">
    <HeroSection />
    <CollectionSection />
    <ImageRevealSection />
  </div>
}