import React from "react";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <Header />
      <Element name="home">
        <section id="home">
          <HeroSection />
        </section>
      </Element>

     <Element name="education">
        <section id="education">
          <Education />
        </section>
      </Element> 


      <Element name="skills">
        <section id="skills">
          <Skills />
        </section>
      </Element>

      <Element name="work">
        <section id="work">
          <Work />
        </section>
      </Element>

      <Element name="projects">
        <section id="projects">
          <Projects />
        </section>
      </Element>

      <Element name="contact">
        <section id="contact">
          <Contact />
        </section>
      </Element>
    </div>
  );
}

export default App;

