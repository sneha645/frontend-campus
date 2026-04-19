"use client";

import {
  HeadingContainer,
  PaperContainer,
  ViewProfile,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
  HeaderSubContainer,
} from "@/app/(admin)/admin/recruiters/styled";
import { FormModal } from "@/app/(student)/student/projects/styled";
import { Project, projectTableColumns } from "@/types/type";
import {
  Alert,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import {
  Calendar,
  CircleCheckBig,
  CircleX,
  Search,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActionButtonContainer,
  ApproveButton,
  FeedbackInput,
  HrLine,
  ProjectContainer,
  ProjectDescription,
  ProjectDescriptionContainer,
  ProjectInfoContainer,
  ProjectInfoLabel,
  ProjectInfoSubContainer,
  ProjectInfoValue,
  ProjectModalContainer,
  ProjectModalHeader,
  ProjectModalSubContainer,
  ProjectModalTitle,
  ProjectStatus,
  RejectButton,
} from "./styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function ProjectsPage() {
  const [assignedProjects, setAssignedProjects] = useState<Project[]>([]);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchProject, setSearchProject] = useState("");

  const fetchAssignedProjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/mentor/assigned-projects",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setAssignedProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignedProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return assignedProjects.filter((p) =>
      p.title.toLowerCase().includes(searchProject.toLowerCase()),
    );
  }, [assignedProjects, searchProject]);

  const paginatedProjects = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredProjects.slice(start, start + rowsPerPage);
  }, [filteredProjects, page, rowsPerPage]);

  const handleChangePage = useCallback((_: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    [],
  );

  return (
    <ProjectContainer>
      <Paper
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "none",
          border: "1px solid #e5e7eb",
        }}
      >
        <PaperContainer>
          <HeadingContainer>
            <TableHeading>Assigned Projects</TableHeading>
            <HeaderSubContainer>
              <TableSubHeading>
                Review and moderate assigned projects, track progress, and
                <br />
                provide feedback to students.
              </TableSubHeading>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  placeholder="Search project"
                  value={searchProject}
                  onChange={(e) => setSearchProject(e.target.value)}
                />
              </SearchContainer>
            </HeaderSubContainer>
          </HeadingContainer>
        </PaperContainer>

        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {projectTableColumns.map((column) => (
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
              {paginatedProjects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="left">
                    No projects found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedProjects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {project.title}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {typeof project.student === "object"
                        ? project.student?.name
                        : project.student}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {project.startDate}
                      </Box>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {project.endDate}
                      </Box>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {" "}
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        <ViewProfile
                          onClick={() => {
                            setSelectedProject(project);
                            setOpenProjectModal(true);
                          }}
                        >
                          View Project
                        </ViewProfile>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredProjects.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>

      <ProjectModal
        open={openProjectModal}
        onClose={() => setOpenProjectModal(false)}
        project={selectedProject}
        refreshProjects={fetchAssignedProjects}
      />
    </ProjectContainer>
  );
}

export const ProjectModal = ({
  open,
  onClose,
  project,
  refreshProjects,
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
  refreshProjects: () => void;
}) => {
  const [feedback, setFeedback] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleApproveProject = async () => {
    if (!feedback) {
      setValidationError("Please enter feedback");
      setTimeout(() => {
        setValidationError("");
      }, 2000);
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/api/mentor/approveProject/${project?.project_id}`,
        {
          status: "approved",
          feedback,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
      refreshProjects();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejectProject = async () => {
    if (!feedback) {
      setValidationError("Please enter feedback");
      setTimeout(() => {
        setValidationError("");
      }, 2000);
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/api/mentor/rejectProject/${project?.project_id}`,
        {
          status: "rejected",
          feedback,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
      refreshProjects();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormModal open={open} onClose={onClose}>
      <ProjectModalContainer>
        {validationError && (
          <Alert severity="error" sx={{ position: "absolute", top: "20px" }}>
            {validationError}
          </Alert>
        )}
        <ProjectModalHeader>
          <ProjectModalTitle>{project?.title}</ProjectModalTitle>
        </ProjectModalHeader>
        <HrLine />
        <ProjectModalSubContainer>
          <ProjectInfoContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Student</ProjectInfoLabel>
              <ProjectInfoValue>
                {typeof project?.student === "object"
                  ? project?.student?.name
                  : project?.student}
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Status</ProjectInfoLabel>
              <ProjectStatus
                style={{
                  color: `${project?.status === "approved" ? "#16a34a" : project?.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                  backgroundColor: `${project?.status === "approved" ? "#def2e6" : project?.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                }}
              >
                {project?.status} review
              </ProjectStatus>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Start Date</ProjectInfoLabel>
              <ProjectInfoValue>
                <Calendar size={18} color="#00000099" />
                {project?.startDate}
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>End Date</ProjectInfoLabel>
              <ProjectInfoValue>
                <Calendar size={18} color="#00000099" />
                {project?.endDate}
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Github Repository</ProjectInfoLabel>
              <ProjectInfoValue style={{ color: "#0b75ff" }}>
                <GitHubIcon style={{ color: "#0b75ff", fontSize: "18px" }} />
                <Link href={project?.githubUrl} target="_blank">
                  {project?.githubUrl}
                </Link>
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Live Link</ProjectInfoLabel>
              <ProjectInfoValue style={{ color: "#0b75ff" }}>
                <SquareArrowOutUpRight size={18} color="#0b75ff" />
                <Link href={project?.projectUrl} target="_blank">
                  {project?.projectUrl}
                </Link>
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
          </ProjectInfoContainer>
          <ProjectInfoSubContainer>
            <ProjectInfoLabel>Description</ProjectInfoLabel>
            <ProjectDescriptionContainer>
              <ProjectDescription>{project?.description}</ProjectDescription>
            </ProjectDescriptionContainer>
          </ProjectInfoSubContainer>
          <ProjectInfoSubContainer>
            <ProjectInfoLabel>Evaluation Feedback</ProjectInfoLabel>
            <FeedbackInput
              placeholder="Enter feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </ProjectInfoSubContainer>
          <ActionButtonContainer>
            <ApproveButton onClick={handleApproveProject}>
              <CircleCheckBig size={18} />
              Approve Project
            </ApproveButton>
            <RejectButton onClick={handleRejectProject}>
              <CircleX size={18} />
              Reject Project
            </RejectButton>
          </ActionButtonContainer>
        </ProjectModalSubContainer>
      </ProjectModalContainer>
    </FormModal>
  );
};
