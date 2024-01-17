/* eslint-disable react/no-unescaped-entities */
import blob from "./../assets/bgBlob.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../utils/constants";
import { handleNavigateToNewTab } from "../utils/utilFunctions";

const socialAccountsClassName =
  "h-8 w-8 cursor-pointer transition duration-500 hover:opacity-50";

const Banner = () => {
  return (
    <div className="flex h-[70%] w-full border  box-border bg-[#F3F3F3]">
      {/* Name Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="h-full flex flex-col justify-center mx-auto w-[30%]"
      >
        <h3 className="font-bold text-xl text-gray-20 mb-2">Hello</h3>
        <h1 className="font-bold text-6xl mb-2 tracking-wider">I'm Vinayak</h1>
        <h2 className="text-gray-50 text-4xl mb-2">Software Engineer</h2>
        <h2 className="text-gray-50 text-2xl mb-2">Frontend Developer</h2>

        {/* SOCIALS SECTION */}
        <div className="flex gap-4">
          <FaGithub
            className={socialAccountsClassName}
            onClick={() => handleNavigateToNewTab(GITHUB_URL)}
          />
          <FaLinkedin
            className={socialAccountsClassName}
            onClick={() => handleNavigateToNewTab(LINKEDIN_URL)}
          />
        </div>
      </motion.div>
      {/* MY IMAGE SECTION */}
      <div className="h-full w-[55%]">
        <img src={blob} alt="blob" className="h-[100%]" />
      </div>
    </div>
  );
};

export default Banner;
