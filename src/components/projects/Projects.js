import { useState } from "react";
import {
  workImgOne,
  workImgTwo,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  workImgThree,
  workImgNine,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Tour company",
      category: "HTML, CSS",
      image: workImgOne,
      href: "https://backroadstours-css-html.netlify.app/",
      src: "https://github.com/muhammad-gamal11/backroad-tour-company-",
    },
    {
      title: "Tea Station",
      category: "HTML, CSS",
      image: workImgTwo,
      href: "https://tea-111-station.netlify.app/",
      src: "https://github.com/muhammad-gamal11/tea-station",
    },
    {
      title: "personal Profile",
      category: "HTML, CSS",
      image: workImgThree,
      href: "https://person-portfolio.netlify.app/",
      src: "https://github.com/muhammad-gamal11/personal-portforlio",
    },
    {
      title: "Wikipedia clone",
      category: "Vanilla Js",
      image: workImgFour,
      href: "https://wikipedia-11.netlify.app/",
      src: "https://github.com/muhammad-gamal11/wikipedia-replica",
    },
    {
      title: "Displaying GitHub Followers",
      category: "Vanilla Js",
      image: workImgNine,
      href: "https://displaying-followers.netlify.app/",
      src: "https://github.com/muhammad-gamal11/displaying-github-followers",
    },
    {
      title: "Drinks",
      category: "Vanilla Js",
      image: workImgFive,
      href: "https://drinks-11-api.netlify.app/",
      src: "https://github.com/muhammad-gamal11/drinks-api",
    },
    {
      title: "Online Furniture Store",
      category: "Vanilla Js",
      image: workImgSix,
      href: "https://serenity-furniture-store.netlify.app/",
      src: "https://github.com/muhammad-gamal11/Serenity-furniture-store",
    },
    {
      title: "MarkDown",
      category: "React Js",
      image: workImgSeven,
      href: "https://markdown-to-text.netlify.app/",
      src: "",
    },
    {
      title: "Displaying a random user",
      category: "React Js",
      image: workImgEight,
      href: "https://random-11-user.netlify.app/",
      src: "",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase())
        );

  const categories = ["All", "HTML, CSS", "Vanilla Js", "React Js"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Title title="Recent" subTitle="Projects" />

      <div className="flex justify-evenly">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`mr-2 mb-2 py-1 px-2 rounded-md ${
              selectedCategory === category
                ? "bg-designColor text-bodyColor"
                : "bg-white text-bodyColor"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {filteredProjects.map((project, index) => (
          <div className="px-6" key={index}>
            <ProjectsCard
              title={project.title}
              category={project.category}
              image={project.image}
              href={project.href}
              src={project.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
