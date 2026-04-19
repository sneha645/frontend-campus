import styled from "styled-components";

export const RecruiterDashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const PipelineContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
`;

export const PipelineCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  background-color: #f1f5f9;
  border: 1px solid #aaaaaa23;
  border-radius: 8px;
  height: 200px;
  padding: 20px;
`;

export const PipelineTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #868d99;
`;

export const PipelineValue = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #1e293b;
`;