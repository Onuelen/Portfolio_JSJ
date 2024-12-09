import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ResumeProfile from '/img/resumeprofile.jpg'
import skillData from "../data/skills.json"; // JSON 파일 import

const ClickedAnimation = keyframes`
  0%{
    opacity:0;
    transform:translate(-2%,0);
  }
  100%{
    opacity:1;
    transform:translate(0,0);
  }
`

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
padding:80px 140px;
gap:60px;
border:1px solid #ff0;
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
  justify-content: center;
  align-items: center;
  gap:20px;
`
const WrapText = styled.div`
  width:100%;
  display:flex;
  justify-content:left;
  gap:10px;
  font-size:22px;
  font-weight:bold;
  & > p {
    color:#c7c7c7;
    font-weight:normal;
    word-break:initial;
  }
`
const WrapText2 = styled.div`
  width:100%;
  display:flex;
  justify-content:left;
  align-items: center;
  gap:20px;
  font-size:22px;
  & > p {
    color:#c7c7c7;
    font-weight:normal;
    word-break:initial;
      font-size:18px;
  }
`

const DetailInfo = styled.div`
display:flex;
gap:40px;
flex:2;
`

const LeftContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:40px;
word-break:initial;
`

const RightContainer = styled.div`
display:flex;
flex-direction:column;
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
  & > p {
    color:#c5c5c5;
    font-size:18px;
  }
  .clickText {
    font-size:1.6rem;
    color:#fff;
    display:flex;
    justify-content:center;
    margin-top:-2rem;
  }
`

const SubTitleBox = styled.h4`
  width:fit-content;
  font-size:32px;
  font-weight:bold;
  background-color:#35ff22;
  border-radius:50px;
  padding:10px 20px;
  line-height:1.2;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const IndexList = styled.div`
  font-size:20px;
  font-weight:normal;
  color:#fff;
  word-break:initial;
`

const Clicked = styled.div`
  width:100%;
  display:flex;
  gap:20px;
  animation:${ClickedAnimation} 0.5s ease-in-out;
  `

const ClickedSkill = styled.img`
width:140px;
height:140px;
`

const SkillDesc = styled.div`
color:#fff;
font-size:20px;
line-height:1.4;
`
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 0.5rem;
  justify-content: left; 
  width: 100%;
  padding: 0 0.4rem;
`;

const SkillButton = styled.button`
  font-size: 16px; 
  font-weight: bold;
  color: #292929;
  background: ${(props) => (props.isActive ? '#ffe600' : '#ff9100')};
  box-shadow:${(props) => (props.isActive ? 'inset 2px 2px 10px rgba(59, 59, 59, 0.8)' : 'inset 4px 4px 10px rgba(0, 0, 0, 0)')};
border-radius: 20px;
padding: 6px 10px;
white-space: nowrap;
cursor: pointer;
border: none;
transition:all 0.3s ease-in;
  &:hover {
  background: ${(props) => (props.isActive ? '#ffe600' : '#ffe600')};
  transform: translateY(-12%);
}
  &:active {
  background: ${(props) => (props.isActive ? '#ffcc00' : '#ffd700')};
  box-shadow: ${(props) => (props.isActive ? 'inset 2px 2px 4px rgba(0, 0, 0, 0.5)' : 'none')};
}
`;

const Resume = () => {
  const [clickedSkill, setClickedSkill] = useState(skillData[2]);
  const [animationKey, setAnimationKey] = useState(0);

  const handleSkillClick = (skill) => {
    setClickedSkill(skill);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <Container id='about'>
      <BasicInfo>
        <MainTitle>RESUME</MainTitle>
        <ProfileImg src={ResumeProfile} alt="ResumeProfile" />
        <TextContainer>
          <WrapText>
            <p>이름 :</p>
            <h2>지성준(JI SEONG JUN)</h2>
          </WrapText>
          <WrapText>
            <p>생년월일 :</p>
            <h2>1997.12.08</h2>
          </WrapText>
          <WrapText>
            <p>연락처 :</p>
            <h2>010-2971-2329</h2>
          </WrapText>
          <WrapText>
            <p>주소 :</p>
            <h2>경기도 용인시 기흥구</h2>
          </WrapText>
        </TextContainer>
      </BasicInfo>
      <DetailInfo>
        <LeftContainer>
          <SectionContainer>
            <SubTitleBox>Education 🎓</SubTitleBox>
            <IndexList>남서울대학교 시각미디어디자인학과 졸업</IndexList>
            <p>↪ 2018.03 ~ 2024.02</p>
            <IndexList>보라고등학교 졸업</IndexList>
            <p>↪ 2013.03 ~ 2016.02</p>
          </SectionContainer>
          <SectionContainer>
            <SubTitleBox>Experience 📚</SubTitleBox>
            <IndexList>남서울대학교 시각정보디자인학과 학생회</IndexList>
            <p>↪ 2022.03 ~ 2022.12</p>
            <IndexList>남서울대학교 총학생회 대학발전위원회 부장</IndexList>
            <p>↪ 2021.03 ~ 2021.07</p>
            <IndexList>대한민국육군 병장만기전역</IndexList>
            <p>↪ 2019.04 ~ 2020.119</p>
            <IndexList>남서울대학교 시각정보디자인학과 학생회</IndexList>
            <p>↪ 2018.03 ~ 2018.12</p>
          </SectionContainer>
        </LeftContainer>
        <RightContainer>
          <SectionContainer>
            <SubTitleBox>Award 🏆</SubTitleBox>
            <WrapText2>
              <IndexList>한성기업 산학협력 프로모션</IndexList>
              <p>↪ 최우수기획수상작 2023.09</p>
            </WrapText2>
            <WrapText2>
              <IndexList>대한민국디자인전람회</IndexList>
              <p>↪ 입선 2023.08</p>
            </WrapText2>
            <WrapText2>
              <IndexList>한국상품문화디자인 국제공모전</IndexList>
              <p>↪ 입선 2023.07</p>
            </WrapText2>
            <WrapText2>
              <IndexList>대한민국패키지디자인대전</IndexList>
              <p>↪ 패키지기술상 2022.12</p>
            </WrapText2>
            <WrapText2>
              <IndexList>삼성전자갤럭시캠퍼스큐레이터</IndexList>
              <p>↪ 2022.11</p>
            </WrapText2>
            <WrapText2>
              <IndexList>한국상품문화디자인 국제공모전</IndexList>
              <p>↪ 입선 2022.07</p>
            </WrapText2>
            <WrapText2>
              <IndexList>국제사이버트렌드디자인 공모전</IndexList>
              <p>↪ 입선 2021.12</p>
            </WrapText2>
          </SectionContainer>
          <SectionContainer>
            <SubTitleBox>Skills 🔧</SubTitleBox>
            {clickedSkill && (
              <Clicked key={animationKey}>
                <ClickedSkill src={clickedSkill.img} alt={clickedSkill.skillName} />
                <SkillDesc>{clickedSkill.description}</SkillDesc>
              </Clicked>
            )}
            <Skills>
              {skillData.map((skill) => (
                <SkillButton
                  key={skill.id}
                  isActive={clickedSkill.id === skill.id}
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill.skillName}
                </SkillButton>
              ))}
            </Skills>
            <p className='clickText'>↪ Click Button ! </p>
          </SectionContainer>
        </RightContainer>
      </DetailInfo>
    </Container >
  );
};

export default Resume
