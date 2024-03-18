'use client'
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
interface Profile {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}


interface CardProps {
  title: string;
  description: string;
  src: string;

}

const Profile: React.FC<CardProps> = ({   title, description, src}) => {
const imageVariants: Variants = {
  offscreen: {
      x: -400,
      opacity:0,
  },
  onscreen: {
      x: 0,
      opacity:1,
    transition: {
      type: "easeIn",
      bounce: 1,
      duration: 1.5
    }
  }
};
  const textVariants: Variants = {
  offscreen: {
      x: 400,
      opacity:0,
      
  },
  onscreen: {
      x: 0,
     
      opacity:1,
    
    transition: {
      type: "easeIn",
      bounce: 1,
      duration: 1.5
    }
  }
};

  
  return (
    <div   className="h-[100vh] w-[80vw] items-center justify-center top-10 bottom-10 mx-auto">
      <div 
 
        className=" grid gap-10 grid-cols-2 relative  rounded-xl px-20 py-10 "
      >
          <div className="">
          

                <motion.div className="relative h-full rounded-xl overflow-hidden" initial="offscreen" whileInView="onscreen" variants={imageVariants}>

                  <div
                  className="w-full h-[80vh]"

                  >
                  <Image
                    fill
                    src={src}
                    alt={title}
                    className="object-cover"
                    
                  />
                  </div>
                </motion.div>
          </div>
       
        <motion.div initial="offscreen" whileInView="onscreen" variants={textVariants}>
          
          <h2 className="text-center m-0 py-4 text-3xl font-bold">{title}</h2>
            <p className="text-normal text-white text-opacity-60 ">{description}</p>
        </motion.div>
          
      </div>
    </div>
  );
}

export default Profile;
