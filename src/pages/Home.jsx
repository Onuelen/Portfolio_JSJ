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
  border:1px solid #f00;
`
const GlassBoard = styled.div`
  position:absolute;
  top:28%;
  right:15%;
  width:640px;
  height:400px;
  border-radius:1.5rem;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );
  display:flex;
  justify-content: center;
  z-index:1;
`
const GlassBoardLeft = styled(GlassBoard)`
  width:22%;
  height:14%;
  top:80%;
  right:0px;
  left:5%;
  border-radius:1.5rem;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.4 ),rgba(0, 0, 0, 0.2) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.3 );
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );
  z-index:10;
`

const MyImage = styled.img`
  position:absolute;
  width:46%;
  bottom:0;
  left:10%;
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
    <Container id='home'>
      <HomeBackground />
      <div className='positionContainer'>
        <GlassBoardLeft>

        </GlassBoardLeft>
        <MyImage src={ProfileImage} alt='Profile Img' />
        <GlassBoard>
          <Point />
          <TextContainer>
            <Name>JI SEONG JUN</Name>
            <SubTitle><Highlight>I'M</Highlight> FrontEnd Developer</SubTitle>
            <p>안녕하세요! 저는 인터랙티브한 애니메이션으로 매력적인 웹을 설계하는 프론트엔드 개발자가 되고싶은 지성준입니다. 새로운 기술과 창의적인 아이디어로 사용자에게 신선한 경험을 주고싶습니다. 끊임없이 배우며 더 나은 페이지를 만들어가겠습니다." </p>
            <Highlight><p>I USED HTML, CSS, Javascript ES6+, React.js, Next.js, Node.js, Figma, TypeScript</p>  </Highlight>
          </TextContainer>
        </GlassBoard>
      </div>
    </Container>
  )
}

export default Home
