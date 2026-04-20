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
import { useEffect, useState } from "react";

export default function ApplicationsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
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

  useEffect(() => {
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
          <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
            Job Applications
          </h1>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            dolorem excepturi assumenda eveniet unde dignissimos.
          </p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
