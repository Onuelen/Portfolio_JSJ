import React from 'react'
import styled from 'styled-components'
import HomeBackground from '../components/HomeBackground'

const Container = styled.div`
position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #f0f;
`

const Home = () => {
  return (
    <Container>
      <HomeBackground />
    </Container>
  )
}

export default Home
