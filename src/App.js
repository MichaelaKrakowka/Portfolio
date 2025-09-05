import React from "react";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};
