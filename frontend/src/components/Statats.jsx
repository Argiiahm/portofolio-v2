import CardStats from "./CardStats";
import { Briefcase, BookOpen, Activity } from "lucide-react";

function Statats() {
  return (
    <div className="p-5 bg-[#0d223f] rounded-xl">
      <h1 className="text-white text-xl mb-4 font-semibold">Stats</h1>

      <div className="grid grid-cols-2 gap-4">
        <CardStats icon={Briefcase} value="1 +" title="Years Of" subtitle="Experience" />
        <CardStats icon={BookOpen} value="5 +" title="Projects" subtitle="Completed" />
        <CardStats icon={Activity} value="300 +" title="Commit" subtitle="This Year" />
        <CardStats icon={Briefcase} value="1 +" title="Years Of" subtitle="Experience" />
      </div>
    </div>
  );
}

export default Statats;
