import React from "react";
import styled from "styled-components";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => (props.light ? "white" : "#4b5563")};
    transition: color 0.2s;
    &:hover {
      color: ${(props) => (props.light ? "#e5e7eb" : "#4f46e5")};
    }
  }
`;

export function SocialLinks({ light = false }) {
  return (
    <SocialContainer>
      <SocialLink
        href="https://github.com/tedydevmac"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        light={light}
      >
        <GithubIcon />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/ted-goh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        light={light}
      >
        <LinkedinIcon />
      </SocialLink>
    </SocialContainer>
  );
}
