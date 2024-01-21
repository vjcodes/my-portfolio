/* eslint-disable react/prop-types */
import { FaArrowRightToBracket } from "react-icons/fa6";
import { navMenus } from "../utils/constants";

const scrollToDiv = (target) => {
  let targetDiv = document.getElementById(target);
  targetDiv.scrollIntoView({ behavior: "smooth" });
};

const SideNavBar = ({ setIsMenuToggled }) => {
  return (
    <div className="h-[100%] p-4 z-40 bg-white fixed right-0 w-[50%] bg-opacity-85">
      <FaArrowRightToBracket onClick={() => setIsMenuToggled(false)} />
      <div className={`flex flex-col gap-4 mt-10 w-[100%]`}>
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
    </div>
  );
};

export default SideNavBar;
