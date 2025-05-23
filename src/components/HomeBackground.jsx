import React from 'react';
import styled, { keyframes } from 'styled-components';

const createVerticalAnimation = (rotateValue) => keyframes`
  0%, 100% {
    transform: translateY(0) rotate(${rotateValue});
  }
  50% {
    transform: translateY(-13%) rotate(${rotateValue});
  }
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const AnimatedDiv = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgColor || '#637ED8'};
  color: ${(props) => props.color || '#fff'};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.8);
  font-size: ${(props) => props.fontSize || '1.2vw'};
  border-radius: ${(props) => props.borderRadius || '50px'};
  width: ${(props) => props.width || '12vw'};
  height: ${(props) => props.height || '4vw'};
  min-width: 140px;
  max-width: 280px;
  min-height: 50px;
  max-height: 90px;
  animation: ${(props) =>
    createVerticalAnimation(props.rotate || '0deg')} ${(props) => props.duration || '5s'} infinite ease-in-out;
  animation-delay: ${(props) => props.delay || '0s'};
`;

const HomeBackground = () => {
  return (
    <Container>
      <AnimatedDiv style={{ top: '11vh', left: '8vw' }} bgColor="#637ED8" fontSize="2vw" width="11vw" height="4.5vw" rotate="-20deg" duration="7s" delay="0s">React</AnimatedDiv>
      <AnimatedDiv style={{ top: '34%', left: '15vw' }} bgColor="#727272" fontSize="1.8vw" width="10.5vw" height="3.8vw" rotate="20deg" duration="6s" delay="1s">HTML</AnimatedDiv>
      <AnimatedDiv style={{ top: '6vh', left: '58vw' }} bgColor="#526297" fontSize="2.4vw" width="12vw" height="4.5vw" rotate="34deg" duration="5.5s" delay="2s">CSS</AnimatedDiv>
      <AnimatedDiv style={{ top: '69vh', left: '11vw' }} bgColor="#637ED8" fontSize="2vw" width="11vw" height="3.5vw" rotate="20deg" duration="6.5s" delay="1.5s">Next.js</AnimatedDiv>
      <AnimatedDiv style={{ top: '61vh', left: '7vw' }} bgColor="#383838" fontSize="1.5vw" width="14vw" height="3vw" rotate="-15deg" duration="7.5s" delay="2.5s">Photoshop</AnimatedDiv>
      <AnimatedDiv style={{ top: '16%', right: '10%' }} bgColor="#808080" fontSize="1.5vw" width="10.5vw" height="3.8vw" rotate="-20deg" duration="6s" delay="1.2s">JavaScript</AnimatedDiv>
      <AnimatedDiv style={{ top: '34%', right: '3vw' }} bgColor="#637ED8" fontSize="1.5vw" width="11vw" height="4.2vw" rotate="20deg" duration="5.8s" delay="1.8s">Illustrator</AnimatedDiv>
      <AnimatedDiv style={{ top: '78%', right: '6%' }} bgColor="#808080" fontSize="1.5vw" width="14vw" height="3.5vw" rotate="-16deg" duration="7s" delay="2.3s">Node.js</AnimatedDiv>
      <AnimatedDiv style={{ top: '78%', right: '42vw' }} bgColor="#383838" fontSize="1.5vw" width="13vw" height="2.8vw" rotate="-8deg" duration="7.8s" delay="2.2s">Figma</AnimatedDiv>
      <AnimatedDiv style={{ top: '75%', right: '36%' }} bgColor="#637ED8" fontSize="1.5vw" width="11.5vw" height="3.5vw" rotate="28deg" duration="6.2s" delay="1.1s">Git</AnimatedDiv>
    </Container>
  );
};

export default HomeBackground;
