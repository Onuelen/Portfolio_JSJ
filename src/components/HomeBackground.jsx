import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ReactDiv = styled.div`
  position: absolute;
  top: 11vh;
  left: 14vw;
  transform:rotate(-20deg);
  background-color: #637ED8;
  color:#fff;
  padding: 10px 40px;
  line-height:1;
  font-size: 40px;
  border-radius: 5px;
  font-weight: bold;
  padding-bottom: 14px;
`;

const HTMLDiv = styled.div`
  position: absolute;
  top: 32vh;
  left: 19vw;
  width:174px;
  height:66px;
  transform:rotate(20deg);
  background-color: #727272;
  color: #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  border-radius: 50px;
    padding-bottom: 5px;
`;

const CSSDiv = styled.div`
  position: absolute;
  top: 49vh;
  left: 25vw;
  background-color: #637ED8;
  color: white;
  width:208px;
  height:70px;
  padding-bottom: 6px;
  rotate:-14deg;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-radius: 3px;
`;

const NextDiv = styled.div`
  position: absolute;
  top: 68vh;
  left: 17vw;
  background-color: #637ED8;
  color: white;
  padding: 16px 40px;
  rotate:23deg;
  font-size: 40px;
  border-radius: 8px;
  box-shadow: -10px 8px 14px rgba(0,0,0,0.3);
  padding-bottom: 20px;
`;

const PhotoshopDiv = styled.div`
  position: absolute;
  top: 69vh;
  left: 10vw;
  width:240px;
  height:50px;
  background-color:#383838;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50px;
  rotate:3deg;
  z-index:-1;
`;

const JsDiv = styled.div`
  position: absolute;
  top: 287px;
  right: 21vw;
  width:174px;
  height:66px;
  background-color:#808080;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50px;
  rotate:30deg;`

const AiDiv = styled.div`
  position: absolute;
  top: 47vh;
  right: 18vw;
  width:158px;
  height:58px;
  background-color:#637ED8;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50px;
  rotate:-11deg;`

const NodeDiv = styled.div`
  position: absolute;
  top: 64vh;
  right: 18vw;
  width:240px;
  height:50px;
  background-color:#808080;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50px;
  rotate:-28deg;`

const GitDiv = styled.div`
  position: absolute;
  top: 67vh;
  right: 26.5vw;
  width:180px;
  height:60px;
  background-color:#637ED8;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50px;
  rotate:28deg;
  z-index:-1;
  `

const FigmaDiv = styled.div`
  position: absolute;
  top: 70vh;
  right: 35vw;
  width:240px;
  height:50px;
  background-color:#383838;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50px;
  rotate:3deg;`


const HomeBackground = () => {
  return (
    <Container>
      <ReactDiv>React</ReactDiv>
      <HTMLDiv>HTML</HTMLDiv>
      <CSSDiv>CSS</CSSDiv>
      <NextDiv>Next.js</NextDiv>
      <PhotoshopDiv>Photoshop</PhotoshopDiv>
      <JsDiv>JavaScript</JsDiv>
      <AiDiv>Illustrator</AiDiv>
      <NodeDiv>Node.js</NodeDiv>
      <GitDiv>Git</GitDiv>
      <FigmaDiv>Figma</FigmaDiv>
    </Container>
  );
};

export default HomeBackground;
