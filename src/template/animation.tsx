import React from "react";
import "../css/Animation.css";

const animation = () => {
  return (
    <>
      <h2>・Bar</h2>
      <div className="barBox">
        linear
        <div className="barBox__bar"></div>
        ease
        <div className="barBox__bar"></div>
        ease-in
        <div className="barBox__bar"></div>
        ease-out
        <div className="barBox__bar"></div>
        ease-in-out
        <div className="barBox__bar"></div>
      </div>
      <hr></hr>
      <h2>・Circle</h2>
      <div className="circleBox">
        <div className="circleBox__circle"></div>
        <div className="circleBox__circle"></div>
        <div className="circleBox__circle"></div>
        <div className="circleBox__circle"></div>
        <div className="circleBox__circle"></div>
        <div className="circleBox__circle"></div>
        <div className="circleBox__circle"></div>
        <div className="circleBox__circle"></div>
        <div className="circleBox__circle"></div>
      </div>
    </>
  );
};
export default animation;
