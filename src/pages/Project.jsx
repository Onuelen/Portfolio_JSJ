import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCards from '../components/ProjectCards';
import projectData from '../data/ProjectData.json';
import ProjectDetail from '../components/ProjectDetail';

const Container = styled.div`
  width:100%;
  padding: 140px 160px;
  color: #fff;
  border:1px solid #f00;

    @media (min-width: 1920px) {
    padding: 10vh 8vw;
  }
`;

const Title = styled.h1`
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
gap:30px 50px;
justify-items: center; 
align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3vh;
  }
`;

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container id='project'>
      <Title>PROJECT</Title>
      <CardsContainer>
        {projectData.map((project) => (
          <ProjectCards
            key={project.id}
            data={project}
            onClick={setSelectedProject}
          />
        ))}
      </CardsContainer>
      {selectedProject && (
        <ProjectDetail
          data={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Container>
  );
};

export default Project;
