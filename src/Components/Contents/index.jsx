import React from "react";
import "./Contents.css";
import data from "../../Test.json";

const Contents = () => {
  return (
    <div className="main-content-area">
      <div className="sectionHeader">Foods</div>
      <ul className="grid-of-items">
        {data?.map((eachItem, index) => {
          return (
            <li key={index}>
              <img src={eachItem.imageUrl} alt="Loading.."></img>
              <span>{eachItem.Ingredient}</span>
              <div>{eachItem["Short text"]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contents;
