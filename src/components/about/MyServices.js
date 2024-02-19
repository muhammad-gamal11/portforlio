import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="
        As a front-end developer, I specialize in transforming design concepts into functional websites using HTML, CSS, JavaScript and ReactJs. 
         With a keen eye for detail and a focus on user satisfaction, I ensure seamless navigation and engaging digital experiences."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="As a web designer, I specialize in crafting visually appealing and intuitive user interfaces.
         Through creativity and attention to user experience, I create designs that engage and delight users, enhancing overall website usability and effectiveness."
      />
    </div>
  );
};

export default MyServices;
