"use client";

import { useAuth } from "@/context/AuthContext";
import {
  Activity,
  BadgeCheck,
  Briefcase,
  Building,
  ChartColumnDecreasing,
  Download,
  Server,
  Sparkles,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

import {
  ActivityContainer,
  Button,
  DashboardContainer,
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
  ProgressContainer,
  ProgressHeading,
  ProgressHeadingContainer,
  ProgressSubContainer,
  ProgressSubHeading,
  StatCard,
  StatHeading,
  StatHeadingContainer,
  StatLogoContainer,
  StatsContainer,
  StatSubHeading,
  StatValue,
  SubHeading,
} from "./styled";
import { BarChart } from "@mui/x-charts/BarChart";
import { LinearProgress } from "@mui/material";

export default function AdminDashboardPage() {
  const { user } = useAuth();
  return (
    <DashboardContainer>
      {/* <HeaderContainer>
        <HeaderContent>
          <Heading>Welcome back, {user?.name}!</Heading>
          <HeaderSubContent>
            <SubHeading>
              A clean overview of platform health, placement performance, and
              real-time campus activity across students,
              <br /> faculty, recruiters, and departments.
            </SubHeading>
            <Button>
              <Download size={16} />
              Explore Weekly Report
            </Button>
          </HeaderSubContent>
        </HeaderContent>
      </HeaderContainer>
      <StatsContainer>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Active Users</StatHeading>
            <StatLogoContainer>
              <Users size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>1,234</StatValue>
          <StatSubHeading>
            <TrendingUp size={16} color="#0b75ff" />
            10% increase from last month
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Placement Rate</StatHeading>
            <StatLogoContainer>
              <Briefcase size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>90%</StatValue>
          <StatSubHeading>
            <BadgeCheck size={16} color="#0b75ff" />
            100 offers confirmed
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Recruiters Partners</StatHeading>
            <StatLogoContainer>
              <Building size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>1,234</StatValue>
          <StatSubHeading>
            <Sparkles size={16} color="#0b75ff" />
            24 pending verifications
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>System Uptime</StatHeading>
            <StatLogoContainer>
              <Server size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>99.9%</StatValue>
          <StatSubHeading>
            <Activity size={16} color="#0b75ff" />
            No downtime in 30 days
          </StatSubHeading>
        </StatCard>
      </StatsContainer>
      <ActivityContainer>
        <PlatformOverview>
          <PlatformOverviewHeadingContainer>
            <PlatformOverviewHeading>
              <ChartColumnDecreasing size={16} color="#0b75ff" />
              Platform Overview
            </PlatformOverviewHeading>
            <PlatformOverviewSubHeading>
              Monthly onboarding and placement activity across the institution
            </PlatformOverviewSubHeading>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <PlatformOverviewChart>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  categoryGapRatio: 0.3,
                  barGapRatio: 0.1,
                },
              ]}
              series={[
                {
                  data: [4000, 3000, 2000, 2780, 1890, 2390],
                  label: "Students",
                  color: "#0b75ff",
                },
                {
                  data: [2400, 1398, 9800, 3908, 4800, 3800],
                  label: "Offers",
                  color: "#00e396",
                },
              ]}
              height={350}
            />
          </PlatformOverviewChart>
        </PlatformOverview>
        <PlatformOverview style={{ width: "40%" }}>
          <PlatformOverviewHeadingContainer>
            <PlatformOverviewHeading>
              <Activity size={16} color="#0b75ff" />
              System Health
            </PlatformOverviewHeading>
            <PlatformOverviewSubHeading>
              Clean, calm monitoring for critical services{" "}
            </PlatformOverviewSubHeading>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <ProgressContainer>
            <ProgressSubContainer>
              <ProgressHeadingContainer>
                <ProgressHeading>Authentication Service</ProgressHeading>
                <ProgressSubHeading>99.9%</ProgressSubHeading>
              </ProgressHeadingContainer>
              <LinearProgress
                variant="determinate"
                color="success"
                style={{ height: "10px", borderRadius: "10px" }}
                value={20}
              />
            </ProgressSubContainer>
            <ProgressSubContainer>
              <ProgressHeadingContainer>
                <ProgressHeading>Authentication Service</ProgressHeading>
                <ProgressSubHeading>99.9%</ProgressSubHeading>
              </ProgressHeadingContainer>
              <LinearProgress
                variant="determinate"
                color="success"
                style={{ height: "10px", borderRadius: "10px" }}
                value={99.9}
              />
            </ProgressSubContainer>
            <ProgressSubContainer>
              <ProgressHeadingContainer>
                <ProgressHeading>Authentication Service</ProgressHeading>
                <ProgressSubHeading>99.9%</ProgressSubHeading>
              </ProgressHeadingContainer>
              <LinearProgress
                variant="determinate"
                color="success"
                style={{ height: "10px", borderRadius: "10px" }}
                value={99.9}
              />
            </ProgressSubContainer>
            <ProgressSubContainer>
              <ProgressHeadingContainer>
                <ProgressHeading>Authentication Service</ProgressHeading>
                <ProgressSubHeading>99.9%</ProgressSubHeading>
              </ProgressHeadingContainer>
              <LinearProgress
                variant="determinate"
                color="success"
                style={{ height: "10px", borderRadius: "10px" }}
                value={99.9}
              />
            </ProgressSubContainer>
            <ProgressSubContainer>
              <ProgressHeadingContainer>
                <ProgressHeading>Authentication Service</ProgressHeading>
                <ProgressSubHeading>99.9%</ProgressSubHeading>
              </ProgressHeadingContainer>
              <LinearProgress
                variant="determinate"
                color="success"
                style={{ height: "10px", borderRadius: "10px" }}
                value={99.9}
              />
            </ProgressSubContainer>
          </ProgressContainer>
        </PlatformOverview>
      </ActivityContainer> */}
    </DashboardContainer>
  );
}
