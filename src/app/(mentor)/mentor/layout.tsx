"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { lazy, ReactNode, useState } from "react";
import {
  Container,
  Header,
  IconContainer,
  LeftHeader,
  LogoContainer,
  LogoTitle,
  LogoutBtn,
  LogoutContainer,
  Main,
  MainBar,
  Menu,
  MenuBtn,
  PageTitle,
  RightHeader,
  SideBar,
} from "./styled";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Avatar, Box } from "@mui/material";
import {
  BookOpenText,
  FolderOpen,
  LayoutDashboard,
  LogOutIcon,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

const StudentMenuItems = [
  {
    path: "/mentor/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/mentor/projects",
    label: "Projects",
    icon: FolderOpen,
  },
  {
    path: "/mentor/internships",
    label: "Internships",
    icon: FolderOpen,
  },
  {
    path: "/mentor/assignments",
    label: "Assignments",
    icon: BookOpenText,
  },
  {
    path: "/mentor/logout",
    label: "Logout",
    icon: LogOutIcon,
  },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, logout, isLoading } = useAuth();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    redirect("/sign-in");
  }
  if (user.role !== "mentor") {
    redirect(`/${user.role}/dashboard`);
  }

  const handleLogout = () => {
    logout();
    router.push("/sign-in");
  };

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
            <Box>
              {StudentMenuItems.map((item, index) => (
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#fff",
              padding: "16px 30px",
              borderTop: "1px solid #f0f0f0",
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
            }}
          >
            <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#000",
                }}
              >
                {user.name}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#848fa2",
                }}
              >
                {user.email}
              </p>
            </div>
          </div>
        </SideBar>
        <MainBar>{children}</MainBar>
      </Main>
    </Container>
  );
}
