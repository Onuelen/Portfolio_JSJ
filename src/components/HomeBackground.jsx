import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ReactDiv = styled.div`
  position: absolute;
  top: 21.296vh;
  left: 20%;
  background-color: #637ED8;
  color:#fff;
  padding: 10px 40px;
  line-height:1;
  display:flex;
  justify-content: center;
  font-size: 40px;
  border-radius: 5px;
  font-weight: bold;
`;

const HTMLDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  background-color: #e34f26;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
`;

const CSSDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  background-color: #2965f1;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
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
