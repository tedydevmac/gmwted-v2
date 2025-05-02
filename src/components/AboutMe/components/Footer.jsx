import React from "react";
import styled from "styled-components";
const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: #e5e7eb;
  padding: 2rem 0;
  border-top: 1px solid #374151;
`;
const FooterContent = styled.div`
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
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Copyright = styled.p`
  margin-bottom: 1rem;
  color: #9ca3af;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const FooterNav = styled.div`
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const FooterLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
`;
const FooterLink = styled.a`
  color: #9ca3af;
  transition: color 0.2s;
  &:hover {
    color: #818cf8;
  }
`;
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterContent>
        <FooterWrapper>
          <Copyright>
            &copy; {currentYear} Your Name. All rights reserved.
          </Copyright>
          <FooterNav>
            <FooterLinks>
              <li>
                <FooterLink href="#">Privacy</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Terms</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Contact</FooterLink>
              </li>
            </FooterLinks>
          </FooterNav>
        </FooterWrapper>
      </FooterContent>
    </FooterContainer>
  );
}
