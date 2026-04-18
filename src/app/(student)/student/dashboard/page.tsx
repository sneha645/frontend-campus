"use client";

import { ApproveButton } from "@/app/(admin)/admin/recruiters/styled";
import { useAuth } from "@/context/AuthContext";
import { Briefcase, Search, Upload } from "lucide-react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Task } from "@mui/icons-material";

export default function StudentDashboardPage() {
  const { user } = useAuth();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <h1 style={{ fontSize: "30px", fontWeight: "600" }}>
            Welcome back, {user?.name}!{" "}
            <span role="img" aria-label="smile">
              👋
            </span>
          </h1>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#797f8d" }}>
            Here's a summary of your academic and placement activities.
          </p>
        </div>
        <ApproveButton
          style={{
            width: "fit-content",
            display: "flex",
            gap: "6px",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <Search size={20} />
          Explore New Jobs
        </ApproveButton>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #aaaaaa23",
            borderRadius: "8px",
            height: "200px",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
              Project Uploaded
            </h1>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#aaaaaa23",
                borderRadius: "8px",
              }}
            >
              <Upload color="#0b75ffff" size={20} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "auto",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginRight: "6px",
              }}
            >
              10
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #aaaaaa23",
            borderRadius: "8px",
            height: "200px",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
              Internship Uploaded
            </h1>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#aaaaaa23",
                borderRadius: "8px",
              }}
            >
              <Upload color="#0b75ffff" size={20} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "auto",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginRight: "6px",
              }}
            >
              3
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #aaaaaa23",
            borderRadius: "8px",
            height: "200px",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>Job Applied</h1>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#aaaaaa23",
                borderRadius: "8px",
              }}
            >
              <Briefcase color="#0b75ffff" size={20} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "auto",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginRight: "6px",
              }}
            >
              5
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #aaaaaa23",
            borderRadius: "8px",
            height: "200px",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
              Assignment Completed
            </h1>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#aaaaaa23",
                borderRadius: "8px",
              }}
            >
              <Task
                style={{
                  color: "#0b75ffff",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "auto",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginRight: "6px",
              }}
            >
              20
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
