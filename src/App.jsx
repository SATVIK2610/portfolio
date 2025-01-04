import "./app.scss";
import { useRef } from "react";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import TechStack from "./components/techStack/TechStack";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero contactRef={contactRef} portfolioRef={portfolioRef} />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <TechStack />
      </section>
      <div id="Portfolio" ref={portfolioRef}>
        <Portfolio />
      </div>
      <section id="Contact" ref={contactRef}>
        <Contact />
      </section>
      <Toaster />
    </div>
  );
};

export default App;