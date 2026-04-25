"use client";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
  TablePagination,
  Alert,
} from "@mui/material";

import {
  ApproveButton,
  HeadingContainer,
  PaperContainer,
  RejectButton,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
  ViewProfile,
} from "../../../../(admin)/admin/recruiters/styled";
import { useParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Application } from "@/types/type";

export interface ApplicationTableColumns {
  id: "studentName" | "jobType" | "appliedAt" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const applicationTableColumns: readonly ApplicationTableColumns[] = [
  { id: "studentName", label: "Name", minWidth: 100, align: "left" },
  { id: "jobType", label: "Job Type", minWidth: 100, align: "left" },
  { id: "appliedAt", label: "Applied At", minWidth: 100, align: "left" },
  { id: "status", label: "Status", minWidth: 100, align: "left" },
  { id: "actions", label: "Actions", minWidth: 100, align: "left" },
];

export default function ApplicationsPage() {
  const { jobId } = useParams();
  const [success, setSucess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [applications, setApplications] = useState<Application[]>([]);
  console.log(applications);

  const getApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/api/recruiter/getMyApplications/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.data;
      setApplications(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  const handleShortlist = async (appId: string) => {
    try {
      console.log("appId", appId);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/api/recruiter/applicanttShortlisted/${appId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("response", response.data);

      setSucess(response.data.message);
      setTimeout(() => {
        setSucess("");
      }, 2000);
      getApplications();
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const handleReject = async (appId: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/api/recruiter/applicantRejected/${appId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setSucess(response.data.message);
      setTimeout(() => {
        setSucess("");
      }, 2000);
      getApplications();
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
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
      {success && (
        <Alert
          style={{ position: "absolute", top: "10px", right: "20px" }}
          severity="success"
        >
          {success}
        </Alert>
      )}
      {error && (
        <Alert
          style={{ position: "absolute", top: "10px", right: "20px" }}
          severity="error"
        >
          {error}
        </Alert>
      )}
      <Paper style={{ width: "100%", height: "100%" }}>
        <PaperContainer>
          <HeadingContainer>
            <TableHeading>New Recruiter Requests</TableHeading>
            <TableSubHeading>
              Pending requests list with manual moderation for approvals,
              rejects and compliance review.
            </TableSubHeading>
          </HeadingContainer>
          <SearchContainer>
            <Search size={20} />
            <SearchInput placeholder="Search recruiter" />
          </SearchContainer>
        </PaperContainer>
        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {applicationTableColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "600",
                      fontFamily: "Poppins",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {applications &&
                applications?.length > 0 &&
                applications?.map((application) => (
                  <TableRow key={application.application_id}>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {application.student.name}
                    </TableCell>

                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {application.job.title}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {application.createdAt.split("T")[0]}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box
                        sx={{
                          backgroundColor: `${application.status === "shortlisted" ? "#def2e6" : application.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                          padding: "10px 20px",
                          borderRadius: "30px",
                          display: "flex",
                          alignItems: "center",
                          width: "fit-content",
                          color: `${application.status === "shortlisted" ? "#16a34a" : application.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                          fontSize: "12px",
                        }}
                      >
                        {application.status}
                      </Box>
                    </TableCell>
                    <TableCell style={{ display: "flex", gap: "10px" }}>
                      {application.status === "applied" && (
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <ApproveButton
                            style={{ fontFamily: "Poppins" }}
                            onClick={() =>
                              application.application_id &&
                              handleShortlist(application.application_id)
                            }
                          >
                            Shortlist
                          </ApproveButton>
                          <RejectButton
                            style={{ fontFamily: "Poppins" }}
                            onClick={() =>
                              application.application_id &&
                              handleReject(application.application_id)
                            }
                          >
                            Reject
                          </RejectButton>
                        </Box>
                      )}

                      <ViewProfile
                        onClick={() => {
                          window.open(
                            `http://localhost:3000${application.resumeUrl}`,
                            "_blank",
                          );
                        }}
                      >
                        View Resume
                      </ViewProfile>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
