/* eslint-disable react/prop-types */
import cv from "./../assets/cv/resume.pdf";

const CustomButton = ({ icon, text, handleClick }) => {
  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      className="flex items-center border w-fit rounded-r-full rounded-l-full mt-4 cursor-pointer shadow-sm backdrop-blur-md transition duration-500 hover:bg-orange-600 hover:text-white"
    >
      <div className="mx-4 text-sm tracking-wider ">{text}</div>
      <button className="border p-2 rounded-full bg-yellow-400">{icon}</button>
    </div>
  );
};

export const DownloadCvButton = ({ icon, text, handleClick }) => {
  return (
    <a href={cv} download="VINAYAK_JAISWAL_RESUME">
      <CustomButton icon={icon} text={text} handleClick={handleClick} />
    </a>
  );
};

export default CustomButton;
