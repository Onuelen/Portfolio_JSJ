import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba( 255, 255, 255, 0.3 );
  backdrop-filter: blur( 1rem );
  -webkit-backdrop-filter: blur( 1rem );
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  width: 84%;
  height: 74%;
  border-radius: 1rem;
  padding: 20px;
  position: relative;
  color: #000;
background: rgba( 0, 0, 0, 0.7   );
box-shadow: 1rem 1.2rem 1.5rem rgba( 0, 0, 0, 0.5 );
backdrop-filter: blur( 1.2rem );
-webkit-backdrop-filter: blur( 1.2rem );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.2 );
`;

const CloseButton = styled.button`
  position: absolute;
  top: 9%;
  right: 3%;
  background: transparent;
  border: none;
  font-size: 2rem;
  color:#fff;
  cursor: pointer;
`;

const LeftWrap = styled.div`
position:absolute;
top:10%;
left:3.2%;
  display:flex;
  width:26%;
  height:89%;
  flex-direction:column;
margin-top:-1%;
  .title {
    padding-left:0.4rem;
    font-size:4rem;
    font-weight:bold;
    line-height:1.3;
    color:#fff;
    margin-bottom:2rem;
  }
  .desc {
    width:100%;
    background:#3d3d3d73;
    color:#dddddd;
    padding:1.2rem 1.2rem;
    font-size:1rem;
    line-height:1.45;
    border-radius:1.4rem;
    margin-bottom:1rem;
  }
  .textWrap{
    width:100%;
    background:#3d3d3d73;
    color:#dddddd;
    padding:1.2rem 1.2rem;
    border-radius:1.4rem;
    line-height:1.4rem;
    margin-bottom:1rem;
  }
`
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; 
  padding:0 0.2rem;
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ececec;
  background: #252525;
  border-radius: 0.2rem;
  /* box-shadow: 0.1rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2); */
`;

const ImageBackground = styled.div`
width:68%;
height:86%;
display:flex;
flex-direction:column;
position:absolute;
top: 52%;
right:0;
transform:translate(0, -50%);
border-radius: 1rem 0 0 1rem;
padding: 3.2rem 3.5rem;   
gap:2rem;
background: rgba( 255, 255, 255, 0.2 );
box-shadow: inset 8px 0px 28px 0 rgba( 0, 0, 0, 0.7 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
.subTitle {
  font-size:1.4rem;
  margin-left:0.2rem;
  color:#fff;
}
.imageWrap{
  display:flex;
  justify-content: space-between;
  gap:2rem;
  & > img {
    box-shadow: 4px 4px 1.5rem rgba(0,0,0,0.6);
  }
  .thumb1{
    width:700px;
    height:350px;
    border-radius: 1rem;
  }
  .thumb2{
    width:200px;
    height:350px;
    border-radius:1rem;
  }
}
.btnWrap {
  display:flex;
  gap:1rem;
  justify-content:right;
  font-size:1.2rem;
  color:#ececec;
  font-weight:bold;
  & > div {
    width:fit-content;
    padding:0.7rem 2rem;
    background:#252525;
    border-radius:2rem;
    cursor: pointer;
    box-shadow: 2px 3px 0.5rem rgba(0,0,0,0.4),inset 0 0 0.5rem rgba(255,255,255,0);
    transition:all 0.3s;
    &:hover{
      background:#0059ff;
      box-shadow: 0px 0px 0.5rem rgba(0,0,0,0),inset 0 0 0.5rem rgba(0,0,0,0.4);
    }
  }
}
`


const ProjectDetail = ({ data, onClose }) => {
  const skillsArray = data.skills.split(',');
  return (
    <ModalBackground onClick={onClose}>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <LeftWrap>
          <h2 className='title'>{data.title}</h2>
          <p className='desc'>{data.description}</p>
          <div className='textWrap'>
            <p className='period'>작업기간 : {data.workPeriod}</p>
            <p className='teamName'>{data.teamName}</p>
            <p className='take'>기여도 : {data.take}</p>
          </div>
          <SkillsContainer>
            {skillsArray.map((skill, index) => (
              <SkillTag key={index}>{skill.trim()}</SkillTag>
            ))}
          </SkillsContainer>
        </LeftWrap>
        <ImageBackground>
          <h2 className='subTitle'>{data.subTitle}</h2>
          <div className='imageWrap'>
            <img className='thumb1' src={data.detailImg1} alt="Detail 1" />
            <img className='thumb2' src={data.detailImg2} alt="Detail 2" />
          </div>
          <div className='btnWrap'>
            <div className='btnFigma'>Figma</div>
            <div className='btnPage'>Go To Page</div>
            <div className='btnGit'>Git</div>
          </div>
        </ImageBackground>
      </ModalContent>
    </ModalBackground>
  );
};

export default ProjectDetail;
