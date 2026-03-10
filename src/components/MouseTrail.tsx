import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo1 from "../../public/assets/img/honda-logo.png";
import logo2 from "../../public/assets/img/ferrari-logo.png";
import logo3 from "../../public/assets/img/lambo-logo.png";

const MouseTrail = () => {

  useGSAP(() => {

    let lastX = 0;
    let lastY = 0;
    let currentIndex = 1;
    let imgs = [logo1, logo2, logo3];

    const createTrail = (x:any, y:any) => {
      const img = document.createElement("img");
      img.classList.add("image-trail");
      img.src = imgs[currentIndex];

      const container = document.querySelector<HTMLDivElement>(".trail-container");
      if (container) {
        container.appendChild(img);
      }
      currentIndex = (currentIndex + 1) % imgs.length;

      gsap.set(img, {
        x:x,
        y:y,
        scale: 0,
        opacity: 0,
      });

      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(img, {
        scale: 0.2,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "poewr2.in",
      })

    };

    const handleMouseMove = (e:any) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if(distance > 60){
        createTrail(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }

    };
    
    window.addEventListener("mousemove", handleMouseMove);
  })

  return (
    <div className="relative min-h-screen bg-neutral-950">
      <div className="trail-container absolute w-full h-full overflow-hidden"></div>
    </div>
  )
}

export default MouseTrail