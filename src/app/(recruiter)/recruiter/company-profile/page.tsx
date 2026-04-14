"use client";

import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import React, { useState } from "react";

export default function CompanyProfilePage() {
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const { user } = useAuth();

  const [companyProfile, setCompanyProfile] = useState({
    companyName: "",
    website: "",
    industry: "",
    companySize: "",
    aboutCompany: "",
    location: "",
    companyEmail: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !companyProfile.companyName ||
      !companyProfile.website ||
      !companyProfile.industry ||
      !companyProfile.companySize ||
      !companyProfile.aboutCompany ||
      !companyLogo ||
      !companyProfile.location ||
      !companyProfile.companyEmail
    ) {
      alert("Please fill all the fields");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("companyName", companyProfile.companyName);
      formDataToSend.append("aboutCompany", companyProfile.aboutCompany);
      formDataToSend.append("website", companyProfile.website);
      formDataToSend.append("industry", companyProfile.industry);
      formDataToSend.append("companySize", companyProfile.companySize);
      formDataToSend.append("location", companyProfile.location);
      formDataToSend.append("companyEmail", companyProfile.companyEmail);

      if (companyLogo) {
        formDataToSend.append("logo", companyLogo);
      }
      const response = await axios.post(
        "http://localhost:3000/api/recruiter/createCompanyProfile",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
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
          width: "65%",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
              Basic Company Details
            </h1>
            <p style={{ fontSize: "14px", color: "#666666" }}>
              Start with the essentials recruiters typically need before posting
              <br />
              campus opportunities.
            </p>
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#e3e8edff",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <p style={{ fontSize: "14px", color: "#000000" }}>
                Draft saved 2 min ago
              </p>
            </div>
          </div>
        </div>
        <hr style={{ color: "#E5E7EB" }} />
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Tech Mahindra Pvt Ltd"
                  value={companyProfile.companyName}
                  onChange={(e) =>
                    setCompanyProfile({
                      ...companyProfile,
                      companyName: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #E5E7EB",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label htmlFor="companyName">Website</label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="www.techmahindra.com"
                  value={companyProfile.website}
                  onChange={(e) =>
                    setCompanyProfile({
                      ...companyProfile,
                      website: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #E5E7EB",
                    borderRadius: "4px",
                  }}
                />
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label htmlFor="companyName">Industry</label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="IT Services & Consulting"
                  value={companyProfile.industry}
                  onChange={(e) =>
                    setCompanyProfile({
                      ...companyProfile,
                      industry: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #E5E7EB",
                    borderRadius: "4px",
                  }}
                />
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label htmlFor="companyName">Company Size</label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="1001-5000 employees"
                  value={companyProfile.companySize}
                  onChange={(e) =>
                    setCompanyProfile({
                      ...companyProfile,
                      companySize: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #E5E7EB",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Pune, Maharashtra"
                  value={companyProfile.location}
                  onChange={(e) =>
                    setCompanyProfile({
                      ...companyProfile,
                      location: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #E5E7EB",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <label htmlFor="companyEmail">Company Email</label>
                <input
                  type="text"
                  id="companyEmail"
                  placeholder="support@grr.la"
                  value={companyProfile.companyEmail}
                  onChange={(e) =>
                    setCompanyProfile({
                      ...companyProfile,
                      companyEmail: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #E5E7EB",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <label htmlFor="companyName">About Company</label>
              <textarea
                id="companyName"
                placeholder="Write a short description of your company"
                value={companyProfile.aboutCompany}
                onChange={(e) =>
                  setCompanyProfile({
                    ...companyProfile,
                    aboutCompany: e.target.value,
                  })
                }
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "4px",
                  resize: "none",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <label htmlFor="companyName">Company Logo</label>
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
                <h1 style={{ fontSize: "16px", fontWeight: "600" }}>
                  Upload Logo
                </h1>
                <p style={{ fontSize: "14px", color: "#666666" }}>
                  SVG, PNG or JPG Recommended 512x512px Used across job listings
                  and candidate search.
                </p>
                <input
                  type="file"
                  id="companyLogo"
                  style={{ cursor: "pointer" }}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setCompanyLogo(e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "10px",
              padding: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "#0b75ff",
                color: "#ffffff",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
            <button
              style={{
                backgroundColor: "#e5e7eb",
                color: "#000000",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Reset
            </button>
            <button
              style={{
                backgroundColor: "#0b75ff",
                color: "#ffffff",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>

      {user?.company === null ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "35%",
            height: "100%",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
          }}
        >
          <p>No profile found</p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "35%",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            height: "fit-content",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ddecff",
                  padding: "20px",
                  borderRadius: "4px",
                  height: "80px",
                  width: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#0b75ff",
                }}
              >
                TM
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                  Tech Mahindra
                </h1>
                <a href="" style={{ color: "#0b75ff" }}>
                  www.techmahindra.com
                </a>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              commodi necessitatibus, fugit cupiditate dolores velit ipsam
              provident unde aliquam! Non?
            </p>
          </div>
          <hr
            style={{
              color: "#E5E7EB",
              height: "1px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <label htmlFor="" style={{ color: "#666666" }}>
                Industry
              </label>
              <p>IT Services & Consulting</p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <label htmlFor="" style={{ color: "#666666" }}>
                Company Size
              </label>
              <p>1001-5000 employees</p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <label htmlFor="" style={{ color: "#666666" }}>
                Campus Hiring
              </label>
              <p>Internship and Full-time</p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <label htmlFor="" style={{ color: "#666666" }}>
                Primary Audience
              </label>
              <p>Undergraduate and Postgraduate</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
