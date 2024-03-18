'use client';

import Profile from '../../../../components/profile';


const  profiles = [
  {
    title: "Jamy",
    description: "Jamy's odyssey in martial arts is as compelling as it is distinguished. Before he graced the rings of northern Thailand, he served as a paratrooper in the French army, where discipline and resilience became his creed. This foundation of rigor and tenacity set the stage for his subsequent immersion in Muay Thai's hallowed traditions. Under the tutelage of the venerated Coach Charlton at Rage Fight Academy, Jamy not only honed his technique to perfection but also embraced a philosophy that melds the venerable wisdom of the past with the dynamic demands of contemporary fitness. His diverse background makes him a maestro of the sport, one who teaches not just the mechanics of a punch, but the strategy behind it, the history within it, and the honor that comes with it.",
    src: "/images/jamy_dummy.webp",
    
  },
  {
    title: "Sakshi Raj",
    description: "Sakshi's martial arts journey began with the precise and disciplined art of karate in her childhood, laying a robust foundation for her future in combat sports. Her transition to Muay Thai was a natural progression that led her to the heartland of the sport—Thailand. There, amid the rigorous training and the spiritual ethos of Muay Thai, Sakshi's latent potential unfurled. She emerged not just as a practitioner, but as a beacon of inspiration, embodying the power and grace of the art form. Her approach to coaching marries the intuitive fluidity from her karate days with the explosive dynamics of Muay Thai, making her an exemplary mentor for students who seek a comprehensive understanding of martial arts.",
    src: "/images/sakshi_dummy.webp",
  
  }
]

export const CoachProfiles=()=> {

  return (
    <main className='gap-10 justify-center items-center pt-20'>
      {
        profiles.map( (profile,i) => {

          return <Profile key={i} {...profile} />
        })
      }
    </main>
  )
}