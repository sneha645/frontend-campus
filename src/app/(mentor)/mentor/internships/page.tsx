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
import { FormModal } from "@/app/(student)/student/projects-and-internships/styled";
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
} from "../projects/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function InternshipsPage() {
  const [assignedInternships, setAssignedInternships] = useState<Project[]>([]);
  const [openInternshipModal, setOpenInternshipModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<Project | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchInternship, setSearchInternship] = useState("");

  const fetchAssignedInternships = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/mentor/assigned-internships",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setAssignedInternships(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignedInternships();
  }, []);

  const filteredInternships = useMemo(() => {
    return assignedInternships.filter((p) =>
      p.title.toLowerCase().includes(searchInternship.toLowerCase()),
    );
  }, [assignedInternships, searchInternship]);

  const paginatedInternships = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredInternships.slice(start, start + rowsPerPage);
  }, [filteredInternships, page, rowsPerPage]);

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
            <TableHeading>Assigned Internships</TableHeading>
            <HeaderSubContainer>
              <TableSubHeading>
                Review and moderate assigned internships, track progress, and
                <br />
                provide feedback to students.
              </TableSubHeading>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  placeholder="Search internship"
                  value={searchInternship}
                  onChange={(e) => setSearchInternship(e.target.value)}
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
              {paginatedInternships.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="left">
                    No internships found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedInternships.map((internship, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {internship.title}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {typeof internship.student === "object"
                        ? internship.student?.name
                        : internship.student}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {internship.startDate}
                      </Box>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {internship.endDate}
                      </Box>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {" "}
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            backgroundColor: `${internship.status === "approved" ? "#def2e6" : internship.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                            padding: "10px 20px",
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            width: "fit-content",
                            color: `${internship.status === "approved" ? "#16a34a" : internship.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                            fontSize: "12px",
                          }}
                        >
                          {internship.status}
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
                            setSelectedInternship(internship);
                            setOpenInternshipModal(true);
                          }}
                        >
                          View Internship
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
            count={filteredInternships.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>

      <InternshipModal
        open={openInternshipModal}
        onClose={() => setOpenInternshipModal(false)}
        internship={selectedInternship}
        refreshInternships={fetchAssignedInternships}
      />
    </ProjectContainer>
  );
}

export const InternshipModal = ({
  open,
  onClose,
  internship,
  refreshInternships,
}: {
  open: boolean;
  onClose: () => void;
  internship: Project | null;
  refreshInternships: () => void;
}) => {
  const [feedback, setFeedback] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleApproveInternship = async () => {
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
        `http://localhost:3000/api/mentor/approveInternship/${internship?.project_id}`,
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
      refreshInternships();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejectInternship = async () => {
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
        `http://localhost:3000/api/mentor/rejectInternship/${internship?.project_id}`,
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
      refreshInternships();
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
          <ProjectModalTitle>{internship?.title}</ProjectModalTitle>
        </ProjectModalHeader>
        <HrLine />
        <ProjectModalSubContainer>
          <ProjectInfoContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Student</ProjectInfoLabel>
              <ProjectInfoValue>
                {typeof internship?.student === "object"
                  ? internship?.student?.name
                  : internship?.student}
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Status</ProjectInfoLabel>
              <ProjectStatus
                style={{
                  color: `${internship?.status === "approved" ? "#16a34a" : internship?.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                  backgroundColor: `${internship?.status === "approved" ? "#def2e6" : internship?.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                }}
              >
                {internship?.status} review
              </ProjectStatus>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Start Date</ProjectInfoLabel>
              <ProjectInfoValue>
                <Calendar size={18} color="#00000099" />
                {internship?.startDate}
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>End Date</ProjectInfoLabel>
              <ProjectInfoValue>
                <Calendar size={18} color="#00000099" />
                {internship?.endDate}
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Github Repository</ProjectInfoLabel>
              <ProjectInfoValue style={{ color: "#0b75ff" }}>
                <GitHubIcon style={{ color: "#0b75ff", fontSize: "18px" }} />
                <Link href={internship?.githubUrl} target="_blank">
                  {internship?.githubUrl}
                </Link>
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Live Link</ProjectInfoLabel>
              <ProjectInfoValue style={{ color: "#0b75ff" }}>
                <SquareArrowOutUpRight size={18} color="#0b75ff" />
                <Link href={internship?.projectUrl} target="_blank">
                  {internship?.projectUrl}
                </Link>
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
          </ProjectInfoContainer>
          <ProjectInfoSubContainer>
            <ProjectInfoLabel>Description</ProjectInfoLabel>
            <ProjectDescriptionContainer>
              <ProjectDescription>{internship?.description}</ProjectDescription>
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
            <ApproveButton onClick={handleApproveInternship}>
              <CircleCheckBig size={18} />
              Approve Project
            </ApproveButton>
            <RejectButton onClick={handleRejectInternship}>
              <CircleX size={18} />
              Reject Project
            </RejectButton>
          </ActionButtonContainer>
        </ProjectModalSubContainer>
      </ProjectModalContainer>
    </FormModal>
  );
};
