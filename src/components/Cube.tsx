import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import Draggable from "gsap/draggable";

const Cube = () => {

    useGSAP(() => {
        gsap.registerPlugin(Draggable);

        let rotationX = 0;
        let rotationY = 0;
        let startPointerX = 0;
        let startPointerY = 0;

        Draggable.create(".scene", {
            type: "rotation",

            onPress: function(e:any){
                startPointerX = e.clientX;
                startPointerY = e.clientY;
            },

            onDrag: function(e:any){
                const currentPointerX = e.clientX
                const currentPointerY = e.clientY

                const deltaX = currentPointerX - startPointerX;
                const deltaY = currentPointerY - startPointerY;

                rotationX += deltaX * 0.5;
                rotationY += deltaY * 0.5;

                rotationX = Math.max(-90, Math.min(90, rotationX));

                gsap.set(".cube", {
                    rotationX,
                    rotationY,
                });
                startPointerX = currentPointerX
                startPointerY = currentPointerY
            }
        })
    })
    
  return (
    <div className="bg-neutral-950">
        <h1 className="w-screen text-white flex justify-center pt-12 font-extralight text-xl tracking-widest uppercase">Cube</h1>
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-[14rem] tracking-widest text-white uppercase absolute z-1 pointer-events-none">dimensio</h1>
            <div className="scene w-75 h-75 perspective-[1000px] z-2">
                <div className="cube h-full w-full transform-3d -rotate-x-45 relative">
                    <div className="front absolute w-75 h-75 backdrop-blur-lg"></div>
                    <div className="back absolute w-75 h-75 backdrop-blur-lg"></div>
                    <div className="top absolute w-75 h-75 backdrop-blur-lg"></div>
                    <div className="bottom absolute w-75 h-75 backdrop-blur-lg"></div>
                    <div className="right absolute w-75 h-75 backdrop-blur-lg"></div>
                    <div className="left absolute w-75 h-75 backdrop-blur-lg"></div>                                                                                                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cube