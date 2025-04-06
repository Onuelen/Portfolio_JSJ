import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  justify-items: center;
  align-items: start;
`;

const CardContainer = styled.div`
  position: relative;
  width: 480px;
  height: 270px;
  cursor: pointer;
  &:hover .card-background img {
    filter: blur(2px);
    transition: 0.5s ease-in-out;
  }
  &:hover div {
    bottom: 8%;
    opacity: 1;
  }
`;

const CardBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(0);
    transition: 0.5s ease-in-out;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 2%;
  right: 5%;
  z-index: 1;
  opacity:0;
  transition:all 1s;
  & > a {
  box-shadow: 2px 2px 6px rgba(0,0,0,0.6);
  transition:all 0.3s;
  &:hover {
    background:#96420e;
    box-shadow:inset 1px 1px 8px rgba(0,0,0,0.6);
  }
}
`;

const GitButton = styled.a`
  display: inline-block;
  width: 124px;
  height: 40px;
  border-radius: 8px;
  background: #ff5100;
  color: #fff;
  font-weight:bold;
  text-align: center;
  line-height: 40px;
  text-decoration: none;

`;

const PageButton = styled.a`
  display: inline-block;
  width: 124px;
  height: 40px;
  border-radius: 8px;
  background: #ff5100;
  color: #fff;
  font-weight:bold;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom:20px;
  gap: 8px;
  border:1px solid #f00;
  width:480px;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 24px;
`;

const SubTitle = styled.p`
  color: #fff;
  font-size: 16px;
  line-height:1.4;
`;

const WorkCard = ({ data }) => {
  return (
    <Container>
      <CardContainer>
        <CardBackground className="card-background">
          <img src={data.thumb} alt="Thumbnail" />
        </CardBackground>
        <Buttons>
          <GitButton href={data.git} target="_blank" rel="noopener noreferrer">
            GIT
          </GitButton>
          <PageButton href={data.goto} target="_blank" rel="noopener noreferrer">
            GO TO PAGE
          </PageButton>
        </Buttons>
      </CardContainer>
      <Titles>
        <Title>{data.title}</Title>
        <SubTitle>{data.subTitle}</SubTitle>
        <SubTitle>{data.desc}</SubTitle>
      </Titles>
    </Container>
  );
};

export default WorkCard;
