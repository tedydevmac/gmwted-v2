import React from "react";
import styled from "styled-components";
import { MenuIcon } from "lucide-react";
const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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
  color: #111827;
`;
const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;
const NavLink = styled.a`
  color: #111827;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #4f46e5;
  }
`;
const MobileMenuButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: #374151;
  &:hover {
    color: #111827;
    background-color: #f3f4f6;
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
