import styled from "styled-components";

export const AssignmentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow: auto;
  overflow-y: hidden;
`;

export const AssignmentModalContainer = styled.div`
  width: 700px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #00000033;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AssignmentModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 100%;
`;

export const AssignmentModalTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

export const HrLine = styled.hr`
  width: 100%;
  color: #e5e7eb;
`;

export const AssignmentModalSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
`;

export const AssignmentInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const AssignmentInfoSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AssignmentInfoLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #00000099;
`;

export const AssignmentInfoValue = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AssignmentDescriptionContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  background-color: #f7f8fa;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UploadAssignmentContainer = styled.div`
  width: 700px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #00000033;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const UploadAssignmentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 100%;
`;

export const UploadAssignmentTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

export const UploadedAssignmentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const UploadAssignmentSubContainer = styled.div`
  background-color: #e3e8edff;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #00000026;
`;

export const UploadAssignmentTitleStyled = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const UploadAssignmentDescriptionStyled = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

export const AssignmentUploadInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.2s;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    background-color: #0056b3;
  }
`;