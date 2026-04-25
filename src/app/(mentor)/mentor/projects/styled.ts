import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow: auto;
  overflow-y: hidden;
`;

export const ProjectModalContainer = styled.div`
  width: 700px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #00000033;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProjectModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 100%;
`;

export const ProjectModalTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

export const HrLine = styled.hr`
  width: 100%;
  color: #e5e7eb;
`;

export const ProjectModalSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const ProjectInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const ProjectInfoSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProjectInfoLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #00000099;
`;

export const ProjectInfoValue = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProjectStatus = styled.div`
  font-size: 12px;
  font-weight: 400;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 30px;
`;

export const ProjectDescriptionContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  background-color: #f7f8fa;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FeedbackInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #0b75ff;
  }

  &:hover {
    border-color: #0b75ff;
  }
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const ApproveButton = styled.button`
  background-color: #0b75ff;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const RejectButton = styled.button`
  background-color: #e11d48;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const FeedbackSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Feedback = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fdefd8;
  padding: 20px;
  border-radius: 8px;
`;

export const Technology = styled.span<{ $backgroundColor?: string }>`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: #0f172a;
  font-weight: 500;
`;
