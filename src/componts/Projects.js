import React from "react";
import website1 from "../Assets/websiteImg1.jpg";
import website2 from "../Assets/websiteImg2.png";

function Projects() {
  const config = {
    projects: [
      {
        image: website1,
        description:
          "Food Ecommerce website like Swiggy and daminos pizza, Built with React.js and tailwind css",
        link: "https://pizza-menu-ruby.vercel.app/",
      },
      {
        image: website2,
        description:
          "A crypto coin Ecommerce website, Built with build with React.js and tailwind css",
        link: "https://crypto-stats-sooty.vercel.app/",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex  flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with
            React.js, tailwind css. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project) => (
            <div className="relative">
              <img className="h-[300px] w-[400px] " src={project.image} />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn" target="blank" href={project.link}>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
