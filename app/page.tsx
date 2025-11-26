import Image from "next/image";
import Footer from "./components/Footer/Footer";
import WppButton from "./components/WppButton/WppButton";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Recommendation from "./components/Recommendation/Recommendation";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans">

      <Navbar/>
      <Hero/>
      <Recommendation />
      <Contact />
      <About />
      <WppButton />
      <Footer/>

    </div>
    
  );
}
