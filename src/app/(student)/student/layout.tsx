"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
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
  PageTitle,
  RightHeader,
  SideBar,
} from "./styled";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Box } from "@mui/material";
import {
  BookOpenText,
  Briefcase,
  FolderOpen,
  LayoutDashboard,
  LogOutIcon,
  MessageSquare,
} from "lucide-react";
import {
  AvatarContainer,
  AvatarEmail,
  AvatarImage,
  AvatarInfoContainer,
  AvatarName,
} from "@/app/(admin)/admin/styled";

const StudentMenuItems = [
  {
    path: "/student/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/student/projects",
    label: "Projects",
    icon: FolderOpen,
  },
  {
    path: "/student/internships",
    label: "Internships",
    icon: FolderOpen,
  },
  {
    path: "/student/jobs",
    label: "Jobs",
    icon: Briefcase,
  },
  { path: "/student/assignments", label: "Assignments", icon: BookOpenText },
  { path: "/student/feedbacks", label: "Feedbacks", icon: MessageSquare },
  {
    path: "/student/logout",
    label: "Logout",
    icon: LogOutIcon,
  },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    redirect("/sign-in");
  }
  if (user.role !== "student") {
    redirect(`/${user.role}/dashboard`);
  }

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
          <AvatarContainer>
            <AvatarImage>{user.name.charAt(0).toUpperCase()}</AvatarImage>
            <AvatarInfoContainer>
              <AvatarName>{user.name}</AvatarName>
              <AvatarEmail>{user.email}</AvatarEmail>
            </AvatarInfoContainer>
          </AvatarContainer>
        </SideBar>
        <MainBar>{children}</MainBar>
      </Main>
    </Container>
  );
}
