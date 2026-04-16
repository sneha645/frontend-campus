"use client";

import axios from "axios";
import { Briefcase, Clock8, Code, IndianRupee, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function FeedbacksPage() {
  const [projectFeedbacks, setProjectFeedbacks] = useState([]);
  const [internshipFeedbacks, setInternshipFeedbacks] = useState([]);

  const getFeedbacks = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found");
        return;
      }

      const response1 = await axios.get(
        "http://localhost:3000/api/student/getProjectFeedbacks",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const response2 = await axios.get(
        "http://localhost:3000/api/student/getInternshipFeedbacks",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      console.log(response1.data);
      console.log(response2.data);

      setProjectFeedbacks(response1.data || []);
      setInternshipFeedbacks(response2.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedbacks();
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
        {projectFeedbacks.map((feedback) => (
          <div
            key={feedback.project_id}
            style={{
              backgroundColor: "#fff",
              width: "100%",
              borderRadius: "12px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
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
              {/* project image */}
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                <img
                  src={`http://localhost:3000${feedback.imageUrl}`}
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
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
                <div
                  style={{
                    display: "flex",

                    gap: "5px",
                  }}
                >
                  {/* project title */}
                  <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
                    {feedback.title}
                  </h1>
                  {/* project status */}
                  <div>{feedback.status}</div>
                </div>
                {/* project description */}
                <p style={{ fontSize: "16px", color: "#666" }}>
                  {feedback.description}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {/* technologies */}
                {feedback.technologies
                  ?.split(",")
                  .map((tech) => tech.trim())
                  .filter((tech) => tech !== "")
                  .map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "1px solid #e5e7eb",
                paddingLeft: "20px",
                height: "100%",
              }}
            >
              {/* feedbacks */}
              {feedback.feedback}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
