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
  {
    path: "/recruiter/interviews",
    label: "Interviews",
    icon: User,
  },
  {
    path: "/recruiter/settings",
    label: "Settings",
    icon: User,
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
  if (user.role !== "recruiter") {
    redirect(`/${user.role}/dashboard`);
  }

  const handleLogout = () => {
    logout();
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
          <PageTitle>Admin Dashboard</PageTitle>
          <LogoutContainer>
            <LogoutBtn onClick={handleLogout}>
              <LogOutIcon size={20} />
              Logout
            </LogoutBtn>
          </LogoutContainer>
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
