import React, { useState } from "react";
import Icon from "./Icon";
import Window from "./Window";
import "./Desktop.css";
import { playSound } from "../functions/soundEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);

  const handleOpenWindow = (type) => {
    if (!openWindows.includes(type)) {
      playSound("open");
      setOpenWindows([...openWindows, type]);
    }
  };

  const handleCloseWindow = (type) => {
    playSound("close");
    setOpenWindows(openWindows.filter((win) => win !== type));
  };

  return (
    <div className="desktop">
      <video className="desktop-background" autoPlay loop muted>
        <source src="/vibe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="profile-section">
        <div className="merow">
          <div className="vertical-icons">
            <a
              href="https://github.com/tedydevmac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ted-goh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a
              href="mailto:goh_min_wen_ted@s2022.ssts.edu.sg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
          </div>
          <img
            src={require("../assets/images/IMG_3817.png")}
            alt="Ted's Profile"
            className="profile-image"
          />
        </div>
        <h1 className="profile-title">Hi! My name is Ted 👋</h1>
      </div>

      {/* Icons Section */}
      <div className="icons-row">
        <Icon
          label="About Me"
          image={require("../assets/images/ic_launcher_round.png")}
          onClick={() => handleOpenWindow("about")}
        />
        <Icon
          label="Projects"
          image={require("../assets/images/ic_launcher_round.png")}
          onClick={() => handleOpenWindow("projects")}
        />
        <Icon
          label="Competitions"
          image={require("../assets/images/ic_launcher_round.png")}
          onClick={() => handleOpenWindow("competitions")}
        />
        <Icon
          label="Experiences"
          image={require("../assets/images/ic_launcher_round.png")}
          onClick={() => handleOpenWindow("experiences")}
        />
      </div>

      {/* Windows Section */}
      {openWindows.map((type) => (
        <Window
          key={type}
          type={type}
          onClose={() => handleCloseWindow(type)}
        />
      ))}
    </div>
  );
};

export default Desktop;
