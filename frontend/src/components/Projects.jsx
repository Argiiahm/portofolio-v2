import CardProject from "./CardProject";

function Projects() {
  return (
    <div className="mt-5 lg:mt-0 md:mt-0">
      <div className="text-center lg:text-left md:text-left">
        <h1 className="text-white font-bold text-3xl">
          Projects Experience
        </h1>
        <span className="text-zinc-400">
          A Collection Of Projects l've Worked On.
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
        <CardProject />
      </div>
    </div>
  );
}

export default Projects;
