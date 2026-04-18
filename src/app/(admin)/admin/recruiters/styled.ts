import styled from "styled-components";

export const ApproveButton = styled.button`
  background-color: #0b75ff;
  color: white;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

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

export const PaperContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeading = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: #000;
`;

export const TableSubHeading = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: #786096;
`;

export const SearchContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
`;
