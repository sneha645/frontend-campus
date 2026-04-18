import Link from "next/link";
import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

export const ProjectCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StudentAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

export const ProjectCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const ProjectCardInfoSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProjectSubTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

export const Status = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

export const GithubLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  color: #0b75ff;
`;

export const ActionButton = styled(Button)`
  background-color: #0b75ff;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0b75ff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ViewAllButton = styled.button`
  background-color: transparent;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    color: #0b75ff;
  }

  &:active {
    transform: scale(0.95);
  }
`;