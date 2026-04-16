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
import { Box } from "@mui/material";
import {
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
    icon: MessageSquare,
  },
  {
    path: "/mentor/internships",
    label: "Internships",
    icon: MessageSquare,
  },
  {
    path: "/mentor/feedbacks",
    label: "Feedbacks",
    icon: MessageSquare,
  },
  {
    path: "/mentor/students",
    label: "Students",
    icon: User,
  },
  {
    path: "/student/settings",
    label: "Settings",
    icon: Settings,
  },
  {
    path: "/mentor/assignments",
    label: "Assignments",
    icon: MessageSquare,
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
          <LogoutContainer>
            <LogoutBtn onClick={handleLogout}>
              <LogOutIcon size={20} />
              Logout
            </LogoutBtn>
          </LogoutContainer>
        </SideBar>
        <MainBar>{children}</MainBar>
      </Main>
    </Container>
  );
}
