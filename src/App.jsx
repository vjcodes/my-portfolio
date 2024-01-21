import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import SideNavBar from "./components/SideNavBar";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <ParallaxProvider>
      <div className="app h-[100vh] w-[100vw]">
        <Navbar
          isTopOfPage={isTopOfPage}
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
        {isMenuToggled && <SideNavBar setIsMenuToggled={setIsMenuToggled}/>}
        <Home />
      </div>
    </ParallaxProvider>
  );
}

export default App;
