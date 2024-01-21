/* eslint-disable react/prop-types */
import { MdWorkHistory } from "react-icons/md";
import { motion } from "framer-motion";

const ExperienceBox = ({ experience }) => {
  const { title, description, companyName, duration } = experience;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1.0 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex w-full sm:w-4/12 min-h-[10rem] p-4 rounded-xl cursor-pointer hover:bg-gray-100 bg-opacity-10"
    >
      <div className="flex flex-col items-center w-fit">
        <button className="border w-fit rounded-full p-2 bg-yellow-400">
          <MdWorkHistory color="white" />
        </button>
        <div className="h-full w-[1.5px] bg-gray-300"></div>
      </div>

      <div className="ml-2">
        <div className="bg-gray-300 rounded-2xl px-4 py-1 w-fit text-xs">
          {duration}
        </div>

        {/* JOB TITLE */}
        <div className="my-2 tracking-wider font-extrabold">
          {title} -{" "}
          <span className="font-extralight italic text-gray-600">
            {companyName}
          </span>
        </div>

        {/* JOB DESCRIPTION */}
        <div className="font-sans text-sm text-gray-700">{description}</div>
      </div>
    </motion.div>
  );
};

export default ExperienceBox;
