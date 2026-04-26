import styled from "styled-components";

export const RecruiterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

`;

export const PaperContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TableHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

export const HeaderSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TableSubHeading = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: #666;
`;

export const SearchContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 10px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

export const ApproveButton = styled.button`
  background-color: #0b75ff;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #0b75ff;
  }
`;

export const RejectButton = styled.button`
  background-color: #e11d48;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #e11d48;
  }
`;

export const ViewProfile = styled.button`
  color: #000;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;

  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`;
