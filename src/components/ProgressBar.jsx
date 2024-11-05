import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width:100%;
  height:6px;
  background: linear-gradient(to right, #163156 0%, #6B6B6B 100%);
  position:fixed;
  top:0;
  left:0;
  z-index:10;
`;

const ProgressLine = styled.div`
  height:6px;
  background:linear-gradient(to right, #002A62 0%, #00BBFF 100%);
  transition: width 0.4s cubic-bezier(0.51, 0.16, 0.22, 0.67);
`;

const ProgressBar = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setScrolled(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProgressContainer>
      <ProgressLine style={{ width: `${scrolled}%` }} />
    </ProgressContainer>
  );
};

export default ProgressBar
