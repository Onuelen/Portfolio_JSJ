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
  top:180px;
  left:880px;
  width:640px;
  height:400px;
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
  width:360px;
  height:200px;
  top:28vh;
  right:0px;
  left:310px;
  border-radius:25px;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );

`

const MyImage = styled.img`
  position:absolute;
  width:450px;
  top:50px;
  left:520px;
  z-index:2;
`

const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:38px 48px;
    & > p {
    font-size:20px;
    color:#fff;
    line-height:1.4;
    margin-bottom:8px;
  }
`
const Name = styled.h2`
font-size:68px;
font-weight:bold;
color:#fff;
margin-bottom:30px;
`
const SubTitle = styled.h3`
font-size:38px;
font-weight:bold;
color:#fff;
margin-bottom:14px;
`
const Highlight = styled.span`
  color: #0cbaff;
  & > p {
    font-size:16px;
    line-height:1.4;
  }
`;

const Point = styled.div`
  position:absolute;
  background:#0cbaff;
  width:80px;
  height:36px;
  left:3%;
  top:-4%;
  opacity:40%;
  transform:rotate(-70deg);
`


const Home = () => {
  return (
    <Container>
      <HomeBackground />
      <GlassBoardLeft />
      <MyImage src={ProfileImage} alt='Profile Img' />
      <GlassBoard>
        <Point />
        <TextContainer>
          <Name>JI SEONG JUN</Name>
          <SubTitle><Highlight>I'M</Highlight> FrontEnd Developer</SubTitle>
          <p>안녕하세요! 저는 인터랙티브한 애니메이션으로 매력적인 웹을 설계하는 프론트엔드 개발자가 되고싶은 "몇 글자나 더 써야할지 실험중 입니다아아아아아 자차카타파하 아에이오 우어 아야 어여 오요우유 으이 끼끼꾸꾸 까까." 지성준입니다. </p>
          <Highlight><p>I USED HTML, CSS, Javascript ES6+, React.js, Next.js, Node.js, Figma, TypeScript</p>  </Highlight>
        </TextContainer>
      </GlassBoard>
    </Container>
  )
}

export default Home
