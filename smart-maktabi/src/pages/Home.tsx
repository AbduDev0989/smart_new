import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Teachers from "@/components/Teachers";
import News from "@/components/News";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Teachers />
          <News />
          <Achievements />
          <Gallery />
          <Registration />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
