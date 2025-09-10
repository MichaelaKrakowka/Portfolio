import React from "react";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SpeedClickGame } from "./components/SpeedClickGame";

export const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <SpeedClickGame time={2000} />
      <Footer />
    </>
  );
};
