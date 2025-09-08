import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_paragraph">
        <p>© 2025 | Design & Develop by Michaela Krakówka</p>
      </div>
      <div className="footer_icons">
        <a className="icon_github" href="https://github.com/MichaelaKrakowka">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          className="icon_linkedin"
          href="https://www.linkedin.com/in/michaela-krakowka-8abbb2b1">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
    </div>
  );
};
