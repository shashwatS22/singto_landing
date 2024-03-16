import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface Profile {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}


interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  progress: any; // If you have a specific type for progress (like a number or a specific object), use that type here
  range: [number, number];
  targetScale: number;
}

const Profile: React.FC<CardProps> = ({ i, title, description, src,  progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{  scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className=" grid grid-cols-1 md:grid-cols-2 relative top-[-25%] h-[80vh] w-[100vw] rounded-xl backdrop-blur-[50px] px-20 py-10 border-gray-700 border-spacing-4 border"
      >
        <div className='grid gap-10'>

          <h2 className="text-start m-0 text-4xl font-bold">{title}</h2>
            <p className="text-normal text-white text-opacity-60 ">{description}</p>
        </div>
        <div className="grid gap-10 h-full ">
          

          <div className="relative h-full rounded-[25px] overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={src}
                alt={title}
                className="object-cover w-full h-full"
                layout='fill' 
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;
