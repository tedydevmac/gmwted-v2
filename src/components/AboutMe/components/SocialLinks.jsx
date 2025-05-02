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
    color: ${(props) => (props.light ? "#e5e7eb" : "#9ca3af")};
    transition: color 0.2s;
    &:hover {
      color: ${(props) => (props.light ? "#f3f4f6" : "#818cf8")};
    }
  }
`;
export function SocialLinks({ light = false }) {
  return (
    <SocialContainer>
      <SocialLink
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        light={light}
      >
        <GithubIcon />
      </SocialLink>
      <SocialLink
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        light={light}
      >
        <LinkedinIcon />
      </SocialLink>
      <SocialLink
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        light={light}
      >
        <TwitterIcon />
      </SocialLink>
      <SocialLink
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        light={light}
      >
        <InstagramIcon />
      </SocialLink>
    </SocialContainer>
  );
}
