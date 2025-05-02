import React from "react";
import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const SkillCard = styled.div`
  background-color: #1f2937;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border: 1px solid #374151;
`;
const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const SkillName = styled.h3`
  font-weight: 500;
  color: #e5e7eb;
`;
const SkillLevel = styled.span`
  color: #818cf8;
  font-weight: 500;
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 0.625rem;
  background-color: #374151;
  border-radius: 9999px;
`;
const Progress = styled.div`
  height: 100%;
  border-radius: 9999px;
  background-color: #818cf8;
  width: ${(props) => props.level}%;
`;
export function SkillsList({ skills }) {
  return (
    <Grid>
      {skills.map((skill) => (
        <SkillCard key={skill.name}>
          <SkillHeader>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel>{skill.level}%</SkillLevel>
          </SkillHeader>
          <ProgressBar>
            <Progress level={skill.level} />
          </ProgressBar>
        </SkillCard>
      ))}
    </Grid>
  );
}
