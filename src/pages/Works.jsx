import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WorkCard from "../components/WorkCard";
import projectsData from "../data/worksCards.json";
import Slider from "react-slick";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 160px;
`;

const TopContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  h1 {
    color: #fff;
    font-size: 48px;
    font-weight: bold;
  }

  .filterButtons {
    display: flex;
    gap: 10px;
  }
`;

const FilterButton = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
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
  margin-top: 20px;
  border:1px solid #f0f;
  background:#00f;
`;

const SliderContainer = styled(Slider)`
position:relative;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid #f0f;
    max-width:424px;
  }

  .slick-list {
    padding: 0 0; /* 슬라이더 좌우 여백 */
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

const SlideWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: fit-content;
  box-sizing: border-box;
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
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in",
    pauseOnHover: true,
    prevArrow: <LeftArrow />, // Custom Left Arrow
    nextArrow: <RightArrow />, // Custom Right Arrow
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <TopContain>
        <h1>WORKS</h1>
        <div className="filterButtons">
          {["All", "HTML", "REACT", "NODE"].map((btn) => (
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
          {filteredProjects.reduce((result, item, index) => {
            const chunkIndex = Math.floor(index / 2);
            if (!result[chunkIndex]) result[chunkIndex] = [];
            result[chunkIndex].push(item);
            return result;
          }, []).map((group, index) => (
            <SlideWrapper key={index}>
              {group.map((project) => (
                <WorkCard key={project.id} data={project} />
              ))}
            </SlideWrapper>
          ))}
        </SliderContainer>
      </ContainCards>
    </Container>
  );
};

export default Works;
