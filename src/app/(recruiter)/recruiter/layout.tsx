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
  Briefcase,
  Building2,
  LayoutDashboard,
  LogOutIcon,
  User,
} from "lucide-react";
import {
  AvatarContainer,
  AvatarEmail,
  AvatarImage,
  AvatarInfoContainer,
  AvatarName,
} from "@/app/(admin)/admin/styled";

const RecruiterMenuItems = [
  {
    path: "/recruiter/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/recruiter/company-profile",
    label: "Company Profile",
    icon: Building2,
  },
  {
    path: "/recruiter/job-postings",
    label: "Job Postings",
    icon: Briefcase,
  },
  {
    path: "/recruiter/applications",
    label: "Applications",
    icon: User,
  },
];

export default function RecruiterLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, logout, isLoading } = useAuth();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    redirect("/sign-in");
  }
  if (user.role !== "recruiter") {
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
              {RecruiterMenuItems.map((item, index) => (
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
