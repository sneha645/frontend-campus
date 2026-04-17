"use client";

import axios from "axios";
import { Briefcase, Clock8, Code, IndianRupee, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { FormModal } from "../projects-and-internships/styled";
import { Alert } from "@mui/material";

export default function JobsAndInternshipsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<string>("");
  const [openApplyModal, setOpenApplyModal] = useState(false);
  const [openJobModal, setOpenJobModal] = useState(false);
  // const selectedJob = jobs.find((job) => job.job_id === selectedJobId);

  // if (!selectedJob) return null;

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

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "20px",
        height: "100%",
        width: "100%",
        overflow: "auto",
        overflowY: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "600" }}>
          Find your next career opportunity
        </h1>
        <p style={{ fontSize: "16px", color: "#666" }}>
          Browse through the latest jobs and internships posted by top
          companies.
        </p>
      </div>
      <div>
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: "fit-content",
              borderRadius: "12px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  height: "120px",
                  width: "120px",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                <Briefcase size={48} color="#007bff" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
                  {job.title}
                </h1>
                <p style={{ fontSize: "16px", color: "#666" }}>
                  {job.company.companyName}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: "#f5f5f5",
                    padding: "5px 10px",
                    borderRadius: "8px",
                  }}
                >
                  <Briefcase size={16} color="#666" />
                  <p>{job.jobType}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: "#f5f5f5",
                    padding: "5px 10px",
                    borderRadius: "8px",
                  }}
                >
                  <MapPin size={16} color="#666" />
                  <p>{job.location}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: "#f5f5f5",
                    padding: "5px 10px",
                    borderRadius: "8px",
                  }}
                >
                  <IndianRupee size={16} color="#666" />
                  <p>{job.salary}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: "#f5f5f5",
                    padding: "5px 10px",
                    borderRadius: "8px",
                  }}
                >
                  <Clock8 size={16} color="#666" />
                  <p>{job.createdAt}</p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                paddingLeft: "20px",
                height: "100%",
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  color: "#000000",
                  cursor: "pointer",
                  width: "150px",
                }}
                onClick={() => {
                  setSelectedJobId(job.job_id);
                  setOpenJobModal(true);
                }}
              >
                View Details
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  cursor: "pointer",
                  width: "150px",
                }}
                onClick={() => {
                  setSelectedJobId(job.job_id);
                  setOpenApplyModal(true);
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
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
        {/* <div
          style={{
            width: "500px",
            margin: "20px auto",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#333" }}>
            {jobs.find((job) => job.job_id === selectedJobId)?.title}
          </h2>

          <p style={{ margin: "6px 0", color: "#555", width: "100%" }}>
            <strong>Company:</strong>{" "}
            {
              jobs.find((job) => job.job_id === selectedJobId)?.company
                ?.companyName
            }
          </p>

          <p style={{ margin: "6px 0", color: "#555" }}>
            <strong>Job Type:</strong>{" "}
            {jobs.find((job) => job.job_id === selectedJobId)?.jobType}
          </p>

          <p style={{ margin: "6px 0", color: "#555" }}>
            <strong>Experience:</strong>{" "}
            {jobs.find((job) => job.job_id === selectedJobId)?.experience} years
          </p>

          <p style={{ margin: "6px 0", color: "#555" }}>
            <strong>Salary:</strong> ₹
            {jobs.find((job) => job.job_id === selectedJobId)?.salary}
          </p>

          <p style={{ margin: "6px 0", color: "#555" }}>
            <strong>Location:</strong>{" "}
            {
              jobs.find((job) => job.job_id === selectedJobId)?.company
                ?.location
            }
          </p>

          <p style={{ margin: "6px 0", color: "#555" }}>
            <strong>Status:</strong>{" "}
            <span
              style={{
                color:
                  jobs.find((job) => job.job_id === selectedJobId)?.status ===
                  "open"
                    ? "green"
                    : "red",
                fontWeight: "bold",
              }}
            >
              {jobs.find((job) => job.job_id === selectedJobId)?.status}
            </span>
          </p>

          <hr style={{ margin: "15px 0" }} />

          <p style={{ color: "#444" }}>
            <strong>Description:</strong>{" "}
            {jobs.find((job) => job.job_id === selectedJobId)?.description}
          </p>

          <div style={{ marginTop: "10px" }}>
            <strong>Requirements:</strong>
            <ul style={{ paddingLeft: "18px" }}>
              {jobs
                .find((job) => job.job_id === selectedJobId)
                ?.requirements.map((req: any, index: any) => (
                  <li key={index}>{req.trim()}</li>
                ))}
            </ul>
          </div>

          <div style={{ marginTop: "10px" }}>
            <strong>Responsibilities:</strong>
            <ul style={{ paddingLeft: "18px" }}>
              {jobs
                .find((job) => job.job_id === selectedJobId)
                ?.responsibilities.map((res: any, index: any) => (
                  <li key={index}>{res}</li>
                ))}
            </ul>
          </div>

          <div style={{ marginTop: "10px" }}>
            <strong>Benefits:</strong>
            <ul style={{ paddingLeft: "18px" }}>
              {jobs
                .find((job) => job.job_id === selectedJobId)
                ?.benefits.map((ben: any, index: any) => (
                  <li key={index}>{ben}</li>
                ))}
            </ul>
          </div>

          <p style={{ marginTop: "15px", fontSize: "12px", color: "#888" }}>
            Created At:{" "}
            {new Date(
              jobs.find((job) => job.job_id === selectedJobId)?.createdAt || "",
            ).toLocaleString()}
          </p>
        </div> */}
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
              {jobs.find((job) => job.job_id === selectedJobId)?.company
                ?.companyName}
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
              {jobs.find((job) => job.job_id === selectedJobId)?.experience} yrs exp
            </span>
            <span style={badgeStyle("#e8f5e9", "#2e7d32")}>
              ₹{jobs.find((job) => job.job_id === selectedJobId)?.salary}
            </span>
            <span
              style={badgeStyle(
                jobs.find((job) => job.job_id === selectedJobId)?.status === "open" ? "#e8f5e9" : "#ffebee",
                jobs.find((job) => job.job_id === selectedJobId)?.status === "open" ? "#2e7d32" : "#c62828",
              )}
            >
              {jobs.find((job) => job.job_id === selectedJobId)?.status.toUpperCase()}
            </span>
          </div>

          {/* Info */}
          <p style={{ margin: "6px 0", color: "#555" }}>
            📍 {jobs.find((job) => job.job_id === selectedJobId)?.company?.location}
          </p>

          <hr style={{ margin: "20px 0", borderColor: "#eee" }} />

          {/* Description */}
          <Section title="Description">{jobs.find((job) => job.job_id === selectedJobId)?.description}</Section>

          {/* Requirements */}
          <Section title="Requirements">
            {jobs.find((job) => job.job_id === selectedJobId)?.requirements?.map((req: string, i: number) => (
              <li key={i}>{req.trim()}</li>
            ))}
          </Section>

          {/* Responsibilities */}
          <Section title="Responsibilities">
            {jobs.find((job) => job.job_id === selectedJobId)?.responsibilities?.map((res: string, i: number) => (
              <li key={i}>{res}</li>
            ))}
          </Section>

          {/* Benefits */}
          <Section title="Benefits">
            {jobs.find((job) => job.job_id === selectedJobId)?.benefits?.map((ben: string, i: number) => (
              <li key={i}>{ben}</li>
            ))}
          </Section>

          {/* Footer */}
          <p style={{ marginTop: "20px", fontSize: "12px", color: "#999" }}>
            Posted on: {new Date(jobs.find((job) => job.job_id === selectedJobId)?.createdAt || "").toLocaleDateString()}
          </p>
        </div>
      </FormModal>
    </div>
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
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  console.log(jobId);
  const handleApply = async () => {
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
        setOpenApplyModal(false);
      }
      console.log(response.data);
    } catch (error) {
      setError("Failed to apply");
      console.log(error);
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
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={handleApply}
      >
        Apply Now
      </button>
    </div>
  );
};
