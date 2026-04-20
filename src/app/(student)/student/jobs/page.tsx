"use client";

import axios from "axios";
import {
  Briefcase,
  Clock8,
  Code,
  IndianRupee,
  MapPin,
  Search,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FormModal } from "../projects/styled";
import { Alert } from "@mui/material";
import {
  ApplyButton,
  ButtonContainer,
  JobCard,
  JobCompany,
  JobDetailsContainer,
  JobDetailSubContainer,
  JobDetailText,
  JobInfoContainer,
  JobsContainer,
  JobTitle,
  JobTitleContainer,
  LogoContainer,
  NotFoundContainer,
  NotFoundText,
  StudentJobsContainer,
  ViewDetailsButton,
} from "./styled";
import {
  ApproveButton,
  HeaderSubContainer,
  HeadingContainer,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
} from "@/app/(admin)/admin/recruiters/styled";

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<string>("");
  const [openApplyModal, setOpenApplyModal] = useState(false);
  const [openJobModal, setOpenJobModal] = useState(false);
  const [searchJob, setSearchJob] = useState("");

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:3000/api/student/jobs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((r) =>
      r.title.toLowerCase().includes(searchJob.toLowerCase()),
    );
  }, [jobs, searchJob]);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <StudentJobsContainer>
      <HeadingContainer>
        <TableHeading>Find your next career opportunity</TableHeading>
        <HeaderSubContainer>
          <TableSubHeading>
            Browse through the latest jobs and internships posted by
            <br />
            top companies.
          </TableSubHeading>
          <SearchContainer>
            <Search size={16} color="#666" />
            <SearchInput
              placeholder="Search job"
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
            />
          </SearchContainer>
        </HeaderSubContainer>
      </HeadingContainer>
      <JobsContainer>
        {filteredJobs.length < 1 ? (
          <NotFoundContainer>
            <NotFoundText>No jobs found</NotFoundText>
          </NotFoundContainer>
        ) : (
          filteredJobs.map((job, index) => (
            <JobCard key={index}>
              <LogoContainer>
                <Briefcase size={48} color="#007bff" />
              </LogoContainer>
              <JobInfoContainer>
                <JobTitleContainer>
                  <JobTitle>{job.title}</JobTitle>
                  <JobCompany>{job.company.companyName}</JobCompany>
                </JobTitleContainer>
                <JobDetailsContainer>
                  <JobDetailSubContainer>
                    <Briefcase size={16} color="#666" />
                    <JobDetailText>{job.jobType}</JobDetailText>
                  </JobDetailSubContainer>
                  <JobDetailSubContainer>
                    <MapPin size={16} color="#666" />
                    <JobDetailText>{job.company.location}</JobDetailText>
                  </JobDetailSubContainer>
                  <JobDetailSubContainer>
                    <IndianRupee size={16} color="#666" />
                    <JobDetailText>{job.salary}</JobDetailText>
                  </JobDetailSubContainer>
                  <JobDetailSubContainer>
                    <Clock8 size={16} color="#666" />
                    <JobDetailText>
                      {job.createdAt
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </JobDetailText>
                  </JobDetailSubContainer>
                </JobDetailsContainer>
              </JobInfoContainer>
              <ButtonContainer>
                <ViewDetailsButton
                  onClick={() => {
                    setSelectedJobId(job.job_id);
                    setOpenJobModal(true);
                  }}
                >
                  View Details
                </ViewDetailsButton>
                <ApplyButton
                  onClick={() => {
                    setSelectedJobId(job.job_id);
                    setOpenApplyModal(true);
                  }}
                >
                  Apply Now
                </ApplyButton>
              </ButtonContainer>
            </JobCard>
          ))
        )}
      </JobsContainer>

      <FormModal
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <ApplyForm
          jobId={selectedJobId}
          setOpenApplyModal={() => setOpenApplyModal(false)}
        />
      </FormModal>

      <FormModal
        open={openJobModal}
        onClose={() => setOpenJobModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "30px auto",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            backgroundColor: "#fff",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "16px" }}>
            <h2 style={{ margin: 0, color: "#222" }}>
              {jobs.find((job) => job.job_id === selectedJobId)?.title}
            </h2>
            <p style={{ margin: "4px 0", color: "#666" }}>
              {
                jobs.find((job) => job.job_id === selectedJobId)?.company
                  ?.companyName
              }
            </p>
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "16px",
            }}
          >
            <span style={badgeStyle("#e3f2fd", "#1976d2")}>
              {jobs.find((job) => job.job_id === selectedJobId)?.jobType}
            </span>
            <span style={badgeStyle("#f3e5f5", "#7b1fa2")}>
              {jobs.find((job) => job.job_id === selectedJobId)?.experience} yrs
              exp
            </span>
            <span style={badgeStyle("#e8f5e9", "#2e7d32")}>
              ₹{jobs.find((job) => job.job_id === selectedJobId)?.salary}
            </span>
            <span
              style={badgeStyle(
                jobs.find((job) => job.job_id === selectedJobId)?.status ===
                  "open"
                  ? "#e8f5e9"
                  : "#ffebee",
                jobs.find((job) => job.job_id === selectedJobId)?.status ===
                  "open"
                  ? "#2e7d32"
                  : "#c62828",
              )}
            >
              {jobs
                .find((job) => job.job_id === selectedJobId)
                ?.status.toUpperCase()}
            </span>
          </div>

          {/* Info */}
          <p style={{ margin: "6px 0", color: "#555" }}>
            📍{" "}
            {
              jobs.find((job) => job.job_id === selectedJobId)?.company
                ?.location
            }
          </p>

          <hr style={{ margin: "20px 0", borderColor: "#eee" }} />

          {/* Description */}
          <Section title="Description">
            {jobs.find((job) => job.job_id === selectedJobId)?.description}
          </Section>

          {/* Requirements */}
          <Section title="Requirements">
            {jobs
              .find((job) => job.job_id === selectedJobId)
              ?.requirements?.map((req: string, i: number) => (
                <li key={i}>{req.trim()}</li>
              ))}
          </Section>

          {/* Responsibilities */}
          <Section title="Responsibilities">
            {jobs
              .find((job) => job.job_id === selectedJobId)
              ?.responsibilities?.map((res: string, i: number) => (
                <li key={i}>{res}</li>
              ))}
          </Section>

          {/* Benefits */}
          <Section title="Benefits">
            {jobs
              .find((job) => job.job_id === selectedJobId)
              ?.benefits?.map((ben: string, i: number) => (
                <li key={i}>{ben}</li>
              ))}
          </Section>

          {/* Footer */}
          <p style={{ marginTop: "20px", fontSize: "12px", color: "#999" }}>
            Posted on:{" "}
            {new Date(
              jobs.find((job) => job.job_id === selectedJobId)?.createdAt || "",
            ).toLocaleDateString()}
          </p>
        </div>
      </FormModal>
    </StudentJobsContainer>
  );
}

const badgeStyle = (bg: string, color: string) => ({
  backgroundColor: bg,
  color,
  padding: "6px 10px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: 600,
});

const Section = ({ title, children }: any) => (
  <div style={{ marginBottom: "16px" }}>
    <h4 style={{ marginBottom: "6px", color: "#333" }}>{title}</h4>
    <ul style={{ paddingLeft: "18px", color: "#555", margin: 0 }}>
      {children}
    </ul>
  </div>
);

export const ApplyForm = ({
  jobId,
  setOpenApplyModal,
}: {
  jobId: string;
  setOpenApplyModal: (open: boolean) => void;
}) => {
  const [resume, setResume] = useState<File | null>(null);
  const [validation, setValidation] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  console.log(jobId);
  const handleApply = async () => {
    if (!resume) {
      setValidation("Please upload resume");
      setTimeout(() => {
        setValidation("");
      }, 2000);
      return;
    }
    const formDataToSend = new FormData();

    if (resume) {
      formDataToSend.append("resume", resume);
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/api/student/apply/${jobId}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status === 200) {
        setSuccess("Applied successfully");
        setTimeout(() => {
          setOpenApplyModal(false);
        }, 2000);
      }
      console.log(response.data);
    } catch (error) {
      const backendMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Error resetting password";
      const message = Array.isArray(backendMessage)
        ? backendMessage.join(", ")
        : backendMessage;
      setError(message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      {success && (
        <Alert severity="success" style={{ position: "relative", top: "0" }}>
          {success}
        </Alert>
      )}
      {error && (
        <Alert severity="error" style={{ position: "relative", top: "0" }}>
          {error}
        </Alert>
      )}
      {validation && (
        <Alert severity="warning" style={{ position: "relative", top: "0" }}>
          {validation}
        </Alert>
      )}
      <label htmlFor="companyName">Resume</label>
      <div
        style={{
          backgroundColor: "#e3e8edff",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "6px",
          padding: "20px",
          borderRadius: "4px",
          border: "1px dashed #0000003d",
        }}
      >
        <h1 style={{ fontSize: "16px", fontWeight: "600" }}>Upload Resume</h1>
        <p style={{ fontSize: "14px", color: "#666666" }}>
          PDF, DOC, DOCX Recommended 512x512px Used across job listings and
          candidate search.
        </p>
        <input
          type="file"
          id="resume"
          style={{ cursor: "pointer" }}
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setResume(e.target.files[0]);
            }
          }}
        />
      </div>
      <ApproveButton style={{ width: "100%" }} onClick={handleApply}>
        Apply Now
      </ApproveButton>
    </div>
  );
};
