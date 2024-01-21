import coder from "./../assets/coder.svg";
import TechIcon from "./TechIcon";
import { techs } from "../utils/constants";

const ExpertiseSection = () => {
  return (
    <div id="tech" className="w-full p-4 py-12 bg-[#F3F3F3]">
      <h1 className="m-auto w-full text-center py-4 text-5xl font-[1000] tracking-wider">
        Technical Expertise
      </h1>

      <div className="sm:flex flex flex-col-reverse p-10">
        <div className="sm:w-8/12 w-full flex gap-12 flex-wrap">
          {techs.map((tech) => (
            <TechIcon key={tech?.id} icon={tech.logo} techName={tech.title} />
          ))}
        </div>

        {/* SIDE SECTION */}
        <div className="sm:w-4/12 sm:mb-0 mb-4 w-full flex items-center">
          <img src={coder} alt="coder" />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
