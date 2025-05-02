import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import Projects from "./Projects";
import Competitions from "./Competitions";
import Experiences from "./Experiences";
import "./Window.css";
import { playSound } from "../functions/soundEffect";
import { AboutMePage } from "./AboutMe/AboutMe";

const Window = ({ type, onClose }) => {
  const titles = {
    about: "About Me",
    projects: "Projects",
    competitions: "Competitions",
    experiences: "Experiences",
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 400,
    height: 300,
    x: 100,
    y: 100,
  });

  const handleExpand = () => {
    playSound("expand");
    if (isExpanded) {
      setWindowSize({ width: 400, height: 300, x: 100, y: 100 });
    } else {
      setWindowSize({
        width: window.innerWidth * 1,
        height: window.innerHeight * 1,
        x: window.innerWidth * 0,
        y: window.innerHeight * 0,
      });
    }
    setIsExpanded(!isExpanded);
  };

  const [isAnimating, setIsAnimating] = useState(true);
  const [showExpandHint, setShowExpandHint] = useState(true);

  useEffect(() => {
    // Disable animation after it runs
    const animationTimer = setTimeout(() => setIsAnimating(false), 300); // Match animation duration
    return () => clearTimeout(animationTimer);
  }, []);

  useEffect(() => {
    const hintTimer = setTimeout(() => setShowExpandHint(false), 5000); // Remove hint after 5 seconds
    return () => clearTimeout(hintTimer);
  }, []);

  const renderContent = () => {
    switch (type) {
      case "about":
        return <AboutMePage />;
      case "projects":
        return <Projects />;
      case "competitions":
        return <Competitions />;
      case "experiences":
        return <Experiences />;
      default:
        return <p>Unknown content</p>;
    }
  };

  return (
    <Rnd
      size={{ width: windowSize.width, height: windowSize.height }}
      position={{ x: windowSize.x, y: windowSize.y }}
      onDragStop={(e, d) => setWindowSize({ ...windowSize, x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWindowSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          ...position,
        });
      }}
      bounds="window"
      dragHandleClassName="window-header"
    >
      <div className={`window ${isAnimating ? "opening-animation" : ""}`}>
        <div className="window-header">
          <div className="window-buttons">
            <button className="close-button" onClick={onClose}></button>
            <button
              className={`expand-button ${showExpandHint ? "pulse" : ""}`}
              onClick={handleExpand}
            ></button>
          </div>
          <span className="window-title">{titles[type]}</span>
        </div>
        <div className="window-content">{renderContent()}</div>
      </div>
    </Rnd>
  );
};

export default Window;
