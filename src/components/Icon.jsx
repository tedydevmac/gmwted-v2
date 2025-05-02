import React from "react";
import "./Icon.css";
import { playSound } from "../functions/soundEffect";

const Icon = ({ label, image, onClick }) => {
  return (
    <div
      className="icon"
      onClick={onClick}
      onMouseEnter={() => playSound("hover")}
    >
      <img src={image} alt={label} className="icon-image" />
      <div className="icon-label">{label}</div>
    </div>
  );
};

export default Icon;
