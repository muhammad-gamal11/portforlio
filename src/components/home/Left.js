import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Frontend Web Developer", "Web Designer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 4000,
  });
  return (
    <div className="w-full lgl:w-5/12  bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5 flex items-center pt-10 justify-center">
        <img
          className="w-36 h-36 object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">
            Muhammad Gamal
          </h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a
                href="https://github.com/muhammad-gamal11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a
                href="https://www.linkedin.com/in/muhammad-gamal-310b161a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </span>

            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a
                href="https://www.facebook.com/Jimmy.4851161"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
            </span>

            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="mailto:gamal9978@gmail.com">
                <FiMail />
              </a>
            </span>
          </div>
        </div>
        <div className="flex justify-center h-14">
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            <a href="mailto:gamal9978@gmail.com">Contact me</a>
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
