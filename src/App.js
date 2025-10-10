import React from "react";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { SpeedClickGame } from "./components/SpeedClickGame";

export const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      {/* <SpeedClickGame /> */}
      <Footer />
    </>
  );
};
