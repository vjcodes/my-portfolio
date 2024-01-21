import { experiences } from "../utils/constants";
import ExperienceBox from "./ExperienceBox";

const ExperienceSection = () => {
  return (
    <div id="experience" className="w-full p-4 py-10">
      <h1 className="m-auto w-full text-center py-4 text-5xl font-[1000] tracking-wider">
        Experience & Education
      </h1>
      <div className="flex flex-wrap w-full mt-10 p-10">
        {experiences.map((experience) => (
          <ExperienceBox key={experience?.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
