import React from 'react'
import ProgressBar from './ProgressBar'
import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  position:fixed;
  top:0;
  left:0;
  z-index:5;

`
const Glass = styled.div`
  width:100%;
  height:60px;
  background: rgba( 0, 0, 0, 0.8 );
  box-shadow: 0 20px 32px 10px rgba( 30, 30, 30, 0.35 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
`
const MenuContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:461px;
  color:#fff;
`
const Title = styled.div`
  font-size:18px;
  font-weight:bold;
  margin-top:3px;
  cursor: pointer;
`;
const Menu = styled.div`
  display:flex;
  margin-top:3px;
  font-size:18px;
  & > p {
    padding:8px 20px;
    line-height:1.4;
    cursor: pointer;
  &:hover {
    background-color:#444444;
    padding:8px 20px;
    border-radius:20px;
    }
  }
`;
const Header = () => {
  return (
    <Container>
      <Glass>
        <ProgressBar />
        <MenuContainer>
          <Title>Portfoilo</Title>
          <Menu>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>WORKSPACE</p>
            <p>PROJECT</p>
            <p>CONTACT</p>
          </Menu>
        </MenuContainer>
      </Glass>
    </Container>
  )
}

export default Header
