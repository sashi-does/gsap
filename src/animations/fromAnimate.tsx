import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Power1 } from "gsap/src/all"

export default function FromAnimate() {
    useGSAP(() => {
        gsap.from("#red-box", { 
            x: 200,
            repeat: -1,
            duration: 1,
            rotate: 360,
            yoyo: true,
            ease: Power1.easeIn
         })
    })
    return <div id="red-box" className="bg-red-600 rounded-xl h-[100px] w-[100px]">

    </div>
}