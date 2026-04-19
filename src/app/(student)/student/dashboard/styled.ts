import styled from "styled-components";

export const StudentDashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const ProgressContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export const RecentActivityContainer = styled.div`
  width: 100%;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
  border-radius: 4px;
  padding: 10px;
`;

export const RecentActivitySubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const RecentActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RecentActivityContentTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const RecentActivityContentSubTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;