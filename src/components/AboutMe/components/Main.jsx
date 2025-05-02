import React from "react";
import styled from "styled-components";
import { SocialLinks } from "./SocialLinks";
import { SkillsList } from "./SkillsList";
import { BriefcaseIcon, GraduationCapIcon, MapPinIcon } from "lucide-react";
const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 3rem 1rem;
  @media (min-width: 640px) {
    padding: 3rem 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }
`;
const Section = styled.section`
  margin-bottom: 5rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Content = styled.div`
  order: 2;
  @media (min-width: 768px) {
    order: 1;
  }
`;
const ImageContainer = styled.div`
  order: 1;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    order: 2;
  }
`;
const ProfileImage = styled.div`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #4f46e5;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Description = styled.p`
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 1.5rem;
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  color: #4b5563;
  margin-bottom: 1.5rem;
  svg {
    margin-right: 0.5rem;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 2rem;
`;
const PrimaryButton = styled.a`
  display: inline-block;
  background-color: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  margin-right: 1rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: #4338ca;
  }
`;
const SecondaryButton = styled.a`
  display: inline-block;
  border: 1px solid #4f46e5;
  color: #4f46e5;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background-color: #eef2ff;
  }
`;
export function AboutMe() {
  // Skills data
  const skills = [
    {
      name: "Web Development",
      level: 90,
    },
    {
      name: "UI/UX Design",
      level: 85,
    },
    {
      name: "JavaScript",
      level: 95,
    },
    {
      name: "React",
      level: 90,
    },
    {
      name: "Node.js",
      level: 80,
    },
    {
      name: "Python",
      level: 75,
    },
  ];
  return (
    <Container>
      {/* Hero Section */}
      <Section id="about">
        <Grid>
          <Content>
            <Title>Hi, I'm Ted</Title>
            <Subtitle>Software Developer</Subtitle>
            <Description>
              I'm a full-stack software developer with experience in creating
              websites and mobile applications. With over 4 years of experience,
              I specialize in both front-end and back-end development, UI/UX
              design, and creating seamless user experiences.
            </Description>
            <Location>
              <MapPinIcon size={20} />
              <span>Singapore</span>
            </Location>
            <SocialLinks />
            <ButtonContainer>
              <PrimaryButton href="#contact">Contact Me</PrimaryButton>
              <SecondaryButton href="#">Download Resume</SecondaryButton>
            </ButtonContainer>
          </Content>
          <ImageContainer>
            <ProfileImage>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Your Name"
              />
            </ProfileImage>
          </ImageContainer>
        </Grid>
      </Section>
      {/* About Section */}
      <Section className="mb-20">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-gray-700 mb-4">
            I'm a software developer with a passion for creating elegant
            solutions to complex problems. My journey in tech began 5 years ago
            when I built my first website, and I've been hooked ever since.
          </p>
          <p className="text-gray-700 mb-4">
            I believe in writing clean, maintainable code and creating intuitive
            user experiences. Whether I'm working on a website, mobile app, or
            other digital product, my goal is always to build something that
            people love to use.
          </p>
          <p className="text-gray-700">
            When I'm not coding, you can find me hiking in the mountains,
            reading science fiction, or experimenting with new recipes in the
            kitchen.
          </p>
        </div>
      </Section>
      {/* Skills Section */}
      <Section id="skills" className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h2>
        <SkillsList skills={skills} />
      </Section>
      {/* Experience Section */}
      <Section id="experience" className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Experience & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BriefcaseIcon className="h-5 w-5 mr-2 text-indigo-600" />
              Work Experience
            </h3>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Senior Developer at Tech Company
              </h4>
              <p className="text-indigo-600">2020 - Present</p>
              <p className="text-gray-700 mt-2">
                Led development of multiple web applications, improving
                performance by 40% and implementing new features that increased
                user engagement.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Web Developer at Startup
              </h4>
              <p className="text-indigo-600">2018 - 2020</p>
              <p className="text-gray-700 mt-2">
                Built responsive websites and applications for various clients,
                focusing on modern JavaScript frameworks and accessibility.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <GraduationCapIcon className="h-5 w-5 mr-2 text-indigo-600" />
              Education
            </h3>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Master's in Computer Science
              </h4>
              <p className="text-indigo-600">University Name, 2018</p>
              <p className="text-gray-700 mt-2">
                Specialized in software engineering and human-computer
                interaction. Graduated with honors.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Bachelor's in Information Technology
              </h4>
              <p className="text-indigo-600">University Name, 2016</p>
              <p className="text-gray-700 mt-2">
                Focused on web development and database management. Completed
                several notable projects.
              </p>
            </div>
          </div>
        </div>
      </Section>
      {/* Contact Section */}
      <Section id="contact" className="mb-10">
        <div className="bg-indigo-700 rounded-lg shadow-md p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-6">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Contact Information
              </h3>
              <p className="mb-2">Email: yourname@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
              <SocialLinks light />
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
