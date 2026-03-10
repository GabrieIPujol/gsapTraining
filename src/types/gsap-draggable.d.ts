declare module "gsap/draggable" {
  const Draggable: any;
  export default Draggable;
  export { Draggable };
}

declare module "gsap/Draggable" {
  import Draggable from "gsap/draggable";
  export default Draggable;
  export { Draggable };
}
