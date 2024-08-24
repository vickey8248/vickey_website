import React from "react";
import images from "../Assets/about.png";

function About() {
  const config = {
    line1:
      "Hi, My name is Vegnesh.j I am front-end developer. I built beautifulWebsites with React.js and tailwind css + Bootstrap",
    line2:
      "I am proficient in frontend skills like React.js, Redux, Redux Toolit, Git, GItHub, tailwind CSS, Css3,HTML5 and many more.",
    line3: "Im completed B.SC INFORMATION TECHNOLOGY",
  };
  return (
    <section
      className="flex flex-col md:flex-row bg-secondary px-5 "
      id="about"
    >
      <div className="py-5 md:w-1/2">
        <img src={images} />
      </div>
      <div className="md:w-1/2 flex justify-center pl-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-4xl border-[black] border-b-4 mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="text-white pb-5">{config.line1}</p>
          <p className="text-white pb-5">{config.line2}</p>
          <p className="text-white pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
