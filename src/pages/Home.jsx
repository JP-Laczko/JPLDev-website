import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseJPLDev from "../components/WhyChooseJPLDev";
import Portfolio from "../components/Portfolio";
import WhyFullStack from "../components/WhyFullStack";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div style={{ height: '70px' }}></div>
      <Hero />
      <About />
      <WhyChooseJPLDev />
      <WhyFullStack />
      <Portfolio />
      <Contact />
    </div>
  );
}