
import { Hero } from "./_components/hero";
import { Inter_Tight } from "next/font/google";
import { Testimonials } from "./_components/testimonials";
import { AboutUs } from "./_components/aboutUs";
import { Gallery } from "./_components/gallery";
import { Footer } from "./_components/footer";
import { Faq } from "./_components/faq";

const inter = Inter_Tight({ subsets: ["latin"] });
const Home = () => {
    return (
        <main className={inter.className}>
        <div>
            <Hero />
                <AboutUs />
                <Gallery/>
                <Testimonials />
                <Faq/>
                <Footer/>
        </div>
    </main>
    );
}

export default Home;