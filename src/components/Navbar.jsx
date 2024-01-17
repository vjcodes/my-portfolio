/* eslint-disable react/prop-types */

import { navMenus } from "../utils/constants";

const Navbar = (props) => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = props?.isTopOfPage
    ? "bg-transparent"
    : "bg-orange-100 drop-shadow opacity-90";
  return (
    <div
      className={`w-full h-[7%] ${navbarBackground} fixed top-0 z-30 ${flexBetween} p-2`}
    >
      <div className="cursor-pointer pl-10">
        <h1 className="tracking-widest font-extrabold  text-[#F0A53E] text-4xl">
          VJ.
        </h1>
      </div>

      <div className={`${flexBetween} flex-wrap pr-10 w-[50%]`}>
        {navMenus.map((nav) => (
          <div
            key={nav.id}
            className="cursor-pointer transition duration-500 hover:text-2xl hover:text-[#800020]"
          >
            {nav.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
