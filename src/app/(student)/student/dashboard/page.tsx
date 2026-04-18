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
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "30px", fontWeight: "600" }}>
            Welcome back, {user?.name}{" "}
            <WavingHandIcon sx={{ fontSize: "30px", color: "yellow" }} />
          </h1>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            Here's what's happening with your job search today.
          </p>
        </div>
        <ApproveButton
          style={{ width: "fit-content", display: "flex", gap: "6px" }}
        >
          <Search />
          Find New Jobs
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
            <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
              Project Uploaded
            </h1>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0b75ffb9",
                borderRadius: "8px",
              }}
            >
              <Upload color="#fff" size={24} />
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
                fontWeight: "500",
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
            <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
              Internship Upload
            </h1>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0b75ffb9",
                borderRadius: "8px",
              }}
            >
              <Upload color="#fff" size={24} />
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
                fontWeight: "500",
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
            <h1 style={{ fontSize: "20px", fontWeight: "500" }}>Job Applied</h1>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0b75ffb9",
                borderRadius: "8px",
              }}
            >
              <Briefcase color="#fff" size={24} />
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
                fontWeight: "500",
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
            <h1 style={{ fontSize: "20px", fontWeight: "500" }}>
              Assignment Completed
            </h1>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0b75ffb9",
                borderRadius: "8px",
              }}
            >
              <Task
                style={{
                  color: "#fff",
                  fontSize: "24px",
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
                fontWeight: "500",
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
