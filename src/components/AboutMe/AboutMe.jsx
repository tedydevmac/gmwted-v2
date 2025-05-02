import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { AboutMe } from "./components/Main";
import { Footer } from "./components/Footer";
const Container = styled.div`
  min-height: 100vh;
  background-color: #111827;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  flex-grow: 1;
`;
export function AboutMePage() {
  return (
    <Container>
      <Header />
      <Main>
        <AboutMe />
      </Main>
      <Footer />
    </Container>
  );
}
