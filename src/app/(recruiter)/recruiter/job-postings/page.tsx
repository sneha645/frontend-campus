"use client"

import { FormModal } from "@/app/(student)/student/upload/styled";
import { UploadJob } from "@/components/UploadJob";
import {
  Briefcase,
  Clock8,
  EllipsisVertical,
  IndianRupee,
  MapPin,
  Plus,
  Search,
} from "lucide-react";
import { useState } from "react";

export default function JobPostingsPage() {
  const [openJobModal, setOpenJobModal] = useState(false);
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
        <div
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
                Software Engineer Intern
              </h1>
              <div
                style={{
                  padding: "5px 10px",
                  borderRadius: "8px",
                  backgroundColor: "#e3f4e9",
                  color: "#21a752",
                }}
              >
                Active
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
                <Briefcase /> Internship
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <MapPin /> Internship
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Clock8 /> Posted 2 days ago
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <IndianRupee /> 10k-20k per month
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
      </div>
      <FormModal
        open={openJobModal}
        onClose={() => setOpenJobModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <UploadJob setOpenJobModal={setOpenJobModal} />
      </FormModal>
    </div>
  );
}
