import React from "react";
import "./Experiences.css";

const experiencesData = [
  {
    title: "Software Engineer",
    company: "TechCorp Solutions",
    duration: "June 2022 - Present",
    description:
      "Developed and maintained scalable web applications using React and Node.js. Led a team of 4 developers to deliver high-quality products on time.",
    companyWebsite: "https://techcorp.com",
  },
  {
    title: "Frontend Developer",
    company: "CreativeCode Studio",
    duration: "January 2021 - May 2022",
    description:
      "Designed and implemented responsive user interfaces for e-commerce platforms. Improved website performance, boosting customer engagement by 20%.",
    companyWebsite: "https://creativecode.com",
  },
  {
    title: "Intern",
    company: "StartupHub Inc.",
    duration: "June 2020 - December 2020",
    description:
      "Assisted in the development of a mobile application for task management. Conducted research and implemented features based on user feedback.",
    companyWebsite: "https://startuphub.com",
  },
];

const Experiences = () => {
  return (
    <div className="experiences">
      <h2>Experiences</h2>
      <div className="experiences-timeline">
        {experiencesData.map((experience, index) => (
          <div className="experience-entry" key={index}>
            <div className="experience-header">
              <h3 className="experience-title">{experience.title}</h3>
              <span className="experience-duration">{experience.duration}</span>
            </div>
            <div className="experience-company">
              <a
                href={experience.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            </div>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
