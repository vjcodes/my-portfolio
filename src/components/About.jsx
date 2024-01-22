import aboutSvg from "./../assets/aboutMe.svg";
import AboutBox from "./AboutBox";
import { DownloadCvButton } from "./CustomButton";
import { ImDownload } from "react-icons/im";
import { CV_DRIVE_URL } from "../utils/constants";
// import { useParallax } from "react-scroll-parallax";

const handlePreview = () => {
  window.open(CV_DRIVE_URL, "_blank");
};

const About = () => {
  // const { ref } = useParallax({ speed: 10 });
  return (
    <div
      // ref={ref}
      id="about"
      className="w-full p-2 py-12 box-border"
    >
      <div className="m-auto w-full text-center py-4 text-5xl font-[1000] tracking-wider mb-6">
        About <span className="text-[#ee8738]">Me</span>
      </div>

      <div className="flex">
        {/* TITLE_SECTION */}
        <div className="w-4/12 flex items-center">
          <img src={aboutSvg} alt="about me" />
        </div>

        {/* ABOUT DESCRIPTION */}
        <div className="w-8/12 px-10">
          <div className="flex flex-wrap gap-4">
            {/* YEARS_OF_EXPERIENCE */}
            <AboutBox number={2} text="Years of Experience" />
            {/*NO_OF_PROJECTS*/}
            <AboutBox number={4} text="Industry Projects" />
          </div>

          {/* DOWNLOAD CV */}
          <div>
            <DownloadCvButton
              icon={<ImDownload color="white" />}
              text="DOWNLOAD CV"
              handleClick={handlePreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
