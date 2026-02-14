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
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
  const [visibleEmail, setVisibleEmail] = React.useState(false);

  return (
    <>
      <RevealSection>
        <div className="about_container" id="about">
          <div className="ball"></div>
          <div className="about_part">
            <h1 className="my_name">Michaela Krakówka</h1>
            <div className="contact">
              <div className="contact_icons">
                <a
                  href="https://www.github.com/MichaelaKrakowka"
                  target="blank"
                  rel="noopener noreferrer"
                  className="github_card fade_item delay_1">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/michaela-krakowka-8abbb2b1/"
                  target="blank"
                  rel="noopener noreferrer"
                  className="github_card fade_item delay_1">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <div className="github_card fade_item delay_1 email_icon">
                  {visibleEmail ? (
                    <p
                      onClick={() => setVisibleEmail(false)}
                      style={{
                        cursor: "pointer",
                        paddingLeft: "8px",
                      }}>
                      michaela.krakowka@gmail.com
                    </p>
                  ) : (
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      onClick={() => setVisibleEmail(true)}
                    />
                  )}
                </div>
              </div>
              <div>
                <p className="location fade_item delay_1">
                  <FontAwesomeIcon className="icon_card" icon={faLocationDot} />{" "}
                  Ostrava
                </p>
              </div>
            </div>
            <div>
              <div className="paragraph_part fade_item delay_2">
                <p className="about_paragraph">Vítejte na mém portfoliu!</p>
                <p className="about_paragraph fade_item delay_3">
                  Jsem JavaScript Frontend Developerka se zaměřením na tvorbu
                  webových aplikací. Na této stránce najdete projekty, které
                  jsem navrhla, vytvořila a zveřejnila na internetu.{" "}
                </p>

                <p className="about_paragraph fade_item delay_4">
                  {" "}
                  Pro kontakt můžete využít LinkedIn nebo e-mail uvedený na této
                  stránce.
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

          <div className="photo_part fade_item ">
            <div className="circle3"></div>
            <img
              className="fade_item delay_1"
              alt="Me in black and white"
              src="/photo.jpg"></img>
          </div>
          <div className="ball3"></div>
        </div>
      </RevealSection>
    </>
  );
};
