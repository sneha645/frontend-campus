import { Send } from "lucide-react";

export default function AssignmentsPage() {
  return (
    <div
      style={{
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
        gap: "20px",
        height: "100vh",
        width: "100%",
        overflow: "auto",
        overflowY: "hidden",
        backgroundColor: "#f6fbf9",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <h1 style={{ fontSize: "28px", color: "#000", fontWeight: "700" }}>
            Create New Assignment
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", fontWeight: "500" }}>
            Set up instructions, resources, and deadlines for your students.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            style={{
              border: "1px solid #94a3b877",
              borderRadius: "8px",
              padding: "14px",
              color: "#000",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Save as Draft
          </button>
          <button
            style={{
              backgroundColor: "#007bff",
              borderRadius: "8px",
              padding: "14px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Send color="#fff" />
            Publish Assignment
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #94a3b877",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            width: "70%",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "18px", color: "#000", fontWeight: "600" }}>
              Assignment Details
            </h1>
          </div>
          <hr style={{ color: "#94a3b877" }} />
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Assignment Title
              </label>
              <input
                placeholder="UX Research case study - Phase 1"
                style={{
                  outline: "none",
                  borderRadius: "8px",
                  border: "1px solid #94a3b877",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Instructions & Description
              </label>
              <textarea
                rows={5}
                placeholder="In this assignment, students will be required to conduct preliminary user research and define user personas. Please include specific constraints..."
                style={{
                  outline: "none",
                  borderRadius: "8px",
                  border: "1px solid #94a3b877",
                  padding: "10px",
                  fontSize: "14px",
                  resize: "none",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #94a3b877",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            width: "30%",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "18px", color: "#000", fontWeight: "600" }}>
              Assignment Details
            </h1>
          </div>
          <hr style={{ color: "#94a3b877" }} />
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Assign to
              </label>
              <select
                id="jobType"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Submission Date
              </label>
              <input
                type="date"
                placeholder="In this assignment, students will be required to conduct preliminary user research and define user personas. Please include specific constraints..."
                style={{
                  outline: "none",
                  borderRadius: "8px",
                  border: "1px solid #94a3b877",
                  padding: "10px",
                  fontSize: "14px",
                  resize: "none",
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "16px", color: "#000", fontWeight: "600" }}
              >
                Submission type
              </label>
              <select
                id="jobType"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select type</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
