import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_paragraph">
        <p>© 2025 | Design & Develop by Michaela Krakówka</p>

        <p>michaela.krakowka@gmail.com</p>
        <div>
          <a
            href="https://www.github.com/MichaelaKrakowka"
            target="blank"
            rel="noopener noreferrer"
            className="github_card ">
            <FontAwesomeIcon className="icon_card" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/michaela-krakowka-8abbb2b1/"
            target="blank"
            rel="noopener noreferrer"
            className="github_card ">
            <FontAwesomeIcon className="icon_card" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};
