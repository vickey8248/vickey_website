import React from "react";
import resumes from "../Assets/resumeEcommerce.jpg";

function Resume() {
  const config = {
    link: "https://drive.google.com/file/d/1KRYBIfWKXkBIvNB0C3azadfV5fRqlmzM/view?usp=drivesdk",
  };
  return (
    <section
      className="flex flex-col md:flex-row bg-secondary px-5 "
      id="resume"
    >
      <div className="py-5 md:w-1/2 flex md:justify-end justify-center">
        <img className="w-[360px]" src={resumes} />
      </div>
      <div className="md:w-1/2 flex justify-center pl-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-4xl border-[#000000] border-b-4 mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="text-white pb-5">
            You can view my Resume
            <a className="btn" href={config.link}>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
