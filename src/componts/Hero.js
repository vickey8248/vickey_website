import React from "react";
import heroicons from "../Assets/hero.png";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Hero() {
  const config = {
    subtitle: "Im a front-end developer and Designer",
    social: {
      Github: "https://github.com/vickey8248",
      Instagram:
        "https://www.instagram.com/vickeyz_official?igsh=dXo2OWVmcXJydjQx",
      Linkedin: "https://www.linkedin.com/in/vegnesh-j-880273223",
      Mail: "https://mail.google.com/mail/u/0/#inbox",
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="w-1/2 text-white text-6xl justify-center font-hero-font">
          Hi, <br /> Im <span className="text-black">J</span> Vegnesh
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a href={config.social.Github} className="pr-5 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href={config.social.Instagram} className="pr-5 hover:text-white">
            <AiOutlineInstagram size={40} />
          </a>
          <a href={config.social.Linkedin} className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img src={heroicons} className="md:w-1/3" />
    </section>
  );
}

export default Hero;
