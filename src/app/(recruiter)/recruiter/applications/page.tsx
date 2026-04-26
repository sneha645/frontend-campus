"use client";

import { Job } from "@/types/type";
import axios from "axios";
import {
  Briefcase,
  Clock8,
  EllipsisVertical,
  IndianRupee,
  MapPin,
  Search,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  Container,
  Header,
  HeaderContent,
  Title,
  Description,
  SearchWrapper,
  SearchBox,
  SearchInput,
  JobList,
  JobCard,
  JobInfo,
  JobTop,
  JobTitle,
  StatusBadge,
  JobMeta,
  MetaItem,
  ActionWrapper,
  ViewButton,
} from "./styled";

export default function ApplicationsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchJob, setSearchJob] = useState("");
  const router = useRouter();

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

  const filteredJobs = useMemo(() => {
    return jobs.filter((r) =>
      r.title.toLowerCase().includes(searchJob.toLowerCase()),
    );
  }, [jobs, searchJob]);

  useEffect(() => {
    getMyJobs();
  }, []);
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Job Applications</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem
            excepturi assumenda eveniet unde dignissimos.
          </Description>
        </HeaderContent>
      </Header>

      <SearchWrapper>
        <SearchBox>
          <Search size={18} />
          <SearchInput type="text" placeholder="Search jobs" />
        </SearchBox>
      </SearchWrapper>

      <JobList>
        {jobs.map((job, index) => (
          <JobCard key={index}>
            <JobInfo>
              <JobTop>
                <JobTitle>{job.title}</JobTitle>
                <StatusBadge>{job.status}</StatusBadge>
              </JobTop>

              <JobMeta>
                <MetaItem>
                  <Briefcase size={16} />
                  {job.jobType}
                </MetaItem>

                <MetaItem>
                  <MapPin size={16} />
                  {job.company.location}
                </MetaItem>

                <MetaItem>
                  <Clock8 size={16} />
                  Posted {job.createdAt.split("T")[0]}
                </MetaItem>

                <MetaItem>
                  <IndianRupee size={16} />
                  {job.salary}
                </MetaItem>
              </JobMeta>
            </JobInfo>

            <ActionWrapper>
              <ViewButton
                onClick={() =>
                  router.push(`/recruiter/applications/${job.job_id}`)
                }
              >
                View Applicants
              </ViewButton>
            </ActionWrapper>
          </JobCard>
        ))}
      </JobList>
    </Container>
  );
}
