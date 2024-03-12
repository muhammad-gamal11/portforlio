const ProjectsCard = ({
  image,
  title,
  category,
  href,
  src,
  usedTechnology,
}) => {
  return (
    <div className="w-full h-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
      <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
        <img
          className="rounded-sm hover:rounded-xl w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt="ImageOne"
        />
        <div className="w-full h-full absolute top-0 left-0  hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
      </div>
      <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">
        {title}
      </h3>
      <p className="text-base text-gray-400 -mt-1">{category}</p>
      <div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mr-2 px-2 py-1 mt-2 text-bodyColor bg-white rounded-lg hover:bg-designColor hover:text-bodyColor transition duration-500 cursor-pointer "
        >
          View Project
        </a>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block ml-2 px-2 py-1 mt-2 text-bodyColor bg-white rounded-lg hover:bg-designColor hover:text-bodyColor transition duration-500 cursor-pointer "
        >
          Source Code
        </a>
      </div>
      {/* <p className="text-xl mt-3 border-solid border-b-2 border-sky-500 mbs">
        Used Technology
      </p>
      <p className="mt-2">{usedTechnology}</p> */}
    </div>
  );
};

export default ProjectsCard;
