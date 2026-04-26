import styled from "styled-components";

export const AssignmentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PublishButton = styled.button`
  background-color: #007bff;
  border-radius: 4px;
  padding: 14px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const AssignmentFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
`;

export const AssignmentForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const AssignmentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
`;

export const AssignmentHeading = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: 600;
`;

export const Hrline = styled.hr`
  color: #e5e7eb;
  width: 100%;
`;

export const AssignmentFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  padding: 10px;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  outline: none;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  padding: 10px;
  font-size: 14px;
  resize: none;
`;

export const Select = styled.select`
  outline: none;
  border-radius: 4px !important;
  border: 1px solid #e5e7eb;
  padding: 10px;
  font-size: 14px;
`;

export const Option = styled.option`
  font-size: 14px;
`;

export const AssignmentTable = styled.div`
  width: 100%;
  height: 100%;
`;
