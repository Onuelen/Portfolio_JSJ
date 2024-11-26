import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WorkCard from "../components/WorkCard";
import projectsData from "../data/worksCards.json";
import Slider from "react-slick";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TopContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 36px;
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
  width: 100%;
  margin-top: 20px;
`;

const SliderContainer = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    padding: 0 10px; /* 슬라이더 좌우 여백 */
  }
`;

const SlideWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 */
  grid-template-rows: repeat(3, auto); /* 3행 */
  gap: 20px; /* 카드 간격 */
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

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
    speed: 500,
    slidesToShow: 1, // 그룹 단위로 슬라이더 이동
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // 모바일
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // 태블릿
        settings: {
          slidesToShow: 1,
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
            const chunkIndex = Math.floor(index / 6); // 6개씩 그룹화
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
