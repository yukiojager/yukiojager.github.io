import { useState, useEffect } from "react";
import Project from "./components/Project";
import Media from "react-media";
import { useInView } from "react-intersection-observer";
import Sticky from "./components/Stickydiv";

const App = () => {
  const projects = [
    {
      link: "https://phonebookinator.herokuapp.com/",
      technology: "MERN STACK",
      title: "Phonebook",
      description: `☎️ A Full Stack web-app phonebook`,
    },
    {
      link: "https://marsinator.herokuapp.com/",
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
    {
      link: "https://weatherinator.herokuapp.com/",
      technology: "REACT",
      title: "Weatherinator",
      description: `🌎 Weather web-app with real-time info from countries all around the world.`,
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
          <div className="infodiv">
            <div className="divcito">
              <span className="span1">
                <img className="image" src={require("./images/image.png")} />
              </span>
            </div>
            <ul>
              <li className="licito">
                <a
                  className="acito"
                  href="https://twitter.com/verajs__"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="twitter">
                    <path
                      fill="#FFFFFF"
                      d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"
                    ></path>
                  </svg>
                  <span className="textitotwitter">Twitter</span>
                  <div className="cositotwitter">
                    <svg fill="#FFFFFF" aria-hidden="true" class="idktbh" stroke="white" stroke-width="1">
                      <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                      <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <a
                  className="acito"
                  href="https://github.com/verajs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
              <li className="licito">
                
                  <svg fill="#FFFFFF" aria-hidden="true" class="githubcito">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                  <span className="textitoGitHub">GitHub</span>
                  <div className="cositoGitHub">
                    <svg fill="#FFFFFF" aria-hidden="true" class="idktbh" stroke="white" stroke-width="1">
                      <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                      <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                  </div>
                
              </li>
              </a>
            </ul>
          </div>
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
