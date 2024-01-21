/* eslint-disable react/prop-types */

import useMediaQuery from "../hooks/useMediaQuery";
import { navMenus } from "../utils/constants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = (props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = props?.isTopOfPage
    ? "bg-transparent"
    : "bg-orange-100 drop-shadow opacity-90";

  const scrollToDiv = (target) => {
    let targetDiv = document.getElementById(target);
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-full h-[7%] ${navbarBackground} fixed top-0 z-30 ${flexBetween} p-2`}
    >
      <div className="cursor-pointer pl-10">
        <h1 className="tracking-widest font-extrabold  text-[#F0A53E] text-4xl">
          VJ.
        </h1>
      </div>

      {isAboveMediumScreens ? (
        <div className={`${flexBetween} flex-wrap pr-10 w-[50%]`}>
          {navMenus.map((nav) => (
            <div
              key={nav.id}
              className="cursor-pointer transition duration-500 hover:text-2xl hover:text-[#800020]"
              onClick={() => scrollToDiv(nav.navId)}
            >
              {nav.title}
            </div>
          ))}
        </div>
      ) : (
        <HiOutlineMenuAlt3 className="h-10 w-10" />
      )}
    </div>
  );
};

export default Navbar;
