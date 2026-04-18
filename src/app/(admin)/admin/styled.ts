import { Avatar } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LeftHeader = styled.div`
  height: 100%;
  width: 16%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 14px;
  background-color: #fff;
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

export const LogoContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b75ff;
  border-radius: 4px;
`;

export const LogoTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

export const RightHeader = styled.div`
  height: 100%;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  background-color: #f7f8fa;
  border-bottom: 1px solid #f0f0f0;
`;

export const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

export const Main = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
`;

export const SideBar = styled.div`
  width: 16%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-right: 1px solid #f0f0f0;
  padding: 14px;
  position: relative;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

export const MenuHeading = styled.h1`
  font-size: 16px;
  color: #848fa2;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0px 14px;
`;

export const MenuBtn = styled.button<{ $active: boolean }>(
  ({ $active = false }) => `
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 14px;
  color: ${$active ? "#fff" : "#000"};
  background-color: ${$active ? "#0b75ff" : "transparent"};
  font-size: 16px;
  border-radius: 4px;
`,
);

export const MainBar = styled.div`
  width: 84%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f8fa;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 16px 30px;
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const AvatarImage = styled(Avatar)(
  () => `
  width: 40px;
  height: 40px;
  font-size: 16px;
  background-color: #0b75ff;
  border-radius: 30px;
`,
);

export const AvatarInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const AvatarEmail = styled.p`
  font-size: 12px;
  color: #848fa2;
`;
