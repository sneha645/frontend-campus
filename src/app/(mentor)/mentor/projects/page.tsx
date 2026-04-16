"use client";

import {
  ApproveButton,
  RejectButton,
  ViewProfile,
} from "@/app/(admin)/admin/recruiters/styled";
import { FormModal } from "@/app/(student)/student/projects-and-internships/styled";
import { Project } from "@/types/type";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export interface MentorTableColumns {
  id: "title" | "student" | "startDate" | "endDate" | "status" | "actions";
  label: string;
  minWidth: number;
  align: "left" | "right" | "center";
}

export const studentProjectColumns: readonly MentorTableColumns[] = [
  { id: "title", label: "Title", minWidth: 100, align: "left" },
  { id: "student", label: "Student", minWidth: 100, align: "left" },
  { id: "startDate", label: "Start Date", minWidth: 100, align: "left" },
  { id: "endDate", label: "End Date", minWidth: 100, align: "left" },
  { id: "status", label: "Status", minWidth: 100, align: "left" },
  { id: "actions", label: "Actions", minWidth: 100, align: "left" },
];

export default function ProjectsPage() {
  const [assignedProjects, setAssignedProjects] = useState<Project | null>([]);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  console.log("project", selectedProject);

  const [feedback, setFeedback] = useState("");

  const fetchAssignedProjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/mentor/assigned-projects",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = await res.data;
      setAssignedProjects(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (
    id: string,
    feedback: string,
    status: string,
  ) => {
    const token = localStorage.getItem("token");
    console.log("project id", id, feedback, status);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/mentor/approveProject/${id}`,
        { feedback, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      fetchAssignedProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id: string, feedback: string, status: string) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `http://localhost:3000/api/mentor/rejectProject/${id}`,
        { feedback, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      fetchAssignedProjects();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignedProjects();
  }, []);

  return (
    <TableContainer style={{ height: "100%", position: "relative" }}>
      <Table>
        <TableHead style={{ backgroundColor: "#f7f8fa" }}>
          <TableRow>
            {studentProjectColumns.map((column) => (
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
          {assignedProjects &&
            assignedProjects?.length > 0 &&
            assignedProjects?.map((project) => (
              <TableRow key={project.id}>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  {project.title}
                </TableCell>

                <TableCell style={{ fontFamily: "Poppins" }}>
                  {project.student.name}
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  {project.startDate}
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  {project.endDate}
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  <Box
                    sx={{
                      backgroundColor: `${project.status === "approved" ? "#def2e6" : project.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                      padding: "10px 20px",
                      borderRadius: "30px",
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                      color: `${project.status === "approved" ? "#16a34a" : project.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                      fontSize: "12px",
                    }}
                  >
                    {project.status}
                  </Box>
                </TableCell>
                <TableCell style={{ display: "flex", gap: "10px" }}>
                  {project.status === "pending" && (
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <ViewProfile onClick={setSelectedProject(project.id)}>
                        View project
                      </ViewProfile>
                    </Box>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      =
      <FormModal
        open={openProjectModal}
        onClose={() => setOpenProjectModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <div>
          <div>
            {assignedProjects.map((project) => (
              <div key={project.id}>
                <p>{project.title}</p>
                <p>{project.student.name}</p>
                <p>{project.startDate}</p>
                <p>{project.endDate}</p>
                <p>{project.status}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Enter your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div>
            <ApproveButton
              onClick={() =>
                handleApprove(selectedProject, feedback, "approved")
              }
            >
              Approve
            </ApproveButton>
            <RejectButton
              onClick={() =>
                handleApprove(selectedProject, feedback, "rejected")
              }
            >
              Reject
            </RejectButton>
          </div>
        </div>
      </FormModal>
    </TableContainer>
  );
}
