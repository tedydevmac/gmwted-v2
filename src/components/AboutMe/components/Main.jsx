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
  border: 4px solid #1f2937;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
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
  color: #f3f4f6;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #818cf8;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Description = styled.p`
  font-size: 1.125rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  color: #9ca3af;
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
  background-color: #818cf8;
  color: #f3f4f6;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  margin-right: 1rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: #6366f1;
  }
`;
const SecondaryButton = styled.a`
  display: inline-block;
  border: 1px solid #818cf8;
  color: #818cf8;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    background-color: #818cf8;
    color: #f3f4f6;
  }
`;
const Card = styled.div`
  background-color: #1f2937;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border: 1px solid #374151;
`;
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #f3f4f6;
  margin-bottom: 1.5rem;
`;
const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ExperienceCard = styled(Card)`
  h3 {
    color: #f3f4f6;
    svg {
      color: #818cf8;
    }
  }
  h4 {
    color: #e5e7eb;
  }
  p {
    color: #9ca3af;
  }
  .date {
    color: #818cf8;
  }
`;
const ContactSection = styled(Card)`
  background-color: #818cf8;
  color: #f3f4f6;
  border: none;
  h2,
  h3 {
    color: #f3f4f6;
  }
  p {
    color: #e5e7eb;
  }
`;
export function AboutMe() {
  const skills = [
    { name: "Web Development", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
  ];
  return (
    <Container>
      <Section id="about">
        <Grid>
          <Content>
            <Title>Hi, I'm Your Name</Title>
            <Subtitle>Software Developer & Designer</Subtitle>
            <Description>
              I'm a passionate software developer with expertise in creating
              beautiful, functional websites and applications. With over 5 years
              of experience, I specialize in front-end development, UI/UX
              design, and creating seamless user experiences.
            </Description>
            <Location>
              <MapPinIcon size={20} />
              <span>San Francisco, CA</span>
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
      <Section>
        <Card>
          <SectionTitle>About Me</SectionTitle>
          <Description>
            I'm a software developer with a passion for creating elegant
            solutions to complex problems. My journey in tech began 5 years ago
            when I built my first website, and I've been hooked ever since.
          </Description>
          <Description>
            I believe in writing clean, maintainable code and creating intuitive
            user experiences. Whether I'm working on a website, mobile app, or
            other digital product, my goal is always to build something that
            people love to use.
          </Description>
          <Description>
            When I'm not coding, you can find me hiking in the mountains,
            reading science fiction, or experimenting with new recipes in the
            kitchen.
          </Description>
        </Card>
      </Section>
      <Section id="skills">
        <SectionTitle>My Skills</SectionTitle>
        <SkillsList skills={skills} />
      </Section>
      <Section id="experience">
        <SectionTitle>Experience & Education</SectionTitle>
        <ExperienceGrid>
          <ExperienceCard>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BriefcaseIcon size={20} className="mr-2" />
              Work Experience
            </h3>
            <div className="mb-6">
              <h4 className="text-lg font-semibold">
                Senior Developer at Tech Company
              </h4>
              <p className="date">2020 - Present</p>
              <p className="mt-2">
                Led development of multiple web applications, improving
                performance by 40% and implementing new features that increased
                user engagement.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                Web Developer at Startup
              </h4>
              <p className="date">2018 - 2020</p>
              <p className="mt-2">
                Built responsive websites and applications for various clients,
                focusing on modern JavaScript frameworks and accessibility.
              </p>
            </div>
          </ExperienceCard>
          <ExperienceCard>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GraduationCapIcon size={20} className="mr-2" />
              Education
            </h3>
            <div className="mb-6">
              <h4 className="text-lg font-semibold">
                Master's in Computer Science
              </h4>
              <p className="date">University Name, 2018</p>
              <p className="mt-2">
                Specialized in software engineering and human-computer
                interaction. Graduated with honors.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                Bachelor's in Information Technology
              </h4>
              <p className="date">University Name, 2016</p>
              <p className="mt-2">
                Focused on web development and database management. Completed
                several notable projects.
              </p>
            </div>
          </ExperienceCard>
        </ExperienceGrid>
      </Section>
      <Section id="contact">
        <ContactSection>
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
        </ContactSection>
      </Section>
    </Container>
  );
}
