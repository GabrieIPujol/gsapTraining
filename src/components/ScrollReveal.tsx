import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import white from "../../public/assets/img/porsche-branca.png";
import black from "../../public/assets/img/porsche-preta.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollReveal = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const darkEl = sectionRef.current?.querySelector<HTMLDivElement>(".dark");
        if (!darkEl || !sectionRef.current) return;

        gsap.fromTo(darkEl, {
            clipPath: "inset(0% 100% 0% 0%)",
        }, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
            }
        });
    });

  return (
    <section ref={sectionRef} className="relative overflow-hidden h-screen">
        <div className="h-[200vh]"></div>

        <div className="absolute inset-0 flex items-center justify-center gap-16 bg-[#f2f2f2]">
            <div className="flex gap-3 items-center">
                <h1 className="text-6xl self-start poppins-text text-[#090000]">Crafted <br/> To be <br/> Loud</h1>
                <span className="w-4 h-56 bg-[#090000]"></span>
                <h1 className="text-6xl self-end poppins-text text-[#090000]">Design <br/> for Speed</h1>
            </div>
            <div>
                <img src={black} alt="" />
            </div>
        </div>

        <div className="dark absolute inset-0 flex items-center justify-center gap-16 bg-[#090000]">
            <div className="flex gap-3 items-center">
                <h1 className="text-6xl self-start poppins-text text-[#f2f2f2]">Crafted <br/> To be <br/> Loud</h1>
                <span className="w-4 h-56 bg-[#f2f2f2]"></span>
                <h1 className="text-6xl self-end poppins-text text-[#f2f2f2]">Design <br/> for Speed</h1>
            </div>
            <div>
                <img src={white} alt="" />
            </div>
        </div>
    </section>
  )
}

export default ScrollReveal