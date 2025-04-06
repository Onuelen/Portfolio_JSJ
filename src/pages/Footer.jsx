import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
display:flex;
flex-direction:column;
padding:8.75rem 10rem;
color:white;
gap:20px;
border:1px solid #f00;
`
const Top = styled.div`
  display:flex;
  justify-content: space-between;
`
const LeftContain = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.8rem;
  
`

const RightContain = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.8rem;
  `
const Bottom = styled.div`
  display: flex;
  justify-content:space-between;
  `
const Info = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.8rem;
  `

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.8rem 1rem;
  background-color: #ffffff;
  color: #000;
  font-weight: bold;
  font-size: 1.8rem;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dddddd;
  }
`


const Footer = () => {
  return (
    <Container>
      <Top>
        <LeftContain>
          <h1>First Portfolio Project use React</h1>
          <h1>Thanks for watch my portfolio. have a good day for your today</h1>
        </LeftContain>
        <RightContain>
          <h1>#RESUME</h1>
          <h1>#Work Space</h1>
          <h1>#Project List</h1>
          <h1>#Contact</h1>
        </RightContain>
      </Top>
      <Bottom>
        <Info>
          <h1>Contact E-mail: skwid17@naver.com</h1>
          <h1>Contact Phone Number:010-2971-2329</h1>
        </Info>
      </Bottom>
      <ScrollTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ▲
      </ScrollTopButton>
    </Container>
  )
}

export default Footer
