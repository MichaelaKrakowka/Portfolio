import "./Header.css";

export const Header = () => {
  return (
    <header className="header ">
      <div className="header_container">
        <div className="circle"></div>
        <a href="/">
          <img className="logo" src="/logo-MK.PNG" alt="logo"></img>
        </a>
        <div className="ball2"></div>
        <nav>
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
            <li>
              <a href="#contact" className="nav_link">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
