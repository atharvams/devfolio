import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  type: string;
  imgSrc: string;
  techStack: string[];
  event: string;
  year: string;
  description: string;
  liveLink: string;
  githubLink: string;
  docker: string;
}

function ProjectCard({
  title,
  type,
  imgSrc,
  techStack,
  event,
  year,
  description,
  liveLink,
  githubLink,
  docker,
}: ProjectCardProps) {
  return (
    <div className="p-4">
      {/* titles */}
      <h1 className="text-5xl font-[family-name:var(--font-space-grotsk)] pb-2">
        Wincenzo
      </h1>
      <h2 className="text-2xl font-[family-name:var(--font-space-grotsk)] text-[var(--card-border)] pb-2">
        Type of app
      </h2>
      {/* img */}
      <div className="grid grid-cols-10">
        <div className="col-span-8 mr-4">
          <img
            src="nature.jpg"
            alt="project-img"
            className="object-cover rounded-2xl p-1"
          />
        </div>
        <div className="col-span-2">
          <h1 className="font-[family-name:var(--font-space-grotsk)] text-[var(--card-border)] text-3xl text-center">
            Tech Stack
          </h1>
          <div>HTML, CSS, JAVASCRIPT</div>
        </div>
      </div>
      {/* texts */}
      <div className="flex gap-4">
        <div className="min-w-[20%] p-2">
          <p className="text-xl font-[family-name:var(--font-space-grotsk)] text-[var(--card-border)]">
            Type
          </p>
          <p>Web APP</p>
          <p className="text-xl font-[family-name:var(--font-space-grotsk)] text-[var(--card-border)]">
            Event
          </p>
          <p>College project</p>
          <p className="text-xl font-[family-name:var(--font-space-grotsk)] text-[var(--card-border)]">
            Year
          </p>
          <p>2022</p>
        </div>
        <div className="p-2">
          <h1 className="text-xl font-[family-name:var(--font-space-grotsk)] text-[var(--card-border)]">
            Description
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            similique, voluptatem praesentium minima incidunt sed amet maxime
            adipisci et aliquid nisi ipsa temporibus vero consequatur voluptate
            non tempora odit. Nam.
          </p>
        </div>
        <div className="w-[20%] p-5 flex flex-col justify-start gap-2 font-[family-name:var(--font-space-grotsk)]">
          <Link href={""}>
            <div className="flex items-center ">
              <FaExternalLinkAlt className="inline size-3" />
              <p className="p-2">Visit </p>
            </div>
          </Link>
          <Link href={""}>
            <div className="flex items-center">
              <FaGithub className="inline size-3" />
              <p className="p-2">Github</p>
            </div>
          </Link>
          <Link href={""}>
            <div className="flex items-center">
              <FaDocker className="inline size-4" />
              <p className="p-2">Docker </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
