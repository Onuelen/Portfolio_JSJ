import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 315px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color:#fff;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
  }
    &::after{
    content:"";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width:10px;
      height:10px;
      background:#ffffffa2;
      border-radius:50%;
      opacity: 0;
      transition: all 0.5s;
      }
      &:hover::after {
        display: inline-block;
        width:120%;
        height:280%;
        background: #ffffff11;
        animation: circlepop 0.5s ease-in forwards;
      }
@keyframes circlepop {
    0% {
    opacity: 1;
  }
  100%{
    opacity:0;
  }
}
`;


const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ thumb }) => `url(${thumb})`};
  background-size: cover;
  background-position: center;
  filter: brightness(50%); 
  transition: filter 0.3s ease-in-out;

  ${CardContainer}:hover & {
    filter: brightness(90%); 
  }

`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 40px;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const SubTitle = styled.div`
  position:absolute;
  bottom:30px;
  right:30px;
  font-size: 16px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const ProjectCards = ({ data, onClick }) => {
  return (
    <CardContainer onClick={() => onClick(data)}>
      <BackgroundImage thumb={data.thumb} />
      <TextOverlay>
        <Title>{data.title}</Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </TextOverlay>
    </CardContainer>
  );
};

export default ProjectCards;
