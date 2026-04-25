"use client";

import { useAuth } from "@/context/AuthContext";
import {
  Activity,
  BadgeCheck,
  BookOpenText,
  Briefcase,
  Building,
  CircleCheck,
  CirclePlus,
  FolderOpen,
  MessageSquare,
  Plus,
  Server,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  ActionButton,
  Button,
  DashboardContainer,
  GithubLink,
  ProjectCard,
  ProjectCardContent,
  ProjectCardInfo,
  ProjectCardInfoSubContainer,
  ProjectSubTitle,
  ProjectTitle,
  Status,
  StudentAvatar,
  ViewAllButton,
} from "./styled";
import {
  HeaderContainer,
  HeaderContent,
  HeaderSubContent,
  Heading,
  StatsContainer,
  SubHeading,
  StatCard,
  StatHeading,
  StatHeadingContainer,
  StatLogoContainer,
  StatSubHeading,
  StatValue,
  ActivityContainer,
  PlatformOverview,
  PlatformOverviewHeadingContainer,
  PlatformOverviewHeading,
  HrLine,
  PlatformOverviewChart,
  ProgressContainer,
} from "@/app/(admin)/admin/dashboard/styled";

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <DashboardContainer>
      {/* <HeaderContainer>
        <HeaderContent>
          <Heading>Welcome back, Prof. {user?.name}!</Heading>
          <HeaderSubContent>
            <SubHeading>
              A clear overview of student progress, mentorship impact, and
              real-time academic engagement across
              <br /> mentees, faculty, and departments.
            </SubHeading>
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
        <PlatformOverview style={{ width: "70%" }}>
          <PlatformOverviewHeadingContainer
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <PlatformOverviewHeading>
              <CircleCheck size={16} color="#0b75ff" />
              Pending Verifications
            </PlatformOverviewHeading>
            <ViewAllButton>View All</ViewAllButton>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <PlatformOverviewChart
            style={{
              padding: "0px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ProjectCard>
              <ProjectCardContent>
                <StudentAvatar>T</StudentAvatar>
                <ProjectCardInfo>
                  <ProjectTitle>Project Title</ProjectTitle>
                  <ProjectCardInfoSubContainer>
                    <ProjectSubTitle>Project Sub Title</ProjectSubTitle>
                    <Status> - Pending -</Status>
                    <GithubLink href="#">Github</GithubLink>
                  </ProjectCardInfoSubContainer>
                </ProjectCardInfo>
              </ProjectCardContent>
              <ActionButton>Approve</ActionButton>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardContent>
                <StudentAvatar>T</StudentAvatar>
                <ProjectCardInfo>
                  <ProjectTitle>Project Title</ProjectTitle>
                  <ProjectCardInfoSubContainer>
                    <ProjectSubTitle>Project Sub Title</ProjectSubTitle>
                    <Status> - Pending -</Status>
                    <GithubLink href="#">Github</GithubLink>
                  </ProjectCardInfoSubContainer>
                </ProjectCardInfo>
              </ProjectCardContent>
              <ActionButton>Approve</ActionButton>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardContent>
                <StudentAvatar>T</StudentAvatar>
                <ProjectCardInfo>
                  <ProjectTitle>Project Title</ProjectTitle>
                  <ProjectCardInfoSubContainer>
                    <ProjectSubTitle>Project Sub Title</ProjectSubTitle>
                    <Status> - Pending -</Status>
                    <GithubLink href="#">Github</GithubLink>
                  </ProjectCardInfoSubContainer>
                </ProjectCardInfo>
              </ProjectCardContent>
              <ActionButton>Approve</ActionButton>
            </ProjectCard>
          </PlatformOverviewChart>
        </PlatformOverview>
        <PlatformOverview style={{ width: "30%" }}>
          <PlatformOverviewHeadingContainer>
            <PlatformOverviewHeading>Quick Actions</PlatformOverviewHeading>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <ProgressContainer style={{ gap: "20px" }}>
            <Button>
              <CirclePlus color="#0b75ff" size={16} />
              Create Assignment
            </Button>
            <Button>
              <MessageSquare color="#0b75ff" size={16} />
              Post Feedback
            </Button>
          </ProgressContainer>
        </PlatformOverview>
      </ActivityContainer>
      <ActivityContainer>
        <PlatformOverview style={{ width: "70%" }}>
          <PlatformOverviewHeadingContainer
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <PlatformOverviewHeading>
              <FolderOpen color="#0b75ff" size={16} />
              Recent Assignments
            </PlatformOverviewHeading>
            <ViewAllButton>View All</ViewAllButton>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <PlatformOverviewChart
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0px",
            }}
          >
            <ProjectCard>
              <ProjectCardContent>
                <StudentAvatar style={{ borderRadius: "4px" }}>
                  <BookOpenText color="#333" size={24} />
                </StudentAvatar>
                <ProjectCardInfo>
                  <ProjectTitle>Project Title</ProjectTitle>
                  <ProjectCardInfoSubContainer>
                    <ProjectSubTitle>Project Sub Title</ProjectSubTitle>
                    <Status> - Pending -</Status>
                    <GithubLink href="#">Github</GithubLink>
                  </ProjectCardInfoSubContainer>
                </ProjectCardInfo>
              </ProjectCardContent>
              <ActionButton>Approve</ActionButton>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardContent>
                <StudentAvatar style={{ borderRadius: "4px" }}>
                  <BookOpenText color="#333" size={24} />
                </StudentAvatar>
                <ProjectCardInfo>
                  <ProjectTitle>Project Title</ProjectTitle>
                  <ProjectCardInfoSubContainer>
                    <ProjectSubTitle>Project Sub Title</ProjectSubTitle>
                    <Status> - Pending -</Status>
                    <GithubLink href="#">Github</GithubLink>
                  </ProjectCardInfoSubContainer>
                </ProjectCardInfo>
              </ProjectCardContent>
              <ActionButton>Approve</ActionButton>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardContent>
                <StudentAvatar style={{ borderRadius: "4px" }}>
                  <BookOpenText color="#333" size={24} />
                </StudentAvatar>
                <ProjectCardInfo>
                  <ProjectTitle>Project Title</ProjectTitle>
                  <ProjectCardInfoSubContainer>
                    <ProjectSubTitle>Project Sub Title</ProjectSubTitle>
                    <Status> - Pending -</Status>
                    <GithubLink href="#">Github</GithubLink>
                  </ProjectCardInfoSubContainer>
                </ProjectCardInfo>
              </ProjectCardContent>
              <ActionButton>Approve</ActionButton>
            </ProjectCard>
          </PlatformOverviewChart>
        </PlatformOverview>
        <PlatformOverview style={{ width: "30%" }}>
          <PlatformOverviewHeadingContainer>
            <PlatformOverviewHeading>Quick Actions</PlatformOverviewHeading>
          </PlatformOverviewHeadingContainer>
          <HrLine />
          <ProgressContainer style={{ gap: "20px" }}>
            <Button>
              <CirclePlus color="#0b75ff" size={16} />
              Create Assignment
            </Button>
            <Button>
              <MessageSquare color="#0b75ff" size={16} />
              Post Feedback
            </Button>
          </ProgressContainer>
        </PlatformOverview>
      </ActivityContainer> */}
    </DashboardContainer>
  );
}
