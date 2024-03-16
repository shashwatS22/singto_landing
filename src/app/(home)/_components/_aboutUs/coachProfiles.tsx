'use client';

import Profile from '../../../../components/profile';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

const  projects = [
  {
    title: "Jamy",
    description: "From the vibrant rings of northern Thailand to the serene rooftop of Dehradun, Jamy's journey is one of relentless passion for Muay Thai. Certified under the prestigious Coach Charlton at Rage Fight Academy, his training philosophy combines rigorous traditional techniques with modern fitness principles.",
    src: "/placeholder.webp",
    
  },
  {
    title: "Sakshi Raj",
    description:"Sakshi brings a wealth of knowledge and an indomitable spirit to our team. Her dedication to Muay Thai and fitness is unmatched, making her an inspirational coach for students of all ages and levels.", src: "/placeholder.webp",
  
  }
]

export const CoachProfiles=()=> {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className="relative">
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Profile url={''} key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}