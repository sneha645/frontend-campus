"use client";

import { useAuth } from "@/context/AuthContext";
import {
  Activity,
  ArrowUpRight,
  Bookmark,
  Briefcase,
  Calendar,
  ChartColumnDecreasing,
  Eye,
  Plus,
  User,
} from "lucide-react";
import {
  PipelineCard,
  PipelineContainer,
  PipelineTitle,
  PipelineValue,
  RecruiterDashboardContainer,
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
} from "@/app/(admin)/admin/dashboard/styled";

import { LinearProgress } from "@mui/material";
import { BarChart } from "@mui/x-charts";

export default function RecruiterDashboardPage() {
  const { user } = useAuth();
  return (
    <RecruiterDashboardContainer>
      {/* <HeaderContainer>
        <HeaderContent>
          <Heading>Welcome back, {user?.name}!</Heading>
          <HeaderSubContent>
            <SubHeading>
              Track open roles, review top candidates, and move applications
              <br />
              forward from one recruiter dashboard.
            </SubHeading>
            <Button>
              <Plus size={16} />
              Post New Job
            </Button>
          </HeaderSubContent>
        </HeaderContent>
      </HeaderContainer>
      <StatsContainer>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Open Roles</StatHeading>
            <StatLogoContainer>
              <Briefcase size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>10</StatValue>
          <StatSubHeading>
            <ArrowUpRight size={16} color="#0b75ff" />
            +3 added this week
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>New Applicants</StatHeading>
            <StatLogoContainer>
              <User size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>126</StatValue>
          <StatSubHeading>
            <ArrowUpRight size={16} color="#0b75ff" />
            38 from last 24 hours{" "}
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Interview This Week</StatHeading>
            <StatLogoContainer>
              <Calendar size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>8</StatValue>
          <StatSubHeading>
            <Bookmark size={16} color="#0b75ff" />5 need panel confirmation
          </StatSubHeading>
        </StatCard>
        <StatCard>
          <StatHeadingContainer>
            <StatHeading>Offer Conversion</StatHeading>
            <StatLogoContainer>
              <Eye size={24} color="#0b75ff" />
            </StatLogoContainer>
          </StatHeadingContainer>
          <StatValue>42%</StatValue>
          <StatSubHeading>
            <ArrowUpRight size={16} color="#0b75ff" />
            up from 35% last month
          </StatSubHeading>
        </StatCard>
      </StatsContainer>
      <ActivityContainer>
        <PlatformOverview>
          <PlatformOverviewHeadingContainer>
            <PlatformOverviewHeading>
              Applicant pipeline
            </PlatformOverviewHeading>
            <PlatformOverviewSubHeading>
              Balanced snapshot of your active hiring funnel{" "}
            </PlatformOverviewSubHeading>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <PlatformOverviewChart style={{ flexDirection: "column" }}>
            <PipelineContainer>
              <PipelineCard>
                <PipelineTitle>Applied</PipelineTitle>
                <PipelineValue>126</PipelineValue>
                <PipelineTitle style={{ fontSize: "12px" }}>
                  38 from last 24 hours
                </PipelineTitle>
              </PipelineCard>
              <PipelineCard>
                <PipelineTitle>Shortlisted</PipelineTitle>
                <PipelineValue>48</PipelineValue>
                <PipelineTitle style={{ fontSize: "12px" }}>
                  Strong technical matches
                </PipelineTitle>
              </PipelineCard>
              <PipelineCard>
                <PipelineTitle>Interview</PipelineTitle>
                <PipelineValue>19</PipelineValue>
                <PipelineTitle style={{ fontSize: "12px" }}>
                  This week active set
                </PipelineTitle>
              </PipelineCard>
              <PipelineCard>
                <PipelineTitle>Offer</PipelineTitle>
                <PipelineValue>8</PipelineValue>
                <PipelineTitle style={{ fontSize: "12px" }}>
                  Awaiting final response{" "}
                </PipelineTitle>
              </PipelineCard>
            </PipelineContainer>
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
    </RecruiterDashboardContainer>
  );
}
