import styled from "styled-components";

export const StudentFeedbacksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow: auto;
  overflow-y: hidden;
`;

export const FeedbacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FeedbackCard = styled.div`
  background-color: #fff;
  width: 100%;
  height: fit-content;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  border: 1px solid #E2E8F0;
`;

export const ImageContainer = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #f8fafc;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeedbackContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FeedbackTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FeedbackTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const FeedbackStatus = styled.div<{$status:string}>(({$status = "pending"}) => `
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: ${$status === "approved" ? "#def2e6" : $status === "pending" ? "#fdefd8" : "#fbdfe5"};
  color: ${$status === "approved" ? "#16a34a" : $status === "pending" ? "#f59e0b" : "#e11d48"};
  font-weight: 400;
`);

export const FeedbackDescription = styled.p`
  font-size: 14px;
  width: 60%;
  font-weight: 400;
  color: #111827;
  margin: 0;
`;

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Technology = styled.div<{$backgroundColor:string}>(({$backgroundColor}) => `
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: ${$backgroundColor};
  color: #111827;
  font-weight: 400;
`);

export const FeedbackSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 120px;
  width: 300px
`;

export const Feedback = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  gap: 10px;
  background-color: #fdefd8;
  padding: 20px;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
