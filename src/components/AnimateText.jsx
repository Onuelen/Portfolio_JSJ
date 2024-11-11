import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
gap:40px;
`

const TextLine = styled.div`
position:relative;
display:flex;
justify-content: center;
align-items: center;
`
const ImgSource = styled.img`
width:468px;
height:124px;
`

const Text = styled.p`
font-size:64px;
color:#fff;
text-transform:uppercase;
`
const Imoji = styled.p`
  font-size:64px;

`

const GlassMorphism = styled.div`
position:absolute;
background: rgba( 0, 0, 0, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4.5px );
-webkit-backdrop-filter: blur( 4.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const GlassMop2 = styled(GlassMorphism)`
  
`
const AnimateText = () => {
  return (
    <Container>
      <TextLine>
        <GlassMorphism />
        <ImgSource src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s' alt='Dummy' />
        <Text>
          developer
        </Text>
        <Imoji>🏀</Imoji>
        <Text>
          publisher
        </Text>
      </TextLine>
      <TextLine>
        <GlassMop2 />
        <ImgSource src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s' alt='Dummy' />
        <Text>
          developer
        </Text>
        <Imoji>🏀</Imoji>
        <Text>
          publisher
        </Text>
      </TextLine>
    </Container>
  )
}

export default AnimateText
