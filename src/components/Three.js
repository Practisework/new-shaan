import "./WorkCardStyle.css";

import WorkThree from "./WorkThree";
import WorkCardData from "./WorkCardData";

import React from "react";

const Three = () => {
  return (
    <div className="work-container">
      <h1 className="project-heding">jiii</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkThree
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Three;
