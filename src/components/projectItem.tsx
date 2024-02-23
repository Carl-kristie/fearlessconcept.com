import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProjectItem = ({ src, title, desc }: { src: string, title: string, desc: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      console.log(`${title} is in view`);
    }
  }, [inView]);

  return (
    <div className={`project-item ${inView ? "scale-up" : "scale-down"}`} ref={ref}>
       <div className="project-text">
        <h2>{title}</h2>
      </div>
      <img src={src} alt="project" className="projectImage" />
      <div className="project-text desc"><h2>{desc}</h2></div>
    </div>
  );
};

export default ProjectItem;