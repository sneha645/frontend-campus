import { Box } from "@mui/material";
import styled from "styled-components";

export const LogoutContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow: auto;
  overflow-y: hidden;
`;

export const LogoutCard = styled(Box)`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
`;

export const LogoutHeadingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LogoutHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const LogoutSubHeading = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const ButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const LogoutButton = styled.button`
  width: 100%;
  background-color: #e11d48;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
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

export const CancelButton = styled.button`
  width: 100%;
  color: #000;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
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
