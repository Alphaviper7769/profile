import About from "./assets/components/About";
import Codeforces from "./assets/components/Codeforces";
import Contact from "./assets/components/Contact";
import Experience from "./assets/components/Experience";
import Home from "./assets/components/Home";
import NavBar from "./assets/components/NavBar";
import Portfolio from "./assets/components/Portfolio";
import SocialLinks from "./assets/components/SocialLinks";

function App() {
  return (
    <div>
       <NavBar />
       <Home />
       <SocialLinks />
       <About />
       <Portfolio />
       <Codeforces />
       <Experience />
       <Contact />
    </div>
  );
}

export default App;
