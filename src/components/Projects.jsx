import React from "react";
import Project from "./Project";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="my-projects-title">
        <h2>My Projects</h2>
        <a href="">All Projects</a>
      </div>
      <div className="projects-grid">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};
