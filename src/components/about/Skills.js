import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />

        <div className="py-4">
          <div className="py-4 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Arabic</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-4 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">English</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>

          <div className="py-4 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Spanish</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      {/* =============== Languages End here =================== */}

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      {/* =============== Skills Start here =================== */}

      <div className="col-span-9 md:col-span-4">
        {/* coding skills */}
        <div className="col-span-9 md:col-span-4">
          <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
          <div className="py-4">
            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                HTML5, CSS3, JavaScript
              </p>
            </div>

            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                SASS ,BootStrap, TailWind
              </p>
            </div>

            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                React Js (Redux , AXIOS Js)
              </p>
            </div>

            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                Responsive Web Design
              </p>
            </div>

            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                Version Control (Git)
              </p>
            </div>

            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                Problem-solving and Troubleshooting
              </p>
            </div>

            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                Strong Communication Skills
              </p>
            </div>

            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                Adaptability and Flexibility
              </p>
            </div>

            <div className="py-4 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">
                Attention to Detail
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =============== Skills end here =================== */}
    </div>
  );
};

export default Skills;
