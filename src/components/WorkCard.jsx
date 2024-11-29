import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
margin-bottom:20px;
justify-content:center;
justify-items: center;
align-items: start;
`

const Card = styled.div`
width:424px;
height:240px;
background-image: url("https://dummyimage.com/640x4:3/");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
padding:30px 26px;
`

const Buttons = styled.div`
  display:flex;
  flex-direction:column;
  gap:116px;
  .linkButtons {
    display:flex;
    gap:8px;
  }
`

const DescButton = styled.button`
width:148px;
height:30px;
border-radius:20px;
background:#f0f;
`

const LinkButton = styled.button`
width:124px;
height:40px;
border-radius:8px;
background:#f0f;
`
const Titles = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:12px;
  gap:8px;
`

const Title = styled.h3`
color:#fff;
font-size:24px;
`

const SubTitle = styled.p`
color:#fff;
font-size:16px;
`


const WorkCards = () => {
  return (
    <Container>
      <Card>
        <Buttons>
          <DescButton>DESCRIPTION</DescButton>
          <div className='linkButtons'>
            <LinkButton>GIT</LinkButton>
            <LinkButton>GO TO PAGE</LinkButton>
          </div>
        </Buttons>
      </Card>
      <Titles>
        <Title>Project Name</Title>
        <SubTitle>HTML,CSS,SCSS</SubTitle>
      </Titles>
    </Container>
  )
}

export default WorkCards
