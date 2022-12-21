import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-title">Milly Liu</div>
      <div className="nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
        </ul>
        <button className="resume-btn">Resume</button>
      </div>
    </div>
  );
};
