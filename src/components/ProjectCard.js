import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const ProjectCard = ({
  image,
  title,
  description,
  website,
  visibility,
  github,
}) => {
  return (
    <div className="container_card">
      <div className="content_card">
        <div>
          <h4 className="heading_card">{title}</h4>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="github_card">
            <p
              className={`visibility_card  ${
                visibility === "public" ? "public_bg" : "private_bg"
              }`}>
              {visibility}
              <FontAwesomeIcon className="icon_card" icon={faGithub} />
            </p>
          </a>
          <p className="text_card">{description}</p>
        </div>
        <div className="img_content">
          <a href={website} target="_blank" rel="noopener noreferrer">
            <img className="img_card" src={image} alt="Ukázka projektu" />
          </a>
        </div>
      </div>
    </div>
  );
};
