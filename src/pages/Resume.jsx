import React from 'react'
import styled from 'styled-components'
import ResumeProfile from '../img/resumeprofile.jpg'

const Container = styled.div`
border:1px solid #f0f;
width:100%;
height:calc(100vh - 60px);
display:flex;
padding:60px 160px;
`
const MainTitle = styled.div`
  font-size:48px;
  font-weight:bold;
  color:#fff;

`

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

const DetailInfo = styled.div`
display:flex;
`

const LeftContainer = styled.div`
display:flex;
flex-direction:column;
`

const RightContainer = styled.div`
display:flex;
flex-direction:column;
`

const SubTitleBox = styled.div`
font-size:24px;
background-color:#15ff00;
border-radius:51%;
padding:10px 20px;
line-height:1.2;
`
const SectionContainer = styled.div`
  display:flex;
  flex-direction:column;
`

const Resume = () => {
  return (
    <Container>
      <BasicInfo>
        <MainTitle>RESUME</MainTitle>
        <ProfileImg src={ResumeProfile} alt='ResumeProfile' />
        <h2>지성준</h2>
      </BasicInfo>
      <DetailInfo>
        <LeftContainer>
          <SectionContainer></SectionContainer>
          <SectionContainer></SectionContainer>
        </LeftContainer>
        <RightContainer>
          <SectionContainer></SectionContainer>
          <SectionContainer></SectionContainer>
        </RightContainer>
      </DetailInfo>
    </Container>
  )
}

export default Resume
