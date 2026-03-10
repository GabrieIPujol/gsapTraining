import { useGSAP } from "@gsap/react"
import img1 from "../../public/assets/img/si1.jpg"
import img2 from "../../public/assets/img/si2.jpg"
import img3 from "../../public/assets/img/si3.jpg"
import img4 from "../../public/assets/img/si4.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ImageReveal = () => {
    const imgs = [img1, img2, img3, img4];
    
    const generateClipPaths = (type:any) => {
        const gridSize = 5;
        const step = 100 / gridSize;
        const paths = [];
        const overlap = 0.1;

        for(let row = 0; row < gridSize; row++){
            for(let col = 0; col < gridSize; col++){
                const x1 = col * step - overlap;
                const y1 = row * step - overlap;
                const x2 = (col + 1) * step;
                const y2 = (row + 1) * step;
            
                if(type === "visible"){
                    paths.push(`polygon(${x1}% ${y1}%, ${x2}% ${y1}%, ${x2}% ${y2}%, ${x1}% ${y2}%)`);
                } else {
                    paths.push(`polygon(${x1}% ${y1}%, ${x1}% ${y1}%, ${x1}% ${y1}%, ${x1}% ${y1}%)`);
                }
            }
        }
        return paths;
    };

    const hiddenClipPaths = generateClipPaths("hidden");
    const visibleClipPaths = generateClipPaths("visible");

    const randomOrder = [
        [".mask0"],
        [".mask1", ".mask5"],
        [".mask2", ".mask6", ".mask10"],
        [".mask3", ".mask7", ".mask11", ".mask15"],
        [".mask4", ".mask8", ".mask12", ".mask16", ".mask20"],
        [".mask9", ".mask13", ".mask17", ".mask21"],
        [".mask14", ".mask18", ".mask22"],
        [".mask19", ".mask23"],
        [".mask24"],
    ]

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".image").forEach((img:any) => {
            const masks = img.querySelectorAll(".mask");
            masks.forEach((mask:any, index:any) => {
                gsap.set(mask, {
                    clipPath: hiddenClipPaths[index],
                });
            });

            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger: img,
                    start: "top 80%",
                },
            });

            randomOrder.forEach((group, groupIndex) => {
                const maskElements = group
                    .flatMap((cls) => Array.from(img.querySelectorAll(cls)))
                    .filter((el) => el);

                if (maskElements.length === 0) return;

                tl.to(maskElements, {
                    clipPath: (_i:any, el:any) => {
                        const maskIndex = Array.from(masks).indexOf(el)
                        return visibleClipPaths[maskIndex]
                    },
                    duration: 0.5,
                    delay: 0.1,
                    ease: "power2.out",
                    stagger: 0.1,
                }, groupIndex * 0.125);
            });
        });
    });
  return (
    <div className="bg-gray-200 min-h-screen">
        <div className="w-full h-full flex justify-center flex-wrap gap-18 p-40">
            {imgs.map((img:any, i:any) => {
                return(
                    <div key={i} className="image h-[700px] w-[550px] overflow-hidden relative">
                        {[...Array(25)].map((_, j) => (
                            <div
                                key={j}
                                className={`mask h-full w-full bg-center bg-cover mask${j} absolute top-0 left-0`}
                                style={{backgroundImage: `url(${img})`}}
                            ></div>
                        ))}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ImageReveal