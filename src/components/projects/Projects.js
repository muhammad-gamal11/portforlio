import { useState } from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  workImgNine,
  workImgTen,
  workImgEleven,
  workImgTwelve,
  workImgThirteen,
  workImgFourteen,
  workImgFifteen,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Career Pilot",
      category: "React Js",
      image: workImgThree,
      href: "https://career-pilot.netlify.app/",
      src: "https://github.com/muhammad-gamal11/CareerPilot",
      usedTechnology: "",
    },
    {
      title: "Modern Haven",
      category: "React Js",
      image: workImgFifteen,
      href: "https://modern-haven.netlify.app/",
      src: "https://github.com/muhammad-gamal11/modern-haven",
      usedTechnology: "",
    },
    {
      title: "Show GitHub Users",
      category: "React Js",
      image: workImgTwelve,
      href: "https://show-github-users.netlify.app/",
      src: "https://github.com/muhammad-gamal11/show-users/tree/main",
      usedTechnology: "HTML, CSS, ReactJS, AJAX, API",
    },
    {
      title: "Online Furniture Store",
      category: "Vanilla Js",
      image: workImgSix,
      href: "https://serenity-furniture-store.netlify.app/",
      src: "https://github.com/muhammad-gamal11/Serenity-furniture-store",
      usedTechnology: "",
    },
    {
      title: "Sip & Savor",
      category: "React Js",
      image: workImgThirteen,
      href: "https://sip-and-savor.netlify.app/",
      src: "https://github.com/muhammad-gamal11/sip-savor",
      usedTechnology: "",
    },
    {
      title: "Search Movies",
      category: "React Js",
      image: workImgEleven,
      href: "https://search-0-movies.netlify.app/",
      src: "https://github.com/muhammad-gamal11/searching-movies",
      usedTechnology: "",
    },
    {
      title: "My Portfolio",
      category: "React Js",
      image: workImgSeven,
      // href: "https://gamal-portfolio.netlify.app/",
      src: "https://github.com/muhammad-gamal11/portforlio",
      usedTechnology: "",
    },
    {
      title: "Read about different technologies",
      category: "React Js",
      image: workImgFourteen,
      href: "https://technologies-news.netlify.app/",
      src: "https://github.com/muhammad-gamal11/technologies-news",
      usedTechnology: "",
    },
    {
      title: "Drinks",
      category: "Vanilla Js",
      image: workImgFive,
      href: "https://drinks-11-api.netlify.app/",
      src: "https://github.com/muhammad-gamal11/drinks-api",
      usedTechnology: "",
    },
    {
      title: "Tour company",
      category: "HTML, CSS",
      image: workImgOne,
      href: "https://backroadstours-css-html.netlify.app/",
      src: "https://github.com/muhammad-gamal11/backroad-tour-company-",
      usedTechnology: "HTML , CSS",
    },
    {
      title: "Tea Station",
      category: "HTML, CSS",
      image: workImgTwo,
      href: "https://tea-111-station.netlify.app/",
      src: "https://github.com/muhammad-gamal11/tea-station",
      usedTechnology: "HTML , CSS",
    },
    {
      title: "Wikipedia clone",
      category: "Vanilla Js",
      image: workImgFour,
      href: "https://wikipedia-11.netlify.app/",
      src: "https://github.com/muhammad-gamal11/wikipedia-replica",
      usedTechnology: "",
    },
    {
      title: "Displaying GitHub Followers",
      category: "Vanilla Js",
      image: workImgNine,
      href: "https://displaying-followers.netlify.app/",
      src: "https://github.com/muhammad-gamal11/displaying-github-followers",
      usedTechnology: "",
    },

    {
      title: "Displaying a random user",
      category: "React Js",
      image: workImgEight,
      href: "https://random-11-user.netlify.app/",
      src: "https://github.com/muhammad-gamal11/displaying-random-user",
      usedTechnology: "",
    },
    {
      title: "Search pictures",
      category: "React Js",
      image: workImgTen,
      href: "https://search-00-pictures.netlify.app/",
      src: "https://github.com/muhammad-gamal11/search-pictures",
      usedTechnology: "",
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

  const categories = ["All", "React Js", "Vanilla Js", "HTML, CSS"];

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

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-6">
        {filteredProjects.map((project, index) => (
          <div className="px-6" key={index}>
            <ProjectsCard
              {...project}
              // title={project.title}
              // category={project.category}
              // image={project.image}
              // href={project.href}
              // src={project.src}
              // description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
