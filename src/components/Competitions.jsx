import React from "react";
import "./Competitions.css";

const competitionsData = [
  {
    title: "Hackathon 2023",
    date: "March 2023",
    description:
      "Developed a machine learning model to predict housing prices. Won 1st place.",
    image: "assets/competitions/hackathon.png",
    link: "https://hackathon2023.com",
  },
  {
    title: "CodeFest 2022",
    date: "August 2022",
    description:
      "Built a real-time chat application during a 48-hour coding challenge. Secured 2nd place.",
    image: "assets/competitions/codefest.png",
    link: "https://codefest2022.com",
  },
  {
    title: "AI Challenge 2021",
    date: "December 2021",
    description:
      "Participated in an AI competition to design a chatbot for customer support.",
    image: "assets/competitions/aichallenge.png",
    link: "https://aichallenge2021.com",
  },
];

const Competitions = () => {
  return (
    <div className="competitions">
      <h2>Competitions</h2>
      <div className="competitions-timeline">
        {competitionsData.map((competition, index) => (
          <div className="competition-entry" key={index}>
            <div className="competition-date">{competition.date}</div>
            <div className="competition-details">
              {competition.image && (
                <img
                  src={competition.image}
                  alt={competition.title}
                  className="competition-image"
                />
              )}
              <div>
                <h3 className="competition-title">{competition.title}</h3>
                <p className="competition-description">
                  {competition.description}
                </p>
                {competition.link && (
                  <a
                    href={competition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="competition-link"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competitions;
