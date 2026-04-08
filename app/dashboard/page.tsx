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
import { useRouter } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  { path: "/dashboard/profile", label: "Profile", icon: User },
  { path: "/dashboard/upload-project", label: "Upload Project", icon: Upload },
  { path: "/projects", label: "My Projects", icon: FolderOpen },
  { path: "/feedback", label: "Feedback", icon: MessageSquare },
];

export default function Dashboard() {
  const router = useRouter();
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
                  onClick={() => {
                    setSelectMenu(item.label);
                    router.push(item.path);
                  }}
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
