"use client";
import { ParallaxScroll } from "../../../components/parallax-scroll";

export function Gallery() {

    return(
        <div className="h-full px-16 py-20">
            <div className="mb-32">

            <h1 className="text-white font-extrabold text-start text-4xl">
                Moments of Mastery
            </h1>
        <p className="text-white text-opacity-65 font-normal py-8">Witness the pulse of Singto Muay Thai through our curated gallery. Each photo captures the essence of discipline, the spirit of our fighters, and the majestic ambiance of our rooftop dojo. From the sweat-drenched smiles of achievement to the poised stances of our athletes against the Himalayan dawn, these moments tell a story of relentless pursuit and passion. Scroll through snapshots of training sessions, triumphs, community events, and the serene beauty that frames our daily practice. It’s not just a gallery—it’s the visual heartbeat of our gym.</p>
            </div>

        <ParallaxScroll images={images} />
    </div>);
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
