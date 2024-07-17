import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import WorkThree from "./WorkThree";

import React from "react";

const Card = () => {
  return (
    <div className="work-container">
      {/* <h1 className="project-heding"></h1> */}
      <div className="project-container">
        {WorkThree.map((val, ind) => {
          return (
            <WorkCard
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

export default Card;
