'use client'
import { CoachProfiles } from "./_aboutUs/coachProfiles";
import { motion,Variants } from "framer-motion";

import Image from "next/image";

export const AboutUs = () => {
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
      duration: 2
    }
  }
};
    return (
        <div>
            
            <div className="h-full px-16 pt-10">
            <motion.div 
                initial="offscreen"
      whileInView="onscreen"
    variants={cardVariants}>
                <section className="bg-gray-1000 py-12">
        <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight">Welcome to Singto Muay Thai</h1>
            <p className="text-white text-opacity-60 ">
              We are committed to providing a high-energy, supportive environment for all our members. At Iron Strong
              Gym, we believe that strength is not just physical,  mental. Our team of experienced trainers is
              dedicated to helping you achieve your fitness goals, whether a seasoned athlete or just starting
              your fitness journey. We offer a wide range of amenities and services to make your experience at our gym
              exceptional. Join us and unleash your inner strength.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Iron Strong Gym"
              className="rounded-xl object-cover"
              height="300"
              src="/images/aboutUs.webp"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width="500"
            />
          </div>
        </div>
      </div>
                    </section>
                </motion.div>
                <motion.div 
                initial="offscreen"
      whileInView="onscreen"
    variants={cardVariants}>
                <h1 className="text-white font-extrabold text-start text-4xl pt-10">
                Meet our Instructors
                </h1>
                <CoachProfiles/>                
            </motion.div>
            </div>
                
        </div>

    );
}