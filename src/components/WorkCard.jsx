import React from 'react';
import styled from 'styled-components';
import worksCards from '../data/worksCards.json'; // JSON 데이터 import

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  justify-items: center;
  align-items: start;
`;

const Card = styled.div`
  width: 424px;
  height: 240px;
  background-image: ${(props) => `url(${props.thumb})`}; /* JSON 데이터의 thumb 적용 */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 30px 26px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 116px;
  .linkButtons {
    display: flex;
    gap: 8px;
  }
`;

const DescButton = styled.button`
  width: 148px;
  height: 30px;
  border-radius: 20px;
  background: #f0f;
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

const WorkCards = () => {
  return (
    <>
      {worksCards.map((work) => (
        <Container key={work.id}>
          <Card thumb={work.thumb}>
            <Buttons>
              <DescButton>{work.desc}</DescButton>
              <div className="linkButtons">
                <GitButton href={work.git} target="_blank" rel="noopener noreferrer">
                  GIT
                </GitButton>
                <PageButton href={work.goto} target="_blank" rel="noopener noreferrer">
                  GO TO PAGE
                </PageButton>
              </div>
            </Buttons>
          </Card>
          <Titles>
            <Title>{work.title}</Title>
            <SubTitle>{work.subTitle}</SubTitle>
          </Titles>
        </Container>
      ))}
    </>
  );
};

export default WorkCards;
