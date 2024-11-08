import React from 'react'
import { Router, RouterProvider } from 'react-router-dom';
import { styled, createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';
import Header from './components/Header';
import Home from './pages/Home';
import Intro from './components/Intro';
import Test from './components/Test';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  ul,li{
    list-style:none;
  }
  a{
    text-decoration: none;
    color:inherit;
  }
  body {
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const Container = styled.div`
margin-top:60px;
  height:500vh;
`


const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Intro /> */}
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App
