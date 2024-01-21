import aboutSvg from "./../assets/aboutMe.svg";
import AboutBox from "./AboutBox";
import DownloadCv from "./DownloadCv";
// import { useParallax } from "react-scroll-parallax";

const About = () => {
    // const { ref } = useParallax({ speed: 10 });
  return (
    <div
        // ref={ref}
      id="about"
      className="w-full p-2 border box-border"
    >
      <div className="m-auto w-full text-center py-4 text-5xl font-[1000] tracking-wider">
        About <span className="text-[#ee8738]">Me</span>
      </div>

      <div className="flex">
        {/* TITLE_SECTION */}
        <div className="w-1/4 flex items-center">
          <img src={aboutSvg} alt="about me" className="h-[10rem]" />
        </div>

        {/* ABOUT DESCRIPTION */}
        <div className="w-3/4 p-2">
          <div className="flex flex-wrap gap-4">
            {/* YEARS_OF_EXPERIENCE */}
            <AboutBox number={2} text="Years of Experience" />
            {/*NO_OF_PROJECTS*/}
            <AboutBox number={4} text="Industry Projects" />
          </div>

          {/* DOWNLOAD CV */}
          <div>
            <DownloadCv />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
