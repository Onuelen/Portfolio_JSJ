import React from 'react'
import styled from 'styled-components'
import HomeBackground from '../components/HomeBackground'
import ProfileImage from '/img/profileImage3.png'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // 스크롤 마진 //
  scroll-margin-top: 60px;
`

const GlassBoard = styled.div`
  position: absolute;
  top: 28vh;
  right: 12vw;
  width: 38vw;
  height: 52vh;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.1));
  box-shadow: 0 6px 15px 0 rgba(131, 174, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    top: 30vh;
    right: 8vw;
    padding: 2vh 4vw;
  }
`

const GlassBoardLeft = styled(GlassBoard)`
  width: 22vw;
  height: 14vh;
  top: 75vh;
  left: 5vw;
  right: auto;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.2));
  box-shadow: 0 6px 15px 0 rgba(131, 174, 255, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`

const MyImage = styled.img`
  position: absolute;
  width: 46vw;
  bottom: 0;
  left: 10vw;
  z-index: 2;

  @media (max-width: 768px) {
    width: 70vw;
    left: 50%;
    transform: translateX(-50%);
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 3vw;

  & > p {
    font-size: 1.3vw;
    color: #fff;
    line-height: 1.5;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 3.2vw;
    }
  }
`

const Name = styled.h2`
  font-size: 3.5vw;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2vh;

  @media (max-width: 768px) {
    font-size: 7vw;
  }
`

const SubTitle = styled.h3`
  font-size: 2vw;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1vh;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`

const Highlight = styled.span`
  color: #00f7ff;

  & > p {
    font-size: 0.93vw;
    line-height: 1.4;
    margin-top:1vh;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
`

const Point = styled.div`
  position: absolute;
  background: #0cbaff;
  width: 4vw;
  height: 2vh;
  left: 3%;
  top: -4%;
  opacity: 0.4;
  transform: rotate(-70deg);
`

const Home = () => {
  return (
    <Container id="home">
      <HomeBackground />
      <div className="positionContainer">
        <GlassBoardLeft />
        <MyImage src={ProfileImage} alt="Profile Img" />
        <GlassBoard>
          <Point />
          <TextContainer>
            <Name>JI SEONG JUN</Name>
            <SubTitle>
              <Highlight>I'M</Highlight> FrontEnd Developer
            </SubTitle>
            <p>
              안녕하세요! 저는 인터랙티브한 애니메이션으로 매력적인 웹을 설계하는
              프론트엔드 개발자가 되고싶은 지성준입니다. 새로운 기술과 창의적인 아이디어로 사용자에게 신선한 경험을 주고싶습니다. 끊임없이 배우며 더 나은 페이지를 만들어가겠습니다."
            </p>
            <Highlight>
              <p>
                HTML, CSS, Javascript ES6+, React.js, Next.js, Node.js,
                Figma, TypeScript
              </p>
            </Highlight>
          </TextContainer>
        </GlassBoard>
      </div>
    </Container>
  )
}

export default Home
