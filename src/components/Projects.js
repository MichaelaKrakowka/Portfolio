import { projectsData } from "./data";
import { ProjectCard } from "./ProjectCard";
import { RevealSection } from "./RevealSection";
import "./Projects.css";

export const Projects = () => {
  return (
    <RevealSection>
      <div className="project_container" id="projects">
        <div className="project_content">
          <h2 className="headings ">Projekty</h2>
          <div className="project_cards fade_item delay_1">
            {projectsData.map((title, index) => (
              <ProjectCard key={index} {...title} />
            ))}
          </div>
        </div>
        <div className="circle3"></div>
      </div>
    </RevealSection>
  );
};
