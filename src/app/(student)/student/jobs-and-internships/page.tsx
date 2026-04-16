"use client";

import axios from "axios";
import { Briefcase, Clock8, Code, IndianRupee, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { FormModal } from "../projects-and-internships/styled";

export default function JobsAndInternshipsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<string>("");
  const [openApplyModal, setOpenApplyModal] = useState(false);
  console.log(jobs);

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
                  height: "60px",
                  width: "60px",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                <Code size={24} color="#007bff" />
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
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                borderLeft: "1px solid #e5e7eb",
                paddingLeft: "20px",
                height: "100%",
              }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  color: "#000000",
                  cursor: "pointer",
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
        <ApplyForm jobId={selectedJobId} />
      </FormModal>
    </div>
  );
}

export const ApplyForm = ({ jobId }: { jobId: string }) => {
  const [resume, setResume] = useState<File | null>(null);

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
      console.log(response.data);
    } catch (error) {
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
