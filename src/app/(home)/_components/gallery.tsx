"use client";
import { ParallaxScroll } from "../../../components/parallax-scroll";
import { motion,Variants } from "framer-motion";

export function Gallery() {
const cardVariants: Variants = {
  offscreen: {
           y: 400,
      opacity:0,
      
  },
  onscreen: {
      y: 0,
     
      opacity:1,
    
    transition: {
      type: "easeIn",
      bounce: 1,
      duration: 1.5
    }
  }
};
    return (
        <motion.div initial="offscreen"
            whileInView="onscreen"
        variants={cardVariants}
        >
        <div className="h-full px-16 pt-32">
            <div className="mb-32">

            <h1 className="text-white font-extrabold text-center text-4xl">
                Moments of Mastery
            </h1>
        <p className="text-white text-opacity-65 font-normal py-8 text-center max-w-4xl mx-auto">Witness the pulse of Singto Muay Thai through our curated gallery. Each photo captures the essence of discipline, the spirit of our fighters, and the majestic ambiance of our rooftop dojo. From the sweat-drenched smiles of achievement to the poised stances of our athletes against the Himalayan dawn, these moments tell a story of relentless pursuit and passion. </p>
            </div>

        <ParallaxScroll images={images} />
            </div>
            </motion.div>
            );
}

const images = [
    "/images/gym1.jpeg",
    "/images/gym2.jpeg",
    "/images/gym3.jpeg",
    "/images/gym4.webp",
    "/images/gym5.webp",
    "/images/gym1.jpeg",
    "/images/gym2.jpeg",
    "/images/gym3.jpeg",
    "/images/1.webp",
    "/images/2.webp",
     "/images/3.webp",
    "/images/4.webp",
    
];
