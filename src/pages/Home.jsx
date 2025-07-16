import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseJPLDev from "../components/WhyChooseJPLDev";
import Portfolio from "../components/Portfolio";
import WhyFullStack from "../components/WhyFullStack";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseJPLDev />
      <WhyFullStack />
      <Portfolio />
      <Contact />
    </div>
  );
}