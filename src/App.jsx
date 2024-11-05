import React from 'react'
import styled from 'styled-components'
import createGlobalStyle from 'styled-components'
import reset from 'styled-reset';
import { Router, RouterProvider } from 'react-router-dom';
import Header from './components/Header';

const GlobalStyle = styled.createGlobalStyle`
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
`;

<<<<<<< Updated upstream
const App = () => {
  return (
    <div>
      APP111
    </div>
=======
const Container = styled.div`
  height:500vh;
`


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        123123
      </Container>
    </>
>>>>>>> Stashed changes
  )
}

export default App
