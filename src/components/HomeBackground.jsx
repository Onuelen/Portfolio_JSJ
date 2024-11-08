import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ReactDiv = styled.div`
  position: absolute;
  top: 21.296vh;
  left: 18vw;
  transform:rotate(-20deg);
  background-color: #637ED8;
  color:#fff;
  padding: 10px 40px;
  line-height:1;
  font-size: 40px;
  border-radius: 5px;
  font-weight: bold;
`;

const HTMLDiv = styled.div`
  position: absolute;
  top: 45vh;
  left: 24%;
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
`;

const CSSDiv = styled.div`
  position: absolute;
  top: 60vh;
  left: 29.5vw;
  background-color: #2965f1;
  color: white;
  width:208px;
  height:70px;
  padding: 10px;
  rotate:-10deg;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-radius: 3px;
`;

const NextDiv = styled.div`
  position: absolute;
  top: 70%;
  left: 10%;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
`;

const PhotoshopDiv = styled.div`
  position: absolute;
  top: 80%;
  left: 40%;
  background-color: #001e36;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
`;

const JsDiv = styled.div``

const AiDiv = styled.div``

const NodeDiv = styled.div``

const GitDiv = styled.div``

const FigmaDiv = styled.div``


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
