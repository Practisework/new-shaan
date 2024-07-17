import "./WorkCardStyle.css";

import React from "react";

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Culti" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={"/products/${products.id}"} className="btm">
            अधिक माहिती बघा
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
