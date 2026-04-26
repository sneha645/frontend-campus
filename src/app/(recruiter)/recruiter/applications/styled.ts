import styled from "styled-components";

/* Main Layout */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  overflow: auto;
  overflow-y: hidden;
`;

/* Header */
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

/* Search Section */
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
`;

/* Job Card */
export const JobList = styled.div``;

export const JobCard = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const JobInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const JobTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const JobTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const StatusBadge = styled.div`
  padding: 5px 10px;
  border-radius: 8px;
  background-color: #e3f4e9;
  color: #21a752;
`;

export const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
  font-size: 14px;
  color: #666;
`;

/* Actions */
export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ViewButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  color: #000;
  cursor: pointer;
  background: #fff;

  &:hover {
    background: #f9fafb;
  }
`;
