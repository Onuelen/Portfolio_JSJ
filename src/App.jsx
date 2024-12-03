import React from 'react'
import { Router, RouterProvider } from 'react-router-dom';
import { styled, createGlobalStyle } from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reset from 'styled-reset';
import Header from './components/Header';
import Home from './pages/Home';
import Intro from './components/Intro';
import Test from './components/Test';
import AnimateText from './components/AnimateText';
import Resume from './pages/Resume';
import Works from './pages/Works';
import Project from './pages/Project';
import BgImage from '/img/bg.png';



const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
ul, li{
  list-style: none;
}
  a{
  text-decoration: none;
  color: inherit;
}
  body {
    font-family: "Noto Sans KR", sans-serif;
    background:
      rgba(0, 0, 0, 0.5) /* 반투명 검정색 레이어 */
      url(${BgImage}) 
      no-repeat center center;
    background-size: contain;
    background-repeat: repeat;
    background-blend-mode: multiply; /* 이미지와 색상의 혼합 모드 */
  }
`;

const Container = styled.div`
margin-top: 60px;
height: 500vh;
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
      </Container>
    </>
  )
}

export default App
