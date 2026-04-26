"use client";

import { useAuth } from "@/context/AuthContext";
import {
  ArrowUpRight,
  Bookmark,
  Briefcase,
  Eye,
  Search,
  Sparkle,
  Upload,
} from "lucide-react";
import {
  ProgressContainer,
  RecentActivityContainer,
  RecentActivityContent,
  RecentActivityContentSubTitle,
  RecentActivityContentTitle,
  RecentActivitySubContainer,
  StudentDashboardContainer,
} from "./styled";
import {
  ActivityContainer,
  Button,
  HeaderContainer,
  HeaderContent,
  HeaderSubContent,
  Heading,
  HrLine,
  PlatformOverview,
  PlatformOverviewChart,
  PlatformOverviewHeading,
  PlatformOverviewHeadingContainer,
  PlatformOverviewSubHeading,
  StatCard,
  StatHeading,
  StatHeadingContainer,
  StatLogoContainer,
  StatsContainer,
  StatSubHeading,
  StatValue,
  SubHeading,
} from "@/app/(admin)/admin/dashboard/styled";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { recentApplicationsTableColumns } from "@/types/type";

export default function StudentDashboardPage() {
  const { user } = useAuth();
  return (
    <StudentDashboardContainer>
      <HeaderContainer>
        <HeaderContent>
          <Heading>Welcome back, {user?.name}!</Heading>
          <HeaderSubContent>
            <SubHeading>
              Here's a summary of your academic
              <br /> and placement activities.
            </SubHeading>
            <Button>
              <Search size={16} />
              Find Jobs
            </Button>
          </HeaderSubContent>
        </HeaderContent>
      </HeaderContainer>
      <StatsContainer>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Project Uploaded</StatHeading>
            <StatLogoContainer>
              <Upload size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>10</StatValue>
          <StatSubHeading>
            <ArrowUpRight size={16} color="#0b75ff" />
            +2 this month
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Job Applied</StatHeading>
            <StatLogoContainer>
              <Briefcase size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>10</StatValue>
          <StatSubHeading>
            <ArrowUpRight size={16} color="#0b75ff" />
            +2 this month
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Saved Internships</StatHeading>
            <StatLogoContainer>
              <Bookmark size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>8</StatValue>
          <StatSubHeading>
            <Bookmark size={16} color="#0b75ff" />
            -No change
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Profile Views</StatHeading>
            <StatLogoContainer>
              <Eye size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>10</StatValue>
          <StatSubHeading>
            <ArrowUpRight size={16} color="#0b75ff" />
            +10% from last month
          </StatSubHeading>
        </StatCard>
      </StatsContainer>
      <ActivityContainer>
        <PlatformOverview style={{ width: "30%" }}>
          <PlatformOverviewHeadingContainer>
            <PlatformOverviewHeading>
              Placement Readiness
            </PlatformOverviewHeading>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <PlatformOverviewChart
            style={{ flexDirection: "column", gap: "20px" }}
          >
            <ProgressContainer>
              <CircularProgressbar
                value={75}
                text={`${75}%`}
                styles={{
                  path: {
                    stroke: "#0b75ff",
                  },
                  text: {
                    fill: "#333",
                    fontSize: "20px",
                    fontWeight: "600",
                  },
                }}
              />
            </ProgressContainer>
            <RecentActivityContainer>
              <RecentActivitySubContainer>
                <Sparkle color="#0b75ff" size={24} />
                <RecentActivityContent>
                  <RecentActivityContentTitle>
                    Complete React Assesment
                  </RecentActivityContentTitle>
                  <RecentActivityContentSubTitle>
                    +5% to score
                  </RecentActivityContentSubTitle>
                </RecentActivityContent>
              </RecentActivitySubContainer>
            </RecentActivityContainer>
            <RecentActivityContainer>
              <RecentActivitySubContainer>
                <Sparkle color="#0b75ff" size={24} />
                <RecentActivityContent>
                  <RecentActivityContentTitle>
                    Complete React Assesment
                  </RecentActivityContentTitle>
                  <RecentActivityContentSubTitle>
                    +5% to score
                  </RecentActivityContentSubTitle>
                </RecentActivityContent>
              </RecentActivitySubContainer>
            </RecentActivityContainer>
          </PlatformOverviewChart>
        </PlatformOverview>
        <PlatformOverview style={{ width: "70%" }}>
          <PlatformOverviewHeadingContainer>
            <PlatformOverviewHeading>
              Recent Applications
            </PlatformOverviewHeading>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <TableContainer style={{ height: "100%", position: "relative" }}>
            <Table>
              <TableHead style={{ backgroundColor: "#f7f8fa" }}>
                <TableRow>
                  {recentApplicationsTableColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontWeight: "600",
                        fontFamily: "Poppins",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
      
              </TableBody>
            </Table>
          </TableContainer>
        </PlatformOverview>
      </ActivityContainer>
    </StudentDashboardContainer>
  );
}
