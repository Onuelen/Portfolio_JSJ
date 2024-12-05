import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ReactDiv = styled.div`
  position: absolute;
  top: 11vh;
  left: 8%;
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
  top: 34%;
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
  top: 50%;
  left: 15%;
  background-color: #637ED8;
  color: white;
  width:208px;
  height:74px;
  padding-bottom: 6px;
  rotate:-14deg;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-radius: 12px;
`;

const NextDiv = styled.div`
  position: absolute;
  top: 75vh;
  left: 14vw;
  background-color: #637ED8;
  color: white;
  padding: 16px 40px;
  rotate:23deg;
  font-size: 40px;
  border-radius: 16px;
  padding-bottom: 20px;
  box-shadow: -5px 8px 14px rgba(0,0,0,0.7);
`;

const PhotoshopDiv = styled.div`
  position: absolute;
  top: 65%;
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
  top: 16%;
  right: 10%;
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
  top: 34%;
  right: 1%;
  width:180px;
  height:80px;
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
  top: 66%;
  right: 6%;
  width:240px;
  height:64px;
  background-color:#808080;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50px;
  rotate:-28deg;
  box-shadow: -3px 6px 18px rgba(0,0,0,0.7);
  `

const GitDiv = styled.div`
  position: absolute;
  top: 74%;
  right: 36%;
  width:190px;
  height:68px;
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
  top: 86%;
  right: 44%;
  width:210px;
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
