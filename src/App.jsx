import React from 'react'
import { styled, createGlobalStyle } from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reset from 'styled-reset';
import Header from './components/Header';
import Home from './pages/Home';
import Intro from './components/Intro';
import AnimateText from './components/AnimateText';
import Resume from './pages/Resume';
import Works from './pages/Works';
import Project from './pages/Project';
import BgImage from '/img/bg.png';
import Contact from './pages/Contact';
import Footer from './pages/Footer';



const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
    font-size: 16px; 
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    background:
      rgba(0, 0, 0, 0.5) 
      url(${BgImage}) 
      no-repeat center center;
    background-size: contain;
    background-repeat: repeat;
    background-blend-mode: multiply; 
  }
`;


const Container = styled.div`
width:100%;
margin-top: 60px;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Intro /> */}
      <Header />
      <Container>
        <Home />
        <AnimateText />
        <Resume />
        <Works />
        <Project />
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default App
