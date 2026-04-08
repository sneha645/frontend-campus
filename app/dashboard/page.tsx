"use client";

import {
  Container,
  Header,
  IconContainer,
  LeftHeader,
  LogoContainer,
  LogoTitle,
  Main,
  MainBar,
  Menu,
  MenuBtn,
  MenuHeading,
  PageTitle,
  RightHeader,
  SideBar,
} from "./styled";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Box } from "@mui/material";

import {
  LayoutDashboard,
  FolderOpen,
  Upload,
  MessageSquare,
  User,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    path: "/student/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  { path: "/student/profile", label: "Profile", icon: User },
  { path: "/student/upload", label: "Upload Project", icon: Upload },
  { path: "/student/projects", label: "My Projects", icon: FolderOpen },
  { path: "/student/feedback", label: "Feedback", icon: MessageSquare },
];

export default function Dashboard() {
  const [selectMenu, setSelectMenu] = useState<string>("");
  return (
    <Container>
      <Header>
        <LeftHeader>
          <LogoContainer>
            <IconContainer>
              <SchoolOutlinedIcon
                style={{ color: "#ffff", fontSize: "20px" }}
              />
            </IconContainer>
            <LogoTitle>CampusConnect</LogoTitle>
          </LogoContainer>
        </LeftHeader>
        <RightHeader>
          <PageTitle>
            {window.location.pathname.replace("/", "").charAt(0).toUpperCase() +
              window.location.pathname.slice(2)}
          </PageTitle>
        </RightHeader>
      </Header>
      <Main>
        <SideBar>
          <Menu>
            <MenuHeading>overview</MenuHeading>
            <Box>
              {menuItems.slice(0, 2).map((item) => (
                <MenuBtn
                  key={item.label}
                  $active={selectMenu === item.label}
                  onClick={() => setSelectMenu(item.label)}
                >
                  <item.icon size={20} />
                  {item.label}
                </MenuBtn>
              ))}
            </Box>
          </Menu>
          <Menu>
            <MenuHeading>career & academic</MenuHeading>
            <Box>
              {menuItems.slice(2, 4).map((item) => (
                <MenuBtn
                  key={item.label}
                  $active={selectMenu === item.label}
                  onClick={() => setSelectMenu(item.label)}
                >
                  <item.icon size={20} />
                  {item.label}
                </MenuBtn>
              ))}
            </Box>
          </Menu>
          <Menu>
            <MenuHeading>communication</MenuHeading>
            <Box>
              {menuItems.slice(4, 5).map((item) => (
                <MenuBtn
                  key={item.label}
                  $active={selectMenu === item.label}
                  onClick={() => setSelectMenu(item.label)}
                >
                  <item.icon size={20} />
                  {item.label}
                </MenuBtn>
              ))}
            </Box>
          </Menu>
        </SideBar>
        <MainBar></MainBar>
      </Main>
    </Container>
  );
}
