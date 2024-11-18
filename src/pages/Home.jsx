import React from 'react'
import styled from 'styled-components'
import HomeBackground from '../components/HomeBackground'
import ProfileImage from '../img/profileImage.png'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const GlassBoard = styled.div`
  position:absolute;
  top:20vh;
  right:380px;
  width:640px;
  height:380px;
  border-radius:25px;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );
  display:flex;
  justify-content: center;
  z-index:1;
`
const GlassBoardLeft = styled(GlassBoard)`
  width:380px;
  height:230px;
  top:25.5vh;
  right:0px;
  left:380px;
  border-radius:25px;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );

`

const MyImage = styled.img`
  position:absolute;
  width:400px;
  top:10vh;
  left:30vw;
  z-index:2;
`

const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:38px 48px;
`
const Name = styled.h2`
font-size:68px;
font-weight:bold;
color:#fff;
`
const SubTitle = styled.h3`
font-size:38px;
font-weight:bold;
color:#fff;
`

const Home = () => {
  return (
    <Container>
      <HomeBackground />
      <GlassBoardLeft />
      <MyImage src={ProfileImage} alt='Profile Img' />
      <GlassBoard>
        <TextContainer>
          <Name>JI SEONG JUN</Name>
          <SubTitle>I'M FrontEnd Developer</SubTitle>
          <p>안녕하세요! 저는 인터랙티브한 애니메이션으로 매력적인 웹을 설계하는 프론트엔드 개발자가 되고싶은 지성준입니다. </p>
          <p>I USED HTML, CSS, Javascript ES6+, React.js, Next.js, Node.js, Figma, TypeScript  </p>
        </TextContainer>
      </GlassBoard>
    </Container>
  )
}

export default Home
