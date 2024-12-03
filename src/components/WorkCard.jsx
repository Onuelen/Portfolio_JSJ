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

const Card = styled.div`
  width: 480px;
  height: 270px;
  background-image: ${(props) => `url(${props.thumb})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 8%;
  right: 5%;
  z-index: 1;
  pointer-events: all;
  opacity: 1;
`;

const GitButton = styled.a`
  display: inline-block;
  width: 124px;
  height: 40px;
  border-radius: 8px;
  background: #f0f;
  color: #fff;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
`;

const PageButton = styled.a`
  display: inline-block;
  width: 124px;
  height: 40px;
  border-radius: 8px;
  background: #f0f;
  color: #fff;
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
      <Card thumb={data.thumb}>
        <Buttons>
          <GitButton href={data.git} target="_blank" rel="noopener noreferrer">
            GIT
          </GitButton>
          <PageButton href={data.goto} target="_blank" rel="noopener noreferrer">
            GO TO PAGE
          </PageButton>
        </Buttons>
      </Card>
      <Titles>
        <Title>{data.title}</Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </Titles>
    </Container>
  );
};

export default WorkCard;
