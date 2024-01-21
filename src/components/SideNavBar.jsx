/* eslint-disable react/prop-types */
import { FaArrowRightToBracket } from "react-icons/fa6";
import { navMenus } from "../utils/constants";
import { motion } from "framer-motion";

const scrollToDiv = (target) => {
  let targetDiv = document.getElementById(target);
  targetDiv.scrollIntoView({ behavior: "smooth" });
};

const SideNavBar = ({ setIsMenuToggled }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: +50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="h-[100%] p-4 z-40 bg-white fixed right-0 w-[50%] bg-opacity-85"
    >
      <FaArrowRightToBracket onClick={() => setIsMenuToggled(false)} />
      <div className={`flex flex-col gap-4 mt-10 w-[100%]`}>
        {navMenus.map((nav) => (
          <div
            key={nav.id}
            className="cursor-pointer transition duration-500 hover:text-2xl hover:text-[#800020]"
            onClick={() => {
              scrollToDiv(nav.navId);
              setIsMenuToggled(false);
            }}
          >
            {nav.title}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SideNavBar;
