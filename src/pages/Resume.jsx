import React from 'react'
import styled from 'styled-components'
import ResumeProfile from '../img/resumeprofile.jpg'

const Container = styled.div`
border:1px solid #f0f;
width:100%;
height:calc(100vh - 60px);
display:flex;
padding:60px 160px;
gap:60px;
`
const MainTitle = styled.div`
  font-size:48px;
  font-weight:bold;
  color:#fff;
`;

const BasicInfo = styled.div`
margin-left:100px;
display:flex;
flex-direction:column;
align-items: center;
color:#fff;
font-size:36px;
gap:40px;
`
const ProfileImg = styled.img`
width:300px;
height:300px;
border-radius:50%;
object-fit:cover;
`

const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
`

const DetailInfo = styled.div`
display:flex;
gap:40px;
`

const LeftContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
flex:1;
gap:40px;
`

const RightContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
flex:1;
gap:40px;
`

const SectionContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  display:flex;
  flex-direction:column;
  gap:10px;
  flex:1;
`

const SubTitleBox = styled.h4`
  width:fit-content;
  font-size:24px;
  background-color:#15ff00;
  border-radius:50px;
  padding:10px 20px;
  line-height:1.2;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const IndexList = styled.div`
  width:100%;
  font-size:20px;
  color:#fff;
`
const Skills = styled.div`
  display:flex;
  gap:8px;
`

const Skill = styled.div`
  width:fit-content;
  font-size:18px;
  background:#ffbb00;
  border-radius:20px;
  padding:8px 14px;
  white-space:nowrap;
`

const Resume = () => {
  return (
    <Container>
      <BasicInfo>
        <MainTitle>RESUME</MainTitle>
        <ProfileImg src={ResumeProfile} alt='ResumeProfile' />
        <TextContainer>
          <h2>지성준</h2>
          <h2>지성준</h2>
          <h2>지성준</h2>
          <h2>지성준</h2>
          <h2>지성준</h2>
        </TextContainer>
      </BasicInfo>
      <DetailInfo>
        <LeftContainer>
          <SectionContainer>
            <SubTitleBox>Graduation</SubTitleBox>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
          </SectionContainer>
          <SectionContainer>
            <SubTitleBox>Graduation</SubTitleBox>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
          </SectionContainer>
        </LeftContainer>
        <RightContainer>
          <SectionContainer>
            <SubTitleBox>Graduation</SubTitleBox>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
            <IndexList>Lorem ipsum, dolor sit amet consectetur adipisicing elit</IndexList>
          </SectionContainer>
          <SectionContainer>
            <SubTitleBox>Skills</SubTitleBox>
            <Skills>
              <Skill>HTML</Skill>
              <Skill>CSS</Skill>
              <Skill>JavaScript ES6+</Skill>
              <Skill>React.js</Skill>
              <Skill>Node.js</Skill>
              <Skill>Next.js</Skill>
              <Skill>Git</Skill>
            </Skills>
          </SectionContainer>
        </RightContainer>
      </DetailInfo>
    </Container>
  )
}

export default Resume
