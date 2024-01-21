import { ImDownload } from "react-icons/im";
import cv from "./../assets/cv/resume.pdf";
import { CV_DRIVE_URL } from "../utils/constants";

const handlePreview = (cv) => {
  window.open(cv, "_blank");
};

const DownloadCv = () => {
  return (
    <a href={cv} download="VINAYAK_JAISWAL_RESUME">
      <div
        onClick={() => {
          handlePreview(CV_DRIVE_URL);
        }}
        className="flex items-center border w-fit rounded-r-full rounded-l-full mt-4 cursor-pointer shadow-sm backdrop-blur-md transition duration-500 hover:bg-orange-600 hover:text-white"
      >
        <div className="mx-4 text-sm tracking-wider ">DOWNLOAD CV</div>
        <button className="border p-2 rounded-full bg-yellow-400">
          <ImDownload color="white" />
        </button>
      </div>
    </a>
  );
};

export default DownloadCv;
