import styled from "styled-components";

export const StudentJobsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow: auto;
  overflow-y: hidden;
`;

export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
`;

export const NotFoundText = styled.p`
  font-size: 16px;
  color: #666;
`;

export const JobCard = styled.div`
  background-color: #fff;
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const LogoContainer = styled.div`
  height: 120px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JobInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const JobTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const JobTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const JobCompany = styled.p`
  font-size: 16px;
  color: #666;
`;

export const JobDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const JobDetailSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  border-radius: 4px;
`;


export const JobDetailText = styled.p`
  font-size: 16px;
  color: #666;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-left: 20px;
  height: 100%;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ApplyButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

export const ViewDetailsButton = styled.button`
  padding: 10px 20px;
  background-color: #e5e7eb;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;