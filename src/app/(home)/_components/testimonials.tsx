"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../../components/infinite-moving-cards";
import { motion,Variants } from "framer-motion";

export function Testimonials() {
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
        <motion.div initial="offscreen"
            whileInView="onscreen"
        variants={cardVariants}>
        <div className="h-full">
          <div className="px-16 py-20">
              
              <h1 className="text-white font-extrabold text-start text-4xl">
                  Testimonials
          </h1>
          <div className="text-white text-opacity-65 font-normal pt-4">
              <p>
                  Join a community that values growth, health, and martial arts. Hear from our members about their journeys of transformation, achievement, and the unforgettable experience of training under the Dehradun sky.
              </p>
          </div>
          </div>
        
            <div
                className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
            >

          <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        />
        </div>
            </div>
            </motion.div>
  );
}

const testimonials = [
  {
    quote:
      "We had a fantastic experience learning Muay Thai in Dehradun! The trainers are incredibly professional and friendly, making sure everyone gets personal attention. It's totally worth the investment if you're looking to pick up an interesting hobby.",
    name: "Shashwat Sharma",
  },
  {
    quote:
          "A comfortable gym with good atmosphere. Even if you are new to self defence or fitness, the coaches are very competent and provide guidance applicable to your level of experience. Well worth the price, especially when going with friends.",
      name: "Rishuraj Singh",
    
  },
  {
    quote: "We absolutely loved our experience learning Muay Thai! The trainers are friendly and professional, making each session worth the money. Highly recommend if you're looking for a personal touch in learning an exciting sport.",
    name: "Monika Chauhan",
  },
  {
    quote:
      "The attention level given to each individual is beyond amazing. You feel absolutely engaged throughout your session.",
    name: "Varun Shamsher",
  },
  {
    quote:
          "They really work on your techniques! And if you’re a beginner, they make sure you have all the corrections you need. Thank you for bringing Real Muay Thai to dehradun!",
      name: "Aryan Jindal",
  },
];
