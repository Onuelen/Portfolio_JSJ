import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import bgvideo from '/img/bgvideo4.mp4'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  overflow-x: hidden;
  position: relative;
  height: 445px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:10vh;
`;

const TextLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 96px;
  white-space: nowrap; /* 텍스트가 한 줄에 유지되도록 설정 */
`;

const ImgSource = styled.video`
  width: 468px;
  height: 100px;
  margin: 0 60px;
  margin-top: 18px;
  object-fit: cover;
  border-radius:50px;
`;

const Text = styled.p`
  color: #fff;
  text-transform: uppercase;
`;

const Imoji = styled.p`
  height: 113px;
  line-height: 1;
  transform-origin: center;
  margin-bottom: -15px;
  &.green {
  }
  &.purple {
  }
`;

const GlassMorphism = styled.div`
  position: absolute;
  top: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.05));
  box-shadow: 0 6px 15px 0 rgba(223, 234, 255, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 122px;
  height: 258px;
  right: 80vw;
`;

const GlassMop2 = styled(GlassMorphism)`
  width: 424px;
  height: 200px;
  right: 2vw;
  top: 230px;
`;

const AnimateText = () => {
  useEffect(() => {
    gsap.to('.green', {
      rotation: 360,
      duration: 4,
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

    // 텍스트가 보이지 않는 곳에서 시작하도록 설정
    gsap.set('.rightMove', { xPercent: 100 });
    gsap.set('.leftMove', { xPercent: -100 });

    // 텍스트 흐르는 애니메이션
    gsap.to('.rightMove', {
      xPercent: -100, // 텍스트가 왼쪽으로 흐름
      duration: 18,
      repeat: -1,
      ease: 'linear',
    });

    gsap.to('.leftMove', {
      xPercent: 100, // 텍스트가 오른쪽으로 흐름
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <Container>
      <TextLine className='rightMove'>
        <ImgSource src={bgvideo} autoPlay loop muted />
        <Text>developer</Text>
        <Imoji className='green'>🎨</Imoji>
        <Text>publisher</Text>
      </TextLine>
      <GlassMorphism />
      <TextLine className='leftMove'>
        <Imoji className='purple'>🏀</Imoji>
        <Text>developer</Text>
        <ImgSource src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s' alt='Dummy' />
        <Text>publisher</Text>
      </TextLine>
      <GlassMop2 />
    </Container>
  );
};

export default AnimateText;
