import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function FromTo() {
    useGSAP(() => {
        gsap.fromTo("#green-box", { 
            x: 2,
            yoyo: true,
            repeat: -1,
            duration: 1,
            borderRadius: '0%'
         }, {
            x: 600,
            borderRadius: '100%',
            yoyo: true,
            repeat: -1,
            duration: 1
         })
    })
    return <div id="green-box" className="bg-green-600 h-[100px] w-[100px]">

    </div>
}