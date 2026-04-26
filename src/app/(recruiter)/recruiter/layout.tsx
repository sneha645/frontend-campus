"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  Briefcase,
  Building2,
  LayoutDashboard,
  LogOut,
  User,
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
    path: "/recruiter/logout",
    label: "Logout",
    icon: LogOut,
  },
];

export default function RecruiterLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth();
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
      <SideBar>
        <LogoContainer>
          <IconContainer>
            <SchoolOutlinedIcon style={{ color: "#ffff", fontSize: "20px" }} />
          </IconContainer>
          <LogoTitle>CampusConnect</LogoTitle>
        </LogoContainer>
        <Menu>
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
