import { projectsData } from "./data";
import { ProjectCard } from "./ProjectCard";
import { RevealSection } from "./RevealSection";
import "./Projects.css";

export const Projects = () => {
  return (
    <RevealSection>
      <div className="project_container" id="projects">
        <div className="project_content">
          <h2 className="headings fade_item delay_0">Projekty</h2>
          <div className="project_cards ">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
