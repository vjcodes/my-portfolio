/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const TechIcon = ({ icon, techName }) => {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1 }}
    variants={{
      hidden: { opacity: 0, x: 0 },
      visible: { opacity: 1, x: 0 },
    }}
      className="flex flex-col items-center"
    >
      <div className="h-[6rem] w-[6rem] bg-white backdrop-blur-2xl border border-gray-200 rounded-full p-4 shadow-sm hover:bg-black cursor-pointer">
        <img src={icon} />
      </div>
      <div className="mt-4">{techName}</div>
    </motion.div>
  );
};

export default TechIcon;
