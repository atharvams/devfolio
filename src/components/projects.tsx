import ProjectCard from "./ui/project-card";
import data from "../data/projects.json";

function Projects() {
  return (
    <>
      <h1 className="text-6xl font-[family-name:var(--font-space-grotsk)] font-[300] mb-3">
        Worked On
      </h1>
      {data.map((card) => (
        <ProjectCard
        key={card.description}
          title={card.title}
          type={card.type}
          imgSrc={card.imgSrc}
          techStack={card.techStack}
          event={card.event}
          year={card.year}
          description={card.description}
          liveLink={card.liveLink}
          githubLink={card.githubLink}
          docker={card.docker}
        />
      ))}
    </>
  );
}

export default Projects;
