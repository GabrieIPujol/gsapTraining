import car1 from "../../public/assets/img/jdm-car.jpg"
import car2 from "../../public/assets/img/germany-car.jpg"
import car3 from "../../public/assets/img/italian-car.jpg"
import car4 from "../../public/assets/img/dream-car.jpg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ScrollImageReveal = () => {
    const data = [
        {
            id: 1,
            image: car1,
            title: 'JDM Cars',
        },
        {
            id: 2,
            image: car2,
            title: 'Germany Cars',
        },
        {
            id: 3,
            image: car3,
            title: 'Italian Cars',
        },
        {
            id: 4,
            image: car4,
            title: 'Dream Cars'
        }
    ]

    useGSAP(() => {
        gsap.utils.toArray(".slider .image").forEach((img:any) => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.fromTo(img, {
                clipPath: "inset(0% 100% 0% 0% round 25px)",
            }, {
                clipPath: "inset(0% 0% 0% 0% round 25px)",
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "clamp(top bottom)",
                    end: "clamp(top top)",
                    scrub: true,
                },
            })
        })
    })
  return (
    <div className="bg-neutral-950 text-white py-96">
        <h1 className="w-screen text-white flex justify-center pb-20 font-extralight text-xl tracking-widest uppercase">Scroll Reveal</h1>
        {data.map((car, i) => {
            return <div key={i} className="slider flex border-b border-white/25 p-3">
                <div className="w-[40%] text-4xl self-end p-8">
                    <h1>{car.title}</h1>
                </div>
                <div className="w-[60%] h-88">
                    <div className="image w-full h-full bg-cover bg-left" style={{backgroundImage: `url(${car.image})`}}></div>
                </div>
            </div>
        })}
    </div>
  )
}

export default ScrollImageReveal