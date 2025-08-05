import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function ToAnimate() {

  useGSAP(() => {
    gsap.to("#blue-box", { 
      x: 200,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 1,
    })
  }, [])

 return <div id="blue-box" className="bg-blue-600 rounded-xl h-[100px] w-[100px]">

  </div>
}