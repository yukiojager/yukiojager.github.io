import { useState, useEffect } from "react";
import Project from "./components/Project";
import Media from "react-media";
import { useInView } from "react-intersection-observer";
import Sticky from "./components/Stickydiv";

const App = () => {
  const projects = [
    {
      link: "https://still-wave-83882.herokuapp.com/",
      technology: "MERN STACK",
      title: "Phonebook",
      description: `☎️ A Full Stack web-app phonebook`,
    },
    {
      link: "https://fierce-meadow-30388.herokuapp.com/",
      technology: "REACT",
      title: "Marsinator",
      description: `🚀 Up to date Mars weather info from Curiosity and Perseverance's rovers`,
    },
    {
      link: "https://github.com/verajs/Scriabinite",
      technology: "HTML/CSS/BOOTSTRAP",
      title: "Scriabinite",
      description: `🎹  Website about composer Alexander Scriabin designed with Alexandra Exter's style`,
    },
  ];

  return (
    <div className="flexdirection">
      <div className="leftside">
        <div className="flex">
          <h1 className="sebastian-vera-header-1">
            <span className="font-link">Sebastian Vera</span>
          </h1>
          <h2 className="full-stack-developer-header-2">
            Full Stack Developer
          </h2>
          <p className="sebastian-vera-description">
            {/* Rigorous in my training; industrious, reflective, and endlessly
        self-correcting. */}
            Contributing to the never-ending task of guiding our world to a
            brighter future through technology.
          </p>

          <Media query="(min-width: 1046px)">
            {(queries1) => {
              return queries1 ? (
                <div className="section-buttons">
                  <button className="button">
                    PROJECTS
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                  </button>
                  <button className="button">
                    ARTICLES
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                  </button>
                  <button className="button">
                    JOURNEY
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                  </button>
                </div>
              ) : (
                ""
              );
            }}
          </Media>

          {/* <div className="footer-buttons-div">
            <div className="buttons">
              <a href="https://www.twitter.com/verajs__">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="w-16 h-16 mr-16 fill-current"
                >
                  <path
                    fill="#FFFF"
                    d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"
                  ></path>
                </svg>
                <span class="mt-px">Twitter</span>
              </a>
            </div>
          </div> */}
          <Media query="(max-width: 1046px)">
            {(matches) => {
              return matches ? (
                <div className="right-side">
                  <div className="projects-div">
                    <Sticky
                      position="top" // top, right, bottom, left
                      stuckClasses="projects-sticky-stuck"
                      unstuckClasses="projects-sticky"
                      stuckStyles={{}}
                      unstuckStyles={{}}
                    >
                      PROJECTS
                    </Sticky>
                    {projects.map((project) => (
                      <Project
                        link={project.link}
                        technology={project.technology}
                        title={project.title}
                        description={project.description}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                ""
              );
            }}
          </Media>
        </div>
      </div>
      <Media query="(min-width: 1046px)">
        {(queries) => {
          return queries ? (
            <div className="right-side">
              <div className="projects-div">
                {projects.map((project) => (
                  <Project
                    link={project.link}
                    technology={project.technology}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          );
        }}
      </Media>
    </div>
  );
};

export default App;
