import React from "react";
import styled from "styled-components";
import { MenuIcon } from "lucide-react";
const HeaderContainer = styled.header`
  background-color: #1f2937;
  border-bottom: 1px solid #374151;
`;
const HeaderContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
`;
const Logo = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;
const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f3f4f6;
`;
const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;
const NavLink = styled.a`
  color: #e5e7eb;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #818cf8;
  }
`;
const MobileMenuButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: #9ca3af;
  &:hover {
    color: #e5e7eb;
    background-color: #374151;
  }
  &:focus {
    outline: none;
  }
`;
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderWrapper>
          <Logo>
            <LogoText>Your Name</LogoText>
          </Logo>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
          <MobileMenuButton>
            <MenuIcon size={24} />
          </MobileMenuButton>
        </HeaderWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
}
