'use client'
import { motion, Variants } from "framer-motion";

const data = [
    {
        "question": "Do we provide equipment?",
        "answer": "Yes, everything is provided at our gym. There is no need to purchase any equipment."
    },
    {
        "question": "How many students are there in a batch?",
        "answer": "We keep our batches small, with a maximum of four students per batch, ensuring personalized attention for each member."
    },
    {
        "question": "Can any level join?",
        "answer": "Absolutely, our doors are open to everyone, from beginners to advanced practitioners of Muay Thai."
    },
    {
        "question": "What are the gym’s operating hours?",
        "answer": "Our gym is open for sessions early in the morning and in the evening to accommodate your schedule. You can find the precise hours listed on our schedule page."
    },
    {
        "question": "What should I bring to my first session?",
        "answer": "All you need to bring is your enthusiasm and a readiness to learn. Wear comfortable workout attire and bring a water bottle. We’ll take care of the rest, providing all the necessary equipment for training."
    },
    {
        "question": "Do you offer any trial session?",
        "answer": "Yes, we do. We offer the first session as a trial session."
    }
];


export const Faq = () => {
    const cardVariants: Variants = {
        offscreen: {
            y: 400,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "easeIn",
                bounce: 1,
                duration: 1.5
            }
        }
    };

    return (
            <div className="px-16 py-20 ">
        <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
            
                <div className="pb-10">

                <h2 className="text-2xl text-center font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-gray-200">
                    Frequently Asked Questions
                </h2>
                </div>
           
            <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                    {data.map((faq, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-gray-200">
                                {faq.question}
                            </h3>
                            <p className="mt-2 text-white text-opacity-60">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            </motion.div>
            </div>
    );
};