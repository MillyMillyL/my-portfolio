import React from "react";

const Project = () => {
  return (
    <div>
      <figure>
        <img src="../project-img.png" alt="" />
        <div className="overlay">
          <figcaption>
            <h3>Todo List</h3>
            <p>Features: add, edit, delete, complete, clear completed</p>
            <p>Tech Details: React, useContext, useState</p>
            <div>
              <button>
                <a href="">Visit Website</a>
              </button>
              <button>
                <a href="">Check Code</a>
              </button>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Project;
