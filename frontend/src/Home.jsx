import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import IntroductionNav from "./components/IntroductionNav";

function Home() {
  return (
    <>
      <IntroductionNav />
      <div className="m-4 mt-10 lg:mt-4 md:mt-4 block lg:flex md:flex gap-4 ">
        <div className="sidebar h-screen overflow-y-auto">
          <Sidebar />
        </div>
        <div className="project h-screen overflow-y-0 lg:overflow-y-auto md:overflow-y-auto">
          <Projects />
        </div>
      </div>
    </>
  );
}

export default Home;
