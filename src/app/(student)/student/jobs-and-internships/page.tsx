import { Briefcase, Clock8, Code, IndianRupee, MapPin } from "lucide-react";

export default function JobsAndInternshipsPage() {
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
        <div
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "fit-content",
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
                Software Engineer Intern
              </h1>
              <p style={{ fontSize: "16px", color: "#666" }}>Tech Mahindra</p>
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
                <p>Internship</p>
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
                <p>Gurugram, Haryana</p>
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
                <p>10k-20k per month</p>
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
                <p>2 days ago</p>
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
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
