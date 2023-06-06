import About from "../components/About";
import Contact from "../components/Contact";
// import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <div className="px-2 md:w-3/4 lg:w-1/2 m-auto">
      {/* <Jumbotron /> */}
      <About />
      <Contact />
    </div>
  );
};

export default Home;
