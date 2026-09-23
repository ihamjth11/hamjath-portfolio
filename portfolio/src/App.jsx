import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Flagship from "./components/Flagship";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import { Contact, Footer } from "./components/Contact";
import { TraceDivider } from "./components/Shared";
import Loader from "./components/Loader";
import useReveal from "./useReveal";

function BoardBackground() {
  return (
    <>
      <div className="board-bg" />
      <div className="board-grid" />
      <svg
        className="fixed inset-0 -z-10 pointer-events-none opacity-50"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0 140 H420 L470 190 H900 L950 240 H1600"
          stroke="#5FE0CB"
          strokeWidth="1"
          fill="none"
          opacity="0.35"
          className="flow-line animate-flow"
        />
        <path
          d="M0 760 H360 L410 710 H1050 L1100 660 H1600"
          stroke="#D08A50"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          className="flow-line animate-flow"
          style={{ animationDelay: "-1.2s" }}
        />
      </svg>
    </>
  );
}

export default function App() {
  useReveal();
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        <BoardBackground />
        <Navbar />
        <Hero />
        <Flagship />
        <TraceDivider dots={[590]} />
        <About />
        <TraceDivider dots={[300, 880]} />
        <Skills />
        <TraceDivider dots={[590]} />
        <Projects />
        <TraceDivider dots={[590]} />
        <Experience />
        <TraceDivider dots={[590]} />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}