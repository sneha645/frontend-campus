"use client";

import { AuthProvider, useAuth } from "@/context/AuthContext";
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
  LogOutIcon,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const StudentMenuItems = [
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

const MentorMenuItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  { path: "/dashboard/profile", label: "Profile", icon: User },
  { path: "/dashboard/projects", label: "Projects", icon: FolderOpen },
  { path: "/dashboard/feedback", label: "Feedback", icon: MessageSquare },
];

const RecruiterMenuItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  { path: "/dashboard/profile", label: "Profile", icon: User },
  { path: "/dashboard/projects", label: "Projects", icon: FolderOpen },
  { path: "/dashboard/feedback", label: "Feedback", icon: MessageSquare },
];

const AdminMenuItems = [
  {
    path: "/recruiter",
    label: "Recruiter",
    icon: User,
  },
  {
    path: "/mentor",
    label: "Mentor",
    icon: User,
  },
  {
    path: "/student",
    label: "Student",
    icon: User,
  },
  // { path: "/dashboard/profile", label: "Profile", icon: User },
  // { path: "/dashboard/projects", label: "Projects", icon: FolderOpen },
  // { path: "/dashboard/feedback", label: "Feedback", icon: MessageSquare },
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

  const { user, token, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/sign-in");
  };

  return (
    <AuthProvider>
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
            {user?.role === "student" && (
              <>
                <Menu>
                  <MenuHeading>overview</MenuHeading>
                  <Box>
                    {StudentMenuItems.slice(0, 2).map((item, index) => (
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
                    {StudentMenuItems.slice(2, 4).map((item, index) => (
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
                    {StudentMenuItems.slice(4, 5).map((item, index) => (
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
              </>
            )}
            {user?.role === "mentor" && (
              <>
                <Menu>
                  <MenuHeading>overview</MenuHeading>
                  <Box>
                    {MentorMenuItems.slice(0, 2).map((item, index) => (
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
                    {MentorMenuItems.slice(2, 4).map((item, index) => (
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
                    {MentorMenuItems.slice(4, 5).map((item, index) => (
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
              </>
            )}
            {user?.role === "recruiter" && (
              <>
                <Menu>
                  <MenuHeading>overview</MenuHeading>
                  <Box>
                    {RecruiterMenuItems.slice(0, 2).map((item, index) => (
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
                    {RecruiterMenuItems.slice(2, 4).map((item, index) => (
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
                    {RecruiterMenuItems.slice(4, 5).map((item, index) => (
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
              </>
            )}
            {user?.role === "admin" && (
              <>
                <Menu>
                  {/* <MenuHeading>overview</MenuHeading> */}
                  <Box>
                    {AdminMenuItems.map((item, index) => (
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
                {/* <Menu>
                  <MenuHeading>career & academic</MenuHeading>
                  <Box>
                    {AdminMenuItems.slice(2, 4).map((item, index) => (
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
                </Menu> */}
                {/* <Menu>
                  <MenuHeading>communication</MenuHeading>
                  <Box>
                    {AdminMenuItems.slice(4, 5).map((item, index) => (
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
                </Menu> */}
              </>
            )}

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
    </AuthProvider>
  );
}
