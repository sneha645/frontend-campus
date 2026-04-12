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
import { useRouter, usePathname } from "next/navigation";
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

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (label: string, path: string) => {
    setActiveMenu(label);
    router.push(path);
  };

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
          <PageTitle>{activeMenu}</PageTitle>
        </RightHeader>
      </Header>
      <Main>
        <SideBar>
          <Menu>
            <MenuHeading>overview</MenuHeading>
            <Box>
              {menuItems.slice(0, 2).map((item, index) => (
                <MenuBtn
                  $active={activeMenu === item.label}
                  key={index}
                  onClick={() => handleMenuClick(item.label, item.path)}
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
              {/* {menuItems.slice(2, 4).map((item) => (
                <MenuBtn
                  key={item.label}
                  $active={
                    pathname === item.path ||
                    (pathname?.startsWith(item.path) &&
                      item.path !== "/dashboard")
                  }
                  onClick={() => router.push(item.path)}
                >
                  <item.icon size={20} />
                  {item.label}
                </MenuBtn>
              ))} */}
              {menuItems.slice(2, 4).map((item, index) => (
                <MenuBtn
                  $active={activeMenu === item.label}
                  key={index}
                  onClick={() => handleMenuClick(item.label, item.path)}
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
              {menuItems.slice(4, 5).map((item, index) => (
                <MenuBtn
                  $active={activeMenu === item.label}
                  key={index}
                  onClick={() => handleMenuClick(item.label, item.path)}
                >
                  <item.icon size={20} />
                  {item.label}
                </MenuBtn>
              ))}
            </Box>
          </Menu>
        </SideBar>
        <MainBar>{children}</MainBar>
      </Main>
    </Container>
  );
}
