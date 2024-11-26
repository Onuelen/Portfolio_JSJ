import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import WorkCard from '../components/WorkCard'
import projectsData from "../data/worksCards.json";

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;

.cards{
  display:flex;
  flex-direction:column;
  justify-content: center;
  padding:20px;
  border:1px solid #f0f;
}
`
const TopContain = styled.div`
display:flex;
    h1{
    color:#fff;
    font-size:48px;
    font-weight:bold;
    margin-bottom:34px;
  }
  .filterButtons{
    display:flex;
    gap:10px;
  }
`
const FilterButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#007bff" : "#ddd")};
  color: ${(props) => (props.active ? "white" : "black")};

  &:hover {
    background: #0056b3;
    color: white;
  }
`;

const ContainCards = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 3fr);
  gap:26px 80px;
`

const Works = () => {

  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  // 데이터 로드 (JSON 파일에서 불러오기)
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  // 필터링된 프로젝트
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Container>
      <div className='cards'>
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
          {filteredProjects.map((project) => (
            <WorkCard key={project.id} data={project} />
          ))}
        </ContainCards>
      </div>
    </Container>
  )
}

export default Works
