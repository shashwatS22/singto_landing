import {  CoachProfiles} from "./_aboutUs/coachProfiles";

export const AboutUs =() => {
    return (
        <div>
            <div className="h-full px-16 pt-10">
              
              <h1 className="text-white font-extrabold text-start text-4xl">
                  About Us
          </h1>
                <div className="text-white text-opacity-65 font-normal py-4 flex">
                    
                    <p>
                        Nestled atop the scenic landscapes of Dehradun, our rooftop Muay Thai gym is a haven for martial arts enthusiasts and fitness warriors alike. Founded by Jamy and Sakshi, a certified Muay Thai coach with a rich training and fighting legacy from the heart of Thailand, our gym is a culmination of passion, discipline, and the dream to bring authentic Muay Thai to Uttarakhand. Alongside Sakshi, an accomplished Indian trainer, our gym offers a unique blend of cultural expertise and martial arts training you won’t find anywhere else.
                    </p>

                </div>
                <h1 className="text-white font-extrabold text-start text-xl pt-10">
                Coach Profiles
                </h1>
                <CoachProfiles/>                
            </div>
        </div>

    );
}