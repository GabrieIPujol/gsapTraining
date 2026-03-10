import { useState } from "react";
import img from "../../public/assets/img/TestImage.jpg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

    const [isClick, setIsClick] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);

    useGSAP(() => {
        gsap.set(".imgs-wrapper img", {
            clipPath: "inset(0% 100% 0% 0%)",
        });

        if (isClick) {
            gsap.set(".imgs-wrapper img", {
                clipPath: "inset(0% 100% 0% 0%)",
            });
        }
    }, [isClick]);

    const imageGroups: Record<string, string[]> = {
        home: ["home-1"],
        about: ["about-1", "about-2"],
        project: ["project-1", "project-2"],
    };

    useGSAP(() => {
        if (activeLink && imageGroups[activeLink]) {
            imageGroups[activeLink].forEach((id) => {
                gsap.to(`[data-id='${id}']`, {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            });
        } else {
            gsap.to(".imgs-wrapper img", {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 0.5,
                ease: "power2.inOut",
            });
        }
    }, [activeLink]);

    return (
        <nav className="w-full p-10 z-40 flex items-center justify-between text-white bg-neutral-950 uppercase">
            <h1 className="text-2xl">nullx</h1>
            <div className="cursor-pointer relative z-50" onClick={() => setIsClick(!isClick)}>{isClick ? "CLOSE" : "MENU"}</div>

            <div className={`${isClick ? "h-full" : "h-0"} bg-neutral-900 fixed inset-0 overflow-hidden transform-all duration-300 ease-in-out`}>
                <div className="flex justify-between p-20">
                    <div className="p-20 w-1/2 space-y-5 text-3xl">
                        <p 
                            className="cursor-pointer"
                            onMouseEnter={() => setActiveLink("home")}
                            onMouseLeave={() => setActiveLink(null)}
                        >Home</p>
                        <p 
                            className="cursor-pointer"
                            onMouseEnter={() => setActiveLink("about")}
                            onMouseLeave={() => setActiveLink(null)}
                        >About</p>
                        <p 
                            className="cursor-pointer"
                            onMouseEnter={() => setActiveLink("project")}
                            onMouseLeave={() => setActiveLink(null)}
                        >Projects</p>
                    </div>
                    <div className="imgs-wrapper flex flex-wrap gap-10">
                        <img className="h-72 w-96 object-cover" data-id="home-1" src={img} alt="Testing image"/>
                        <img className="h-72 w-96 object-cover" data-id="about-1" src={img} alt="Testing image"/>
                        <img className="h-72 w-96 object-cover" data-id="about-2" src={img} alt="Testing image"/>
                        <img className="h-72 w-96 object-cover" data-id="project-1" src={img} alt="Testing image"/>
                        <img className="h-72 w-96 object-cover" data-id="project-2" src={img} alt="Testing image"/>
                    </div>
                </div>      
            </div>
        </nav>
    )
}

export default Navbar