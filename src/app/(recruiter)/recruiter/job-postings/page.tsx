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
  const [profile, setProfile] = useState(null);
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
                  router.push(`/recruiter/applications/${job.job_id}`);
                }}
              >
                View Applicants
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  color: "#000000",
                  cursor: "pointer",
                }}
              >
                <EllipsisVertical />
              </button>
            </div>
          </div>
        ))}
      </div>
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
