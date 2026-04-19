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
    // <div
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "20px",
    //     padding: "20px",
    //   }}
    // >
    //   <div
    //     style={{
    //       width: "100%",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //       }}
    //     >
    //       <h1 style={{ fontSize: "30px", fontWeight: "500" }}>
    //         Welcome to {user?.name} <WavingHandIcon sx={{ fontSize: "30px" }} />
    //       </h1>
    //       <p style={{ fontSize: "16px", fontWeight: "400" }}>
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
    //         tempore?
    //       </p>
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       width: "100%",
    //       display: "grid",
    //       gridTemplateColumns: "repeat(3, 1fr)",
    //       gap: "10px",
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "flex-start",
    //         justifyContent: "flex-start",
    //         width: "100%",
    //         backgroundColor: "#fff",
    //         border: "1px solid #aaaaaa23",
    //         borderRadius: "8px",
    //         height: "200px",
    //         padding: "20px",
    //       }}
    //     >
    //       <div
    //         style={{
    //           width: "100%",
    //           display: "flex",
    //           justifyContent: "space-between",
    //           alignItems: "flex-start",
    //         }}
    //       >
    //         <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
    //           Uploaded Jobs
    //         </h1>
    //         <div
    //           style={{
    //             height: "50px",
    //             width: "50px",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             backgroundColor: "#0b75ffb9",
    //             borderRadius: "8px",
    //           }}
    //         >
    //           <Briefcase color="#fff" size={24} />
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           marginTop: "auto",
    //         }}
    //       >
    //         <p
    //           style={{
    //             fontSize: "40px",
    //             fontWeight: "500",
    //             marginRight: "6px",
    //           }}
    //         >
    //           10
    //         </p>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "flex-start",
    //         justifyContent: "flex-start",
    //         width: "100%",
    //         backgroundColor: "#fff",
    //         border: "1px solid #aaaaaa23",
    //         borderRadius: "8px",
    //         height: "200px",
    //         padding: "20px",
    //       }}
    //     >
    //       <div
    //         style={{
    //           width: "100%",
    //           display: "flex",
    //           justifyContent: "space-between",
    //           alignItems: "flex-start",
    //         }}
    //       >
    //         <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
    //           Job applications
    //         </h1>
    //         <div
    //           style={{
    //             height: "50px",
    //             width: "50px",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             backgroundColor: "#0b75ffb9",
    //             borderRadius: "8px",
    //           }}
    //         >
    //           <MessageSquareText color="#fff" size={24} />
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           marginTop: "auto",
    //         }}
    //       >
    //         <p
    //           style={{
    //             fontSize: "40px",
    //             fontWeight: "500",
    //             marginRight: "6px",
    //           }}
    //         >
    //           3
    //         </p>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "flex-start",
    //         justifyContent: "flex-start",
    //         width: "100%",
    //         backgroundColor: "#fff",
    //         border: "1px solid #aaaaaa23",
    //         borderRadius: "8px",
    //         height: "200px",
    //         padding: "20px",
    //       }}
    //     >
    //       <div
    //         style={{
    //           width: "100%",
    //           display: "flex",
    //           justifyContent: "space-between",
    //           alignItems: "flex-start",
    //         }}
    //       >
    //         <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
    //           Shortlisted Students
    //         </h1>
    //         <div
    //           style={{
    //             height: "50px",
    //             width: "50px",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             backgroundColor: "#0b75ffb9",
    //             borderRadius: "8px",
    //           }}
    //         >
    //           <User color="#fff" size={24} />
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           marginTop: "auto",
    //         }}
    //       >
    //         <p
    //           style={{
    //             fontSize: "40px",
    //             fontWeight: "500",
    //             marginRight: "6px",
    //           }}
    //         >
    //           5
    //         </p>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "flex-start",
    //         justifyContent: "flex-start",
    //         width: "100%",
    //         backgroundColor: "#fff",
    //         border: "1px solid #aaaaaa23",
    //         borderRadius: "8px",
    //         height: "200px",
    //         padding: "20px",
    //       }}
    //     >
    //       <div
    //         style={{
    //           width: "100%",
    //           display: "flex",
    //           justifyContent: "space-between",
    //           alignItems: "flex-start",
    //         }}
    //       >
    //         <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
    //           Companies Registered
    //         </h1>
    //         <div
    //           style={{
    //             height: "50px",
    //             width: "50px",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             backgroundColor: "#0b75ffb9",
    //             borderRadius: "8px",
    //           }}
    //         >
    //           <Building
    //             style={{
    //               color: "#fff",
    //               fontSize: "24px",
    //             }}
    //           />
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           marginTop: "auto",
    //         }}
    //       >
    //         <p
    //           style={{
    //             fontSize: "40px",
    //             fontWeight: "500",
    //             marginRight: "6px",
    //           }}
    //         >
    //           20
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <RecruiterDashboardContainer>
      <HeaderContainer>
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
      </ActivityContainer>
    </RecruiterDashboardContainer>
  );
}
