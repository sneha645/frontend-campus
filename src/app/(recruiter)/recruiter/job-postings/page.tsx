"use client";

import { FormModal } from "@/app/(student)/student/projects/styled";
import { UploadJob } from "@/components/UploadJob";
import axios from "axios";
import {
  Briefcase,
  Clock8,
  IndianRupee,
  MapPin,
  Plus,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonContainer,
  JobCard,
  JobDetailsContainer,
  JobDetailsSubContainer,
  JobPostingsContainer,
  JobSubContainer,
  JobText,
  JobTitle,
  JobTitleContainer,
  Status,
  ViewJobButton,
  JobCardModal,
  Header,
  Title,
  TagContainer,
  Badge,
  InfoText,
  Divider,
  SectionWrapper,
  SectionTitle,
  List,
  FooterText,
  CompanyName,
} from "./styled";
import {
  HeaderSubContainer,
  HeadingContainer,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
} from "@/app/(admin)/admin/recruiters/styled";
import { Box } from "@mui/material";
import { Company, Job } from "@/types/type";

export default function JobPostingsPage() {
  const [searchJob, setSearchJob] = useState("");
  const [openJobModal, setOpenJobModal] = useState(false);
  const [profile, setProfile] = useState<Company | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [openJobViewModal, setOpenJobViewModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string>("");

  const getCompanyProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:3000/api/recruiter/getCompanyProfile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data) {
        setProfile(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMyJobs = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:3000/api/recruiter/getMyJobs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data) {
        setJobs(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCompanyProfile();
    getMyJobs();
  }, []);

  const job = jobs.find((job) => job.job_id === selectedJobId);

  return (
    <JobPostingsContainer>
      <HeadingContainer>
        <TableHeading>Job Postings</TableHeading>
        <HeaderSubContainer>
          <TableSubHeading>
            Review newly posted jobs, moderate approvals,
            <br /> and keep job data accurate.
          </TableSubHeading>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <SearchContainer>
              <Search size={16} color="#666" />
              <SearchInput
                placeholder="Search job"
                value={searchJob}
                onChange={(e) => setSearchJob(e.target.value)}
              />
            </SearchContainer>
            <Button onClick={() => setOpenJobModal(true)}>
              <Plus size={16} color="#fff" />
              Post New Job
            </Button>
          </Box>
        </HeaderSubContainer>
      </HeadingContainer>
      {jobs?.map((job) => (
        <JobCard key={job.job_id}>
          <JobSubContainer>
            <JobTitleContainer>
              <JobTitle>{job.title}</JobTitle>
              <Status $status={job.status}>{job.status}</Status>
            </JobTitleContainer>
            <JobDetailsContainer>
              <JobDetailsSubContainer>
                <Briefcase size={16} color="#666" />
                <JobText>{job.jobType}</JobText>
              </JobDetailsSubContainer>
              <JobDetailsSubContainer>
                <MapPin size={16} color="#666" />
                <JobText>{job.company.location}</JobText>
              </JobDetailsSubContainer>
              <JobDetailsSubContainer>
                <Clock8 size={16} color="#666" />
                <JobText>Posted {job.createdAt.split("T")[0]}</JobText>
              </JobDetailsSubContainer>
              <JobDetailsSubContainer>
                <IndianRupee size={16} color="#666" />
                <JobText>{job.salary}</JobText>
              </JobDetailsSubContainer>
            </JobDetailsContainer>
          </JobSubContainer>
          <ButtonContainer>
            <ViewJobButton
              onClick={() => {
                setOpenJobViewModal(true);
                setSelectedJobId(job.job_id);
              }}
            >
              View Job
            </ViewJobButton>
          </ButtonContainer>
        </JobCard>
      ))}
      <FormModal
        open={openJobModal}
        onClose={() => setOpenJobModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <UploadJob
          setOpenJobModal={setOpenJobModal}
          companyId={profile?.company_id || ""}
          getCompanyProfile={getMyJobs}
        />
      </FormModal>

      <FormModal
        open={openJobViewModal}
        onClose={() => setOpenJobViewModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <JobCardModal>
          <Header>
            <Title>{job?.title}</Title>
            <CompanyName>{job?.company?.companyName}</CompanyName>
          </Header>

          <TagContainer>
            <Badge bg="#e3f2fd" color="#1976d2">
              {job?.jobType}
            </Badge>

            <Badge bg="#f3e5f5" color="#7b1fa2">
              {job?.experience} yrs exp
            </Badge>

            <Badge bg="#e8f5e9" color="#2e7d32">
              ₹{job?.salary}
            </Badge>

            <Badge
              bg={job?.status === "open" ? "#e8f5e9" : "#ffebee"}
              color={job?.status === "open" ? "#2e7d32" : "#c62828"}
            >
              {job?.status?.toUpperCase()}
            </Badge>
          </TagContainer>

          <InfoText>📍 {job?.company?.location}</InfoText>

          <Divider />

          <Section title="Description">
            <li>{job?.description}</li>
          </Section>

          <Section title="Requirements">
            {job?.requirements?.map((req: string, i: number) => (
              <li key={i}>{req.trim()}</li>
            ))}
          </Section>

          <Section title="Responsibilities">
            {job?.responsibilities?.map((res: string, i: number) => (
              <li key={i}>{res}</li>
            ))}
          </Section>

          <Section title="Benefits">
            {job?.benefits?.map((ben: string, i: number) => (
              <li key={i}>{ben}</li>
            ))}
          </Section>

          <FooterText>
            Posted on: {new Date(job?.createdAt || "").toLocaleDateString()}
          </FooterText>
        </JobCardModal>
      </FormModal>
      <FormModal
        open={openJobModal}
        onClose={() => setOpenJobModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <UploadJob
          setOpenJobModal={setOpenJobModal}
          companyId={profile?.company_id}
        />
      </FormModal>
    </JobPostingsContainer>
  );
}

const Section = ({ title, children }: any) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    <List>{children}</List>
  </SectionWrapper>
);
