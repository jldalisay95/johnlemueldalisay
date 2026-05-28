import { Contact } from "./components/Contact";
import { Dashboards } from "./components/Dashboards";
import { Experience } from "./components/Experience";
import { FeaturedWork } from "./components/FeaturedWork";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Skills } from "./components/Skills";
import { TrainingCommunity } from "./components/TrainingCommunity";
import { WhatIDo } from "./components/WhatIDo";
import { useEffect } from "react";
import { initGA, trackPageView } from "./lib/analytics";

export default function App() {
  useEffect(() => {
    initGA();
    trackPageView();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturedWork />
        <WhatIDo />
        <Projects />
        <Dashboards />
        <Publications />
        <Skills />
        <Experience />
        <TrainingCommunity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
