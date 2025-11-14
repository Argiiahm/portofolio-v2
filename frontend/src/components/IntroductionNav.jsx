import { Navigate, Link } from "react-router-dom";

function IntroductionNav() {
  return (
    <div className="bg-purple-500 hidden lg:flex md:flex justify-center">
      <span className="text-white flex items-center gap-4">
        <span className="font-bold">Introduction</span> -Lets Connect!
        <Link to="/login" className="bg-green-500 px-6 py-2">Masuk</Link>
      </span>
    </div>
  );
}

export default IntroductionNav;
