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
            <div>
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
              <div className="paragraph_part fade_item delay_1">
                <p className="about_paragraph">
                  Ahoj, jsem frontend developerka se slabostí pro React.
                </p>
                <p className="about_paragraph">
                  Nejvíc mě baví, když můžu vzít nápad, který mám v hlavě a
                  převést ho na obrazovku. Pokud zrovna nepracuju na projektu,
                  je dost pravděpodobné, že přemýšlím nad dalším nápadem.
                </p>
                <p>
                  Kód tvořím ve VS Code a projekt nasazuji na Netlify. V
                  portfoliu níže najdete projekty, které jsem zatím stihla
                  vytvořit.
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

          <div className="photo_part fade_item delay_1">
            <div className="circle2"></div>
            <img alt="Me in black and white" src="/photo.jpg"></img>
            <div className="ball3"></div>
          </div>
        </div>
      </RevealSection>
    </>
  );
};

// const [position, setPosition] = React.useState({
//   top: 0,
//   left: 0,
// });

// const moveBall = (min, max) => {
//   const newTop = getRandomPosition(min, max);
//   const newLeft = getRandomPosition(min, max);
//   setPosition({ top: newTop, left: newLeft });
// };
// const getRandomPosition = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
/* <div
            className="ball4"
            style={{ top: position.top, left: position.left }}
            onMouseOver={() => moveBall(100, 200)}></div> */
