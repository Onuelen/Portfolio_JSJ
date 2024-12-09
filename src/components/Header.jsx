import React from 'react';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

const Glass = styled.div`
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 20px 32px 10px rgba(30, 30, 30, 0.35);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap:520px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 3px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  margin-top: 3px;
  font-size: 18px;
  font-weight: 500;

  & p {
    padding: 8px 24px;
    line-height: 1.4;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-out;
    border-radius: 20px;

    &:hover {
      background-color: #444444;
      border-radius: 20px;
    }

    &::before {
      content: ""; 
      position: absolute;
      left:50%;
      bottom:4px;
      transform: translateX(-50%);
      width: 0; 
      height: 0;
      background: #008cff;
      transition: all 0.3s ease-in-out;
      border-radius: 20px;
    }

    &:hover::before {
      width: 70%; 
      height: 5px;
    }
  }

`;



const Header = () => {

  const NAV_HEIGHT = 60;

  return (
    <Container>
      <Glass>
        <ProgressBar />
        <MenuContainer>
          <Title>Portfoilo</Title>
          <Menu>
            <Link to="home" smooth={true} duration={600} offset={-NAV_HEIGHT}>
              <p>HOME</p>
            </Link>
            <Link to="about" smooth={true} duration={500} >
              <p>ABOUT</p>
            </Link>
            <Link to="workspace" smooth={true} duration={500} offset={-NAV_HEIGHT}>
              <p>WORKSPACE</p>
            </Link>
            <Link to="project" smooth={true} duration={500} offset={NAV_HEIGHT / 2} >
              <p>PROJECT</p>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-NAV_HEIGHT}>
              <p>CONTACT</p>
            </Link>
          </Menu>
        </MenuContainer>
      </Glass>
    </Container >
  );
};

export default Header;
