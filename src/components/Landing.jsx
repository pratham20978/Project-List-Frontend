import Navbar from "./Navbar";
import Footer from "./Footer";
import Mangage from "./Mangage";
import About from "./About";
import OurProjects from "./OurProjects";
import HappyClients from "./HappyClients";

const Landing = () => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="flex flex-col min-h-screen gap-10 between">
        <Mangage />

        <About />

        <OurProjects />

        <HappyClients />
      </div>
      <Footer className="" />
    </div>
  );
};

export default Landing;
