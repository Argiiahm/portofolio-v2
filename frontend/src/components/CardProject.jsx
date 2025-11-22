import { useState, useEffect } from "react";
import axios from "axios";
import { Github } from "lucide-react";

function CardProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    const response = await axios.get("http://localhost:4000/projects");
    setProjects(response.data);
  };

  return (
    <>
      {projects.map((project) => (
        <div className="bg-[#0d223f] rounded-md w-full max-w-md my-5 cursor-pointer hover:border hover:border-purple-500">
          <div key={project.id} className="w-full h-52 overflow-hidden">
            <img
              src={project.url}
              alt="Project"
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>

          <div className="p-6">
            <h2 className="text-white text-xl font-semibold mt-4">
              {project.title}
            </h2>

            <p className="text-gray-300 mt-2 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300 mt-4">
              {JSON.parse(project.stack).map((item,index) => (
                <span key={index} className="font-medium">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-[#0f2a43] text-white rounded-lg hover:bg-[#12324e] transition">
                <span>
                  <Github />
                </span>
                <a href={project.source}>Source / Preview</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardProject;
