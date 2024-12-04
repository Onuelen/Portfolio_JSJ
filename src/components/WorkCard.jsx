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
    filter: blur(3px);
    transition: 0.5s ease-in-out;
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
  bottom: 8%;
  right: 5%;
  z-index: 1;
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
  gap: 8px;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 24px;
`;

const SubTitle = styled.p`
  color: #fff;
  font-size: 16px;
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
      </Titles>
    </Container>
  );
};

export default WorkCard;
