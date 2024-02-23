import "../index.css";
import jwilimited from "../assets/jwilimited.webp";
import srgc from "../assets/srgc.webp";
import jaystore from "../assets/jaystore.webp";
import rccg from "../assets/rccg.webp";
import ProjectItem from "../components/projectItem";

function Projects() {
  return (
    <>
      <section className="projects-section">
        <h1 className="project-title">PROJECTS</h1>
        <div className="projects-container">
          <ProjectItem src={jwilimited} title="JWILIMITED" desc="An Electrical Company Website"/>
          <ProjectItem src={srgc} title="SRGC" desc="A Maritime Company Website"/>
          <ProjectItem src={jaystore} title="JAYSTORE" desc="An Anime Merch Store" />
          <ProjectItem src={rccg} title="RCCG HOD" desc="A Church Website" />
        </div>
      </section>
    </>
  );
}

export default Projects;
