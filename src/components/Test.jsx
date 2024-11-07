import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const Intro = styled.section`
  position: fixed;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 15;
`;

const IntroTitle = styled.h2`
  color: white;
  max-width: 45%;
  text-align: center;
  mix-blend-mode: difference;
  z-index: 2;
  transform: translateY(40px);
  visibility: hidden;
  opacity: 0;
`;

const IntroBackground = styled.div`
  position: absolute;
  top: 0;
  background-color: black;
  width: 50%;
  height: 100%;
  transform: scaleX(0);
  ${({ left }) =>
    left
      ? `left: 0; transform-origin: left center;`
      : `left: 50%; transform-origin: right center;`}
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
  max-width: 70vw;
  margin: 0 auto;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  display: inline-block;
  height: ${({ small }) => (small ? '16px' : '24px')};
  width: ${({ small }) => (small ? '16px' : '24px')};
  background-color: #7a3828;
  border-radius: 50%;
  margin-left: ${({ small }) => (small ? '4px' : '0')};
`;

const Nav = styled.nav`
  font-family: 'Ageo', sans-serif;
  letter-spacing: 0.05em;
  text-transform: lowercase;

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 35% 40% 25%;
  height: 100vh;
`;

const HeroCol = styled.div`
  height: 100vh;
  background-size: cover;

  ${({ type }) =>
    type === 1 &&
    `
    padding-top: 20%;

    h1 {
      position: relative;
      font-size: 220px;
      transform: translateX(50%);
      z-index: 3;
    }
  `}

  ${({ type }) =>
    type === 2 &&
    `
    img {
      object-fit: cover;
      height: 100%;
    }
  `}
`;

const Test = () => {
  useEffect(() => {
    const animationOptions = {
      ease: 'expo.inOut',
    };

    const introAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          ease: animationOptions.ease,
          duration: 1,
        },
      });

      tl.to('.intro__title', {
        duration: 1.5,
        y: 0,
        autoAlpha: 1,
        delay: 0.5,
      })
        .to('.intro__background--left, .intro__background--right', {
          scaleX: 1,
        })
        .to('.intro__background--left, .intro__background--right', {
          scaleY: 0,
          transformOrigin: 'top center',
        })
        .to('.intro__title', {
          duration: 1.5,
          y: -60,
          autoAlpha: 0,
        }, '-=0.6')
        .to('.intro', {
          y: '-100%',
        }, '-=0.5');

      return tl;
    };

    const skewInElements = elements => {
      const tl = gsap.timeline();
      tl.from(elements, {
        duration: 1,
        ease: animationOptions.ease,
        skewY: -5,
        autoAlpha: 0,
        y: 40,
      });
      return tl;
    };

    const fadeInElements = elements => {
      const tl = gsap.timeline();
      tl.from(elements, {
        duration: 1,
        ease: animationOptions.ease,
        y: '20px',
        autoAlpha: 0,
        stagger: 0.1,
      });
      return tl;
    };

    const master = gsap.timeline({
      paused: false,
      delay: 0.2,
    });

    master
      .add(introAnimation())
      .add(fadeInElements('.header__logo, .header__nav a'))
      .add(skewInElements('h1, .hero__col--2 img'), '-=1');
  }, []);

  return (
    <>
      <Intro className="intro">
        <IntroTitle className="intro__title hidden">
          Not everything is black and white
        </IntroTitle>
        <IntroBackground className="intro__background intro__background--left" left />
        <IntroBackground className="intro__background intro__background--right" />
      </Intro>

      <Header className="header">
        <HeaderLogo className="header__logo">
          <Dot />
          <Dot small />
        </HeaderLogo>
        <Nav className="header__nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </Nav>
      </Header>

      <Hero className="hero">
        <HeroCol className="hero__col hero__col--1" type={1}>
          <h1>Bon</h1>
        </HeroCol>
        <HeroCol className="hero__col hero__col--2" type={2}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/hero-13.jpg"
            alt="Hero"
          />
        </HeroCol>
        <HeroCol className="hero__col hero__col--3" />
      </Hero>
    </>
  );
};

export default Test;
