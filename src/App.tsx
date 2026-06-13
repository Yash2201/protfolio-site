import { useState, useEffect, useRef } from "react";
import css from "./styles";
import { useParticles, useReveal } from "./hooks";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [countersStarted, setCountersStarted] = useState(false);

  useParticles(canvasRef);
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPct(pct);
      setScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "experience", "projects", "contact"];
      let cur = "hero";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 110) cur = id;
      });
      setActiveSection(cur);
      if (!countersStarted && window.scrollY < 200) setCountersStarted(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(() => setCountersStarted(true), 800);
    return () => window.removeEventListener("scroll", onScroll);
  }, [countersStarted]);

  return (
    <>
      <style>{css}</style>
      <canvas ref={canvasRef} className="particles-canvas" />
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />
      <div className="portfolio-root">
        <Nav scrolled={scrolled} activeSection={activeSection} />
        <Hero countersStarted={countersStarted} />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
