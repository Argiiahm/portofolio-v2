import { Github, Linkedin, Instagram } from 'lucide-react'

function MedsosCard() {
  return (
    <div className="my-8 text-white font-semibold text-2xl flex gap-4">
      <div className="border p-3 border-[#15273d] shadow rounded-md cursor-pointer hover:bg-gray-800">
        <Github />
      </div>
      <div className="border p-3 border-[#15273d] shadow rounded-md cursor-pointer hover:bg-gray-800">
        <Linkedin />
      </div>
      <div className="border p-3 border-[#15273d] shadow rounded-md cursor-pointer hover:bg-gray-800">
        <Instagram />
      </div>
    </div>
  );
}

export default MedsosCard;
