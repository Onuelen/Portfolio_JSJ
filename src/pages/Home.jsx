import React from 'react'
import styled from 'styled-components'
import HomeBackground from '../components/HomeBackground'
import ProfileImg from '../img/profileImage.png'

const Container = styled.div`
position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > img {
    width:340px;
  }
`
const GlassBoard = styled.div`
  position:absolute;
  top:22vh;
  right:24vw;
  width:24vw;
  height:32vh;
  border-radius:25px;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );
  display:flex;
  justify-content: center;
  align-items: center;
`
const GlassBoardLeft = styled(GlassBoard)`
  width:16vw;
  height:17.5vh;
  top:25.5vh;
  right:0vw;
  left:16vw;
  border-radius:25px;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );

`

const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
`
const Name = styled.h2`

`

const Home = () => {
  return (
    <Container>
      <HomeBackground />
      <GlassBoardLeft />
      <img src={ProfileImg} alt="Profile" />
      <GlassBoard>
        <div>
          <h2>JI SEONG JUN</h2>
          <h3>I'M FrontEnd Developer</h3>
          <p>안녕하세요! 저는 인터랙티브한 애니메이션으로 매력적인 웹을 설계하는 프론트엔드 개발자가 되고싶은 지성준입니다. </p>
          <p>I USED HTML, CSS, Javascript ES6+, React.js, Next.js, Node.js, Figma, TypeScript  </p>
        </div>
      </GlassBoard>
    </Container>
  )
}

export default Home
