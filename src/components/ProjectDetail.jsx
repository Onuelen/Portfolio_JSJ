import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background: #fff;
  width: 84%;
  height: 70%;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  color: #000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const ProjectDetail = ({ data, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        {/* <img src={data.detailImg1} alt="Detail 1" />
        <img src={data.detailImg2} alt="Detail 2" /> */}
      </ModalContent>
    </ModalBackground>
  );
};

export default ProjectDetail;
