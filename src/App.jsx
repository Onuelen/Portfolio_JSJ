import React from 'react'
import styled from 'styled-components'
import createGlobalStyle from 'styled-components'
import reset from 'styled-reset';

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

const App = () => {
  return (
    <div>
      APP111
    </div>
  )
}

export default App
