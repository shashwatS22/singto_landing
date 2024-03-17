
import { Hero } from "./_components/hero";
import { Inter_Tight } from "next/font/google";
import { Testimonials } from "./_components/testimonials";
import { AboutUs } from "./_components/aboutUs";
import { Gallery } from "./_components/gallery";

const inter = Inter_Tight({ subsets: ["latin"] });
const Home = () => {
    return (
        <main className={inter.className}>
        <div>
            <Hero />
                <AboutUs />
                <Gallery/>
                <Testimonials/>
        </div>
    </main>
    );
}

export default Home;