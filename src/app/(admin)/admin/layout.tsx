"use client";

import { ReactNode, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { LayoutDashboard, LogOutIcon, User } from "lucide-react";
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

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  AvatarContainer,
  AvatarEmail,
  AvatarImage,
  AvatarInfoContainer,
  AvatarName,
} from "./styled";

const AdminMenuItems = [
  {
    path: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/admin/recruiters",
    label: "Recruiters",
    icon: User,
  },
  {
    path: "/admin/mentors",
    label: "Mentors",
    icon: User,
  },
  {
    path: "/admin/students",
    label: "Students",
    icon: User,
  },
  {
    path: "/admin/logout",
    label: "Logout",
    icon: LogOutIcon,
  },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [activeMenu, setActiveMenu] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    redirect("/sign-in");
  }
  if (user.role !== "admin") {
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
