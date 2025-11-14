import profile from "../assets/images/Profile.jpg";
import MedsosCard from "./MedsosCard";
import Statats from "./Statats";
import Skils from "./Skils";

function Profile() {
  return (
    <div className="max-w-2xl">
        <div className="flex gap-6 items-center">
            <div className="w-32">
               <img className="aspect-square object-cover rounded-full border-4 border-emerald-300" src={profile} alt="Profile" />
            </div>
            <div>
                <h1 className="text-4xl font-semibold text-white">Argi Ahmes
                     <span className="block">Halepiyandra</span>
                </h1>
                <p className="text-gray-500 font-semibold text-2xl">Web Developer</p>
            </div>
        </div>
        <div className="my-8">
        <p className="text-gray-400 text-[18px]">
                A passionate Web Developer from Indonesia,
                crafting beautiful and functional web applications
                with a focus on user experience and robust
                backend solutions.
            </p>
        </div>
         <MedsosCard/>
         <Statats/>
         <Skils/>

    </div>
  )
}

export default Profile