import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WorkCard from "../components/WorkCard";
import projectsData from "../data/worksCards.json";
import Slider from "react-slick";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const Container = styled.div`
  width: 100%;
  height:100vh;
  margin: 0 auto;
  padding: 140px 160px;
  box-sizing: border-box;
`;

const TopContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  h1 {
    color: #fff;
    font-size: 48px;
    font-weight: bold;
    line-height:1.2;
  }

  .filterButtons {
    display: flex;
    gap: 10px;
  }
`;

const FilterButton = styled.button`
  width:160px;
  padding: 10px 15px;
  font-size:24px;
  font-weight:bold;
  border-radius: 18px;
  border:none;
  background: ${(props) => (props.active ? "#fff700" : "#444")};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  cursor: pointer;

  &:hover {
    background: #fff700;
    color: #000;
  }
`;

const ContainCards = styled.div`
  width:100%;
  display:flex;
  margin-top: 20px;
  border:1px solid #f00;
`;

const SliderContainer = styled(Slider)`
position:relative;
width:100%;
background:aqua;
border:10px solid #00f;
.slick-slide {
  border:1px solid #f0f;
  }

  /* 도트 스타일 */
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
          display: none; /* 기본 점 스타일 제거 */
        }
      }
    }

    .slick-active button {
      background-color: #fff; /* 활성화 도트 색상 */
    }
  }
`;

// Custom Left Arrow
const LeftArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} style={{ ...arrowStyle, left: "-80px" }}>
      <RiArrowLeftWideLine />
    </button>
  );
};

// Custom Right Arrow
const RightArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} style={{ ...arrowStyle, right: "-80px" }}>
      <RiArrowRightWideLine />
    </button>
  );
};

// Common arrow button styles
const arrowStyle = {
  position: "absolute", // 위치를 절대값으로 설정
  top: "50%", // 세로 중앙
  transform: "translateY(-50%)", // 세로 중앙 정렬 보정
  zIndex: 10, // 슬라이더 위로 올라오도록 설정
  fontSize: "100px",
  color: "#ffffff6c",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  background: "none",
};

const Works = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.category.toLowerCase() === filter.toLowerCase());

  const sliderSettings = {
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  return (
    <Container>
      <TopContain>
        <h1>WORKS</h1>
        <div className="filterButtons">
          {["All 10", "HTML 3", "REACT 3", "NODE"].map((btn) => (
            <FilterButton
              key={btn}
              active={filter === btn}
              onClick={() => setFilter(btn)}
            >
              {btn}
            </FilterButton>
          ))}
        </div>
      </TopContain>
      <ContainCards>
        <SliderContainer {...sliderSettings}>
          {filteredProjects.map((project) => (
            <WorkCard key={project.id} data={project} />
          ))}
        </SliderContainer>
      </ContainCards>
    </Container>
  );
};

export default Works;
