import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const UploadButton = styled.button`
  background-color: #0b75ff;
  color: white;
  padding: 10px 14px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  font-weight: 400;
  width: fit-content;

  transition: all 0.3s ease;

  &:hover {
    background-color: #0b75ffe7;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #0b75ff;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const ProjectCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #00000033;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;

export const Status = styled.div`
  font-size: 12px;
  font-weight: 400;
  background-color: #0b75ff;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Time = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;

export const TechStack = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const Tech = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  background-color: #0b75ff;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #00000033;
`;

export const CardButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
