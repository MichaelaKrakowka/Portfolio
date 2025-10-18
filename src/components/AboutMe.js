import React from "react";
import "./AboutMe.css";
import { RevealSection } from "./RevealSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export const AboutMe = () => {
  return (
    <>
      <RevealSection>
        <div className="about_container" id="about">
          <div className="ball"></div>
          <div className="about_part">
            <h1 className="my_name">Michaela Krakówka</h1>
            <div className="contact">
              <a
                href="https://www.github.com/MichaelaKrakowka"
                target="blank"
                rel="noopener noreferrer"
                className="github_card fade_item delay_1">
                <FontAwesomeIcon className="icon_card" icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/michaela-krakowka-8abbb2b1/"
                target="blank"
                rel="noopener noreferrer"
                className="github_card fade_item delay_1">
                <FontAwesomeIcon className="icon_card" icon={faLinkedin} />
              </a>
            </div>
            <div>
              <div className="paragraph_part fade_item delay_2">
                <p className="about_paragraph">
                  Jsem JavaScript frontend vývojářka se slabostí pro React.
                </p>
                <p className="about_paragraph">
                  Baví mě vytvářet si své vlastní projekty a převádět je na
                  obrazovku. Pokud zrovna na nějakém nepracuji, je dost
                  pravděpodobné, že přemýšlím již nad dalším.{" "}
                </p>
                <p className="about_paragraph">
                  {" "}
                  Mimo práci na svých projektech, bych se ráda stala součástí
                  týmu, kde bych mohla dále růst a stát se tak plnohodnotným
                  členem. Jsem otevřená práci na zkrácený i plný úvazek, ideálně
                  alespoň s částečným docházením do firmy, abych toho co nejvíce
                  pochytila. Navíc si myslím, že osobní kontakt a kávu s týmem
                  žádný monitor nenahradí.{" "}
                </p>
              </div>
              <div className="skills_part">
                <FontAwesomeIcon
                  icon={faGit}
                  size="lg"
                  className="skill_icon"
                />
                <FontAwesomeIcon
                  icon={faReact}
                  size="lg"
                  className="skill_icon"
                />
                <FontAwesomeIcon icon={faJs} size="lg" className="skill_icon" />
                <FontAwesomeIcon
                  icon={faSass}
                  size="lg"
                  className="skill_icon"
                />
                <FontAwesomeIcon
                  icon={faCss3}
                  size="lg"
                  className="skill_icon"
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="lg"
                  className="skill_icon"
                />
              </div>
            </div>{" "}
          </div>

          <div className="photo_part delay_3">
            {/* <div className="circle2"></div> */}
            <div className="circle3"></div>
            <img
              className="fade_item "
              alt="Me in black and white"
              src="/photo.jpg"></img>
            <div className="ball3"></div>
          </div>
        </div>
      </RevealSection>
    </>
  );
};
