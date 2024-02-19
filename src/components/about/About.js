import Title from "../home/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="Services" />
      <MyServices />
      <Title title="My" subTitle="Skills" />
      <Skills />
    </section>
  );
};

export default About;
