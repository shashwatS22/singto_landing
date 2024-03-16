"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../../components/image-slider";



export function Hero() {
  const images = [
      "/images/1.webp",
     "/images/2.webp",
     "/images/3.webp",
     "/images/4.webp",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Ascend to New Heights in Muay Thai <br/>with Singto
        </motion.p>
       
      </motion.div>
    </ImagesSlider>
  );
}
