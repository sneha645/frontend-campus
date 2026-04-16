"use client";

import axios from "axios";
import { useState } from "react";

export const UploadJob = ({
  setOpenJobModal,
  companyId,
}: {
  setOpenJobModal: (open: boolean) => void;
  companyId: string;
}) => {
  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    jobType: "",
    experience: "",
    salary: "",
    requirements: "",
    responsibilities: "",
    benefits: "",
    description: "",
  });
  const createJob = async () => {
    const token = localStorage.getItem("token");
    try {
      console.log(jobData);
      const response = await axios.post(
        `http://localhost:3000/api/recruiter/createJob/${companyId}`,
        jobData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "700px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px #00000033",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="jobTitle">Job Title *</label>
          <input
            type="text"
            id="jobTitle"
            placeholder="Enter job title"
            value={jobData.title}
            onChange={(e) =>
              setJobData({ ...jobData, title: e.target.value })
            }
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            value={jobData.location}
            onChange={(e) =>
              setJobData({ ...jobData, location: e.target.value })
            }
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="jobType">Job Type *</label>
          <select
            id="jobType"
            value={jobData.jobType}
            onChange={(e) =>
              setJobData({ ...jobData, jobType: e.target.value })
            }
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select job type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="experience">Experience *</label>
          <input
            type="text"
            id="experience"
            placeholder="Enter experience"
            value={jobData.experience}
            onChange={(e) =>
              setJobData({ ...jobData, experience: e.target.value })
            }
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="salary">Salary *</label>
          <input
            type="text"
            id="salary"
            placeholder="Enter salary"
            value={jobData.salary}
            onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="requirements">Requirements *</label>
          <input
            type="text"
            id="requirements"
            placeholder="Enter requirements"
            value={jobData.requirements}
            onChange={(e) =>
              setJobData({ ...jobData, requirements: e.target.value })
            }
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="responsibilities">Responsibilities *</label>
        <textarea
          id="responsibilities"
          placeholder="Enter responsibilities"
          value={jobData.responsibilities}
          onChange={(e) =>
            setJobData({ ...jobData, responsibilities: e.target.value })
          }
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "none",
            height: "100px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="benefits">Benefits *</label>
        <textarea
          id="benefits"
          placeholder="Enter benefits"
          value={jobData.benefits}
          onChange={(e) => setJobData({ ...jobData, benefits: e.target.value })}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "none",
            height: "100px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          placeholder="Enter description"
          value={jobData.description}
          onChange={(e) =>
            setJobData({ ...jobData, description: e.target.value })
          }
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "none",
            height: "100px",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={createJob}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#0b75ff",
            color: "white",
          }}
        >
          Post Job
        </button>
        <button
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#e5e7eb",
            color: "#000",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
