"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  BookOpenText,
  FolderOpen,
  LayoutDashboard,
  LogOutIcon,
} from "lucide-react";
import {
  AvatarContainer,
  AvatarEmail,
  AvatarImage,
  AvatarInfoContainer,
  AvatarName,
} from "@/app/(admin)/admin/styled";
import {
  Container,
  ContentContainer,
  IconContainer,
  LogoContainer,
  LogoTitle,
  MainBar,
  Menu,
  MenuBtn,
  PageTitle,
  RightHeader,
  SideBar,
} from "@/app/(student)/student/styled";

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

export default function MentorLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth();
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

  const handleMenuClick = (label: string, path: string) => {
    setActiveMenu(label);
    router.push(path);
  };

  return (
    <Container>
      <SideBar>
        <LogoContainer>
          <IconContainer>
            <SchoolOutlinedIcon style={{ color: "#ffff", fontSize: "20px" }} />
          </IconContainer>
          <LogoTitle>CampusConnect</LogoTitle>
        </LogoContainer>
        <Menu>
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
        </Menu>
        <AvatarContainer>
          <AvatarImage>{user.name.charAt(0).toUpperCase()}</AvatarImage>
          <AvatarInfoContainer>
            <AvatarName>{user.name}</AvatarName>
            <AvatarEmail>{user.email}</AvatarEmail>
          </AvatarInfoContainer>
        </AvatarContainer>
      </SideBar>
      <MainBar>
        <RightHeader>
          <PageTitle>{activeMenu}</PageTitle>
        </RightHeader>
        <ContentContainer>{children}</ContentContainer>
      </MainBar>
    </Container>
  );
}
