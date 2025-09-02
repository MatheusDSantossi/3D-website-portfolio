import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ProgressBar from "./ui/ProgressBar";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="flex w-72 gap-2 items-center">
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
          <ProgressBar value={technology.experience} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
