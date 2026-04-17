import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
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
`;

export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 14px;
  color: #000;
  background-color: transparent;
  font-size: 16px;
  border-radius: 4px;
`;
