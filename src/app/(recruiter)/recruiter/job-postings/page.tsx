"use client";

import { FormModal } from "@/app/(student)/student/projects-and-internships/styled";
import { UploadJob } from "@/components/UploadJob";
import axios from "axios";
import {
  Briefcase,
  Clock8,
  EllipsisVertical,
  IndianRupee,
  MapPin,
  Plus,
  Router,
  Search,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function JobPostingsPage() {
  const [openJobModal, setOpenJobModal] = useState(false);
  const [openJobViewModal, setOpenJobViewModal] = useState(false);
  const [profile, setProfile] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState<string>("");
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

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
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "600" }}>Job Posts</h1>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Manage your campus job and internship listing, track applications,
            and view performance metrics.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setOpenJobModal(true)}
          >
            {" "}
            <Plus />
            Post new job
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            backgroundColor: "#f1f5f9",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          {["All", "Active", "Closed"].map((item) => (
            <button
              key={item}
              style={{
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "#ffff",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <Search />
          <input type="text" placeholder="Search jobs" />
        </div>
      </div>
      <div>
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "fit-content",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
                  {job.title}
                </h1>
                <div
                  style={{
                    padding: "5px 10px",
                    borderRadius: "8px",
                    backgroundColor: "#e3f4e9",
                    color: "#21a752",
                  }}
                >
                  {job.status}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Briefcase /> {job.jobType}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <MapPin /> {job.company.location}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Clock8 /> Posted {job.createdAt}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <IndianRupee /> {job.salary}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
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
                onClick={() => {
                  setSelectedJobId(job.job_id);
                  setOpenJobViewModal(true);
                }}
              >
                View Job
              </button>
            </div>
          </div>
        ))}
      </div>
      <FormModal
        open={openJobViewModal}
        onClose={() => setOpenJobViewModal(false)}
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
