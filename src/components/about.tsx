import ExperienceCard from "./ui/experience-card";
import experinces from "../data/experince.json";

function About() {
  return (
    <div className="grid grid-cols-10 gap-4 my-10 py-10 h-screen">
      <div className="col-span-7 rounded p-4 text-3xl font-[family-name:var(--font-space-grotsk)]">
        <h1 className="pb-10">
          I'm a{" "}
          <span className="font-[family-name:var(--font-satisfy)] text-4xl">
            full-stack
          </span>{" "}
          developer passionate about building sleek and efficient web
          applications. I’m always on the{" "}
          <span className="font-[family-name:var(--font-satisfy)] text-4xl">
            lookout for exciting full-time roles and freelance
          </span>{" "}
          projects.
        </h1>
        <h1 className="pb-10">
          Beyond coding, I love exploring new technologies as a hobby—they
          fascinate me! I also have a keen interest in 3D animation and
          modeling, constantly experimenting and learning in that space.
        </h1>
        <h1 className="text-2xl">
          When I’m not working, you’ll find me diving into tech blogs, tinkering
          with side projects, or planning my next big goal."
        </h1>
      </div>
      <div className="col-span-3 border-2 rounded-[20px] p-4 border-[var(--card-border)]">
        <div className="text-center text-[var(--card-border)] mb-4 font-[600]">
          <h1 className="text-2xl">Experience</h1>
        </div>
        <div className="flex flex-col justify-start">
          {experinces.map((item) => (
            <ExperienceCard
              key={item.title}
              title={item.title}
              instName={item.instName}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
