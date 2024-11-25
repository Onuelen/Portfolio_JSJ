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
  gap:20px;
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

const Clicked = styled.div`
  display:flex;
  gap:20px;
`

const ClickedSkill = styled.img`
width:150px;
height:150px;
`

const SkillDesc = styled.div`
color:#fff;
font-size:20px;
line-height:1.4;
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
            <Clicked>
              <ClickedSkill src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII='></ClickedSkill>
              <SkillDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse error molestiae odio dicta eveniet nam quis enim possimus explicabo, sunt mollitia aperiam aut reprehenderit, voluptatibus similique repudiandae nemo optio illum.</SkillDesc>
            </Clicked>
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
