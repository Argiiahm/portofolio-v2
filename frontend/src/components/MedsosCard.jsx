import { Github, Linkedin, Instagram } from "lucide-react";

function MedsosCard() {
  return (
    <div className="my-8 text-white font-semibold text-2xl flex gap-4">
      <div className="border p-3 border-[#15273d] shadow rounded-md cursor-pointer hover:bg-gray-800">
        <a href="https://github.com/Argiiahm">
          <Github />
        </a>
      </div>
      <div className="border p-3 border-[#15273d] shadow rounded-md cursor-pointer hover:bg-gray-800">
        <a href="https://www.linkedin.com/in/argi-ahmes-halepiyandra-6b4403329">
          <Linkedin />
        </a>
      </div>
      <div className="border p-3 border-[#15273d] shadow rounded-md cursor-pointer hover:bg-gray-800">
        <a href="https://www.instagram.com/argiiahm">
          <Instagram />
        </a>
      </div>
    </div>
  );
}

export default MedsosCard;
