import styled from "styled-components";

export const ApproveButton = styled.button`
  background-color: #0b75ff;
  color: white;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  width: 80px;

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

export const RejectButton = styled.button`
  background-color: #e11d48;
  color: white;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  width: 80px;

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

export const ViewProfile = styled.button`
  color: #000;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;
