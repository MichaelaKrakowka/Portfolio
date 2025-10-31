import { HamburgerMenu } from "./HamburgerMenu";
import "./Header.css";
import { RevealSection } from "./RevealSection";

export const Header = () => {
  return (
    <header className="header ">
      <RevealSection>
        <div className="header_container">
          <div className="circle"></div>
          <a href="/">
            <img className="logo" src="/logo-MK.PNG" alt="logo"></img>
          </a>
          <div className="ball2"></div>

          <nav className="desktop_nav">
            <ul className="nav_links">
              <li className="nav_element">
                <a href="#about" className="nav_link">
                  O mě
                </a>
              </li>
              <li>
                <a href="#projects" className="nav_link">
                  Projekty
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile_nav">
            <HamburgerMenu />
          </div>
        </div>
      </RevealSection>
    </header>
  );
};
