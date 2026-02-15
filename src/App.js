import React from "react";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
// import { SpeedClickGame } from "./components/SpeedClickGame";

export const App = () => {
  return (
    <>
      <CookieConsent />
      <Header />
      <AboutMe />
      <Projects />
      {/* <SpeedClickGame /> */}
      <Footer />
    </>
  );
};
