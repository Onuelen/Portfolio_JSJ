import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Container = styled.section`
  position:fixed;
  display:grid;
  place-items:center;
  height:100vh;
  width:100%;
  z-index:12;
  top:0;
  background-color: rgba(200,200,200,1);
`

const IntroTitle = styled.div`
  color: #006eff;
  max-width: 45%;
  text-align: center;
  mix-blend-mode: difference;
  z-index: 2;
  transform: translateY(40px);
  font-size:64px;
  font-weight:bold;
`

const IntroBackground = styled.div`
  position: absolute;
  top: 0;
  background-color: #1f1f1f;
  width: 50%;
  height: 100%;
  transform: scaleX(0);
`

const IntroBackLeft = styled(IntroBackground)`
  left: 0;
  transform-origin: left center;
`

const IntroBackRight = styled(IntroBackground)`
  left: 50%;
  transform-origin: right center;
`



const Intro = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut', duration: 1 },
    });

    tl.to('.IntroBackground', {
      scaleX: 1,
      duration: 1,
      stagger: 0, // 왼쪽과 오른쪽 배경이 순차적으로 나타남
    })
      .to(
        '.IntroTitle',
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.5,
          delay: 0.5,
        },
        '-=1' // 이전 애니메이션과 일부 겹치게
      )
      .to('.IntroBackground', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1,
        stagger: 0,
      })
      .to(
        '.IntroTitle',
        {
          y: -40,
          autoAlpha: 0,
          duration: 1,
        },
        '-=0.5'
      )
      .to('.Container', {
        y: '-100%',
        duration: 1,
      });

  }, []);

  return (
    <Container className="Container">
      <IntroTitle className="IntroTitle">Hi!</IntroTitle>
      <IntroBackLeft className='IntroBackground' />
      <IntroBackRight className='IntroBackground' />
    </Container>
  )
}

export default Intro
