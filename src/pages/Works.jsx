import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WorkCard from '../components/WorkCard';
import projectsData from '../data/worksCards.json';
import Slider from 'react-slick';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from 'react-icons/ri';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 140px 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  h1 {
    color: #fff;
    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
  }

  .filterButtons {
    display: flex;
    gap: 10px;
  }
`;

const FilterButton = styled.button`
  width: 120px;
  padding: 8px 15px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 18px;
  border: 2px solid #fff700;
  background: ${(props) => (props.active ? '#fff700' : 'none')};
  color: ${(props) => (props.active ? '#252525' : '#fff')};
  cursor: pointer;
  transition:all 0.3s ease-in-out;
  &:hover {
    background: #fff700;
    color:#000;
    border:2px solid #fff700;
  }
`;

const ContainCards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

const SliderContainer = styled(Slider)`
  position: relative;
  width: 100%;
  border: 1px solid #f0f;
  .slick-slide {
  }

  .slick-dots {
    bottom: -50px;

    li {
      margin: 0 5px;

      button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #474747;

        &:before {
          display: none;
        }
      }
    }

    .slick-active button {
      background-color: #fff;
    }
  }
`;

const LeftArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} style={{ ...arrowStyle, left: '-80px' }}>
      <RiArrowLeftWideLine />
    </button>
  );
};

const RightArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} style={{ ...arrowStyle, right: '-80px' }}>
      <RiArrowRightWideLine />
    </button>
  );
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  fontSize: '48px',
  color: '#ffffff6c',
  border: 'none',
  cursor: 'pointer',
  background: 'none',
};

const Works = () => {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    setProjects(projectsData);

    const counts = projectsData.reduce(
      (acc, project) => {
        const category = project.category.toUpperCase();
        acc[category] = (acc[category] || 0) + 1;
        acc['ALL'] = (acc['ALL'] || 0) + 1;
        return acc;
      },
      { ALL: 0 }
    );
    setCategoryCounts(counts);
  }, []);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(
        (project) => project.category.toLowerCase() === filter.toLowerCase()
      );

  const sliderSettings = {
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container id='workspace'>
      <TopContain>
        <h1>WORKS</h1>
        <div className="filterButtons">
          {['All', 'HTML', 'REACT', 'NODE'].map((btn) => (
            <FilterButton
              key={btn}
              active={filter === btn}
              onClick={() => setFilter(btn)}
            >
              {btn} {categoryCounts[btn.toUpperCase()] || 0}
            </FilterButton>
          ))}
        </div>
      </TopContain>
      <ContainCards>
        <SliderContainer {...sliderSettings}>
          {filteredProjects.map((project) => (
            <div className='hidden2'>
              <WorkCard key={project.id} data={project} />
            </div>
          ))}
        </SliderContainer>
      </ContainCards>
    </Container>
  );
};

export default Works;
