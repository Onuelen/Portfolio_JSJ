import React from 'react'
import styled from 'styled-components'
import HomeBackground from '../components/HomeBackground'

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
  top:22vh;
  right:24vw;
  width:460px;
  height:350px;
  border-radius:25px;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );
`
const GlassBoardLeft = styled(GlassBoard)`
  width:314px;
  height:190px;
  top:26vh;
  right:0vw;
  left:24vw;
  border-radius:25px;
  background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
  box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.1 );
`

const Home = () => {
  return (
    <Container>
      <HomeBackground />
      <GlassBoardLeft />
      <GlassBoard>BOX</GlassBoard>
    </Container>
  )
}

export default Home
