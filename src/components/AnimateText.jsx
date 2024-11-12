import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Container = styled.div`
display:flex;
flex-direction:column;
gap:80px;
overflow-x:hidden;
position:relative;
height:445px;
display:flex;
justify-content: center;
align-items: center;
`

const TextLine = styled.div`
display:flex;
justify-content: center;
align-items: center;
font-weight:bold;
font-size:96px;
`
const ImgSource = styled.img`
width:468px;
height:100px;
margin:0 60px;
margin-top:18px;
`

const Text = styled.p`
color:#fff;
text-transform:uppercase;
`

const Imoji = styled.p`
height:113px;
line-height:1;
transform-origin:center;
margin-bottom:-15px;
  &.green {
  }
  &.purple {
  }
`;

const GlassMorphism = styled.div`
position:absolute;
top: 0;
background: linear-gradient(135deg,rgba( 255, 255, 255, 0.3 ),rgba(0, 0, 0, 0.1) ) ;
box-shadow: 0 6px 15px 0 rgba( 131, 174, 255, 0.2 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border-radius: 40px;
border: 1px solid rgba( 255, 255, 255, 0.1 );
width:122px;
height:258px;
right:80vw;
`
const GlassMop2 = styled(GlassMorphism)`
  width:424px;
  height:200px;
  right:2vw;
  top:230px;
`
const AnimateText = () => {

  useEffect(() => {
    gsap.to('.green', {
      rotation: 360,
      duration: 3,
      repeat: -1,
      repeatDelay: 0,
      ease: 'power1.inOut',
    });

    gsap.to('.purple', {
      rotation: 360,
      duration: 4.5,
      repeat: -1,
      repeatDelay: 0,
      ease: 'power2.inOut',
    });

    // 텍스트 흐르는 애니메이션
    gsap.to('.rightMove', {
      x: '-100%', // 텍스트가 왼쪽으로 흐르게 설정
      duration: 10, // 애니메이션 속도
      repeat: -1, // 무한 반복
      ease: 'linear', // 일정한 속도
    });

    gsap.to('.leftMove', {
      x: '100%', // 텍스트가 왼쪽으로 흐르게 설정
      duration: 15, // 애니메이션 속도
      repeat: -1, // 무한 반복
      ease: 'linear', // 일정한 속도
    });
  }, []);


  return (
    <Container>
      <TextLine className='rightMove'>
        <ImgSource src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s' alt='Dummy' />
        <Text>
          developer
        </Text>
        <Imoji className='green'>🎨</Imoji>
        <Text>
          publisher
        </Text>
      </TextLine>
      <GlassMorphism />
      <TextLine className='leftMove'>
        <Imoji className='purple'>🏀</Imoji>
        <Text>
          developer
        </Text>
        <ImgSource src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s' alt='Dummy' />
        <Text>
          publisher
        </Text>
      </TextLine>
      <GlassMop2 />
    </Container>
  );
};

export default AnimateText;
