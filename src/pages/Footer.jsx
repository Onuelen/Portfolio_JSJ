import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  background-color: #101010;
  padding: 8vh 8vw;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 4vh;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const LeftContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1rem;
    color: #cccccc;
  }
`

const RightContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  a {
    color: #d7fffd;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  padding: 1rem 1rem;
  background-color: #0cbaff;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #1269ff;
  }

  @media (max-width: 768px) {
  width: 48px;
  height: 48px;
}
`



const Footer = () => {
  return (
    <Container>
      <Top>
        <LeftContain>
          <h2>First Portfolio Project</h2>
          <p>Thanks for visiting my portfolio. Have a great day!</p>
        </LeftContain>
        <RightContain>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#workspace">WORK SPACE</a>
          <a href="#project">PROJECT LIST</a>
          <a href="#contact">CONTACT</a>
        </RightContain>
      </Top>

      <Bottom>
        <p>📧 Email: skwid17@naver.com</p>
        <p>📞 Phone: 010-2971-2329</p>
      </Bottom>

      <ScrollTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </ScrollTopButton>

    </Container>
  )
}

export default Footer
