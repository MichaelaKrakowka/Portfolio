import "./Header.css";

export const Header = () => {
  return (
    <header className="header container">
      <div className="header_container">
        <a href="/" className="logo">
          MK
        </a>
        <nav>
          <ul className="nav_links">
            <li>
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
