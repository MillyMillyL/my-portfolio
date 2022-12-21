import React from "react";

export const About = () => {
  return (
    <div className="about-message">
      <div>
        <p>Hi, my name is</p>
        <h1>Milly Liu</h1>
        <h2>Front End Developer</h2>
        <p>
          I am a frontend web designer specializing in building exceptional
          digital experience.
        </p>
      </div>
      <div>
        <h2>technologies</h2>
        <p>I've been working with</p>

        <div className="tech-div">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git/Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
