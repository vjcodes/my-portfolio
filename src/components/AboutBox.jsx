/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const AboutBox = ({ number, text }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2 }}
      variants={{
        hidden: { opacity: 0, x: 0},
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="bg-[#eef14c] backdrop-blur-md border border-solid border-white border-opacity-30 rounded-lg shadow-md bg-opacity-25 p-2 w-[10rem]">
        <div className="flex">
          <div className="font-extrabold text-4xl">{number}</div>
          <div className="font-extrabold text-2xl ml-1">+</div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#d27037] mr-2 w-[15px] h-[1.5px]"></div>
          <div className="font-bold tracking-wider italic">{text}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutBox;
