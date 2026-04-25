"use client";

import {
  PaperContainer,
  TableHeading,
  TableSubHeading,
  SearchContainer,
  SearchInput,
  ViewProfile,
  HeadingContainer,
  HeaderSubContainer,
} from "@/app/(admin)/admin/recruiters/styled";
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
  FileIcon,
  Search,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AssignmentContainer } from "../styled";
import {
  Assignment,
  SubmittedAssignment,
  submittedAssignmentTableColumns,
} from "@/types/type";
import {
  ActionButtonContainer,
  ApproveButton,
  Feedback,
  FeedbackInput,
  FeedbackSection,
  HrLine,
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
  ScoreInput,
} from "../../projects/styled";
import { FormModal } from "@/app/(student)/student/internships/styled";
import Link from "next/link";

export default function AssignmentPage() {
  const { assignment_id } = useParams();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchAssignmentStudent, setSearchAssignmentStudent] = useState("");
  const [submittedAssignments, setSubmittedAssignments] = useState<
    SubmittedAssignment[]
  >([]);
  const [openAssignmentModal, setOpenAssignmentModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] =
    useState<SubmittedAssignment | null>(null);

  const getSubmittedAssignments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/mentor/submitted-assignments/${assignment_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      setSubmittedAssignments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubmittedAssignments();
  }, []);

  const filteredSubmittedAssignments = useMemo(() => {
    return submittedAssignments.filter((r) =>
      r.student.name
        .toLowerCase()
        .includes(searchAssignmentStudent.toLowerCase()),
    );
  }, [submittedAssignments, searchAssignmentStudent]);

  const paginatiedSubmittedAssignments = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredSubmittedAssignments.slice(start, start + rowsPerPage);
  }, [filteredSubmittedAssignments, page, rowsPerPage]);

  const handleChangePage = useCallback(
    (_: unknown, newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    [setPage, setRowsPerPage],
  );
  return (
    <AssignmentContainer>
      {success && (
        <Alert
          style={{ position: "absolute", top: "10px", right: "100px" }}
          severity="success"
        >
          {success}
        </Alert>
      )}
      {error && (
        <Alert
          style={{ position: "absolute", top: "10px", right: "100px" }}
          severity="error"
        >
          {error}
        </Alert>
      )}
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
            <TableHeading>Submitted Assignments</TableHeading>
            <HeaderSubContainer>
              <TableSubHeading>
                Review newly submitted assignments, moderate approvals, and keep
                assignment
                <br /> data accurate across departments.
              </TableSubHeading>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  placeholder="Search student"
                  value={searchAssignmentStudent}
                  onChange={(e) => setSearchAssignmentStudent(e.target.value)}
                />
              </SearchContainer>
            </HeaderSubContainer>
          </HeadingContainer>
        </PaperContainer>

        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {submittedAssignmentTableColumns.map((column) => (
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
              {paginatiedSubmittedAssignments.length < 1 ? (
                <TableRow>
                  <TableCell colSpan={6} align="left">
                    No assignments found
                  </TableCell>
                </TableRow>
              ) : (
                paginatiedSubmittedAssignments.map((assignment, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {assignment.assignment.assignment_title}
                    </TableCell>
                    <TableCell>{assignment.student.name}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {assignment.submittedAt.split("T")[0]}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {assignment.assignment.assignment_deadline}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: `${assignment.status === "approved" ? "#def2e6" : assignment.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                            padding: "10px 20px",
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            width: "fit-content",
                            color: `${assignment.status === "approved" ? "#16a34a" : assignment.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                            fontSize: "12px",
                          }}
                        >
                          {assignment.status === "pending"
                            ? "Submitted"
                            : assignment.status}
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <ViewProfile
                          onClick={() => {
                            setSelectedAssignment(assignment);
                            setOpenAssignmentModal(true);
                          }}
                        >
                          View Assignment
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
            count={paginatiedSubmittedAssignments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
      <AssignmentActionModal
        open={openAssignmentModal}
        onClose={() => setOpenAssignmentModal(false)}
        assignment={selectedAssignment}
        refreshAssignments={getSubmittedAssignments}
      />
    </AssignmentContainer>
  );
}

export const AssignmentActionModal = ({
  open,
  onClose,
  assignment,
  refreshAssignments,
}: {
  open: boolean;
  onClose: () => void;
  assignment: SubmittedAssignment | null;
  refreshAssignments: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState({
    feedback: "",
    status: "",
    score: "",
  });
  const [validationError, setValidationError] = useState("");

  if (!assignment) return null;

  const handleApproveProject = async () => {
    if (!action.feedback || !action.score) {
      setValidationError("Please fill all the fields");
      setTimeout(() => setValidationError(""), 3000);
      return;
    }

    if (Number(action.score) < 0 || Number(action.score) > 100) {
      setValidationError("Score must be between 0 and 100");
      setTimeout(() => setValidationError(""), 3000);
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `http://localhost:3000/api/mentor/approve-assignment/${assignment.submission_id}`,
        {
          status: "approved",
          feedback: action.feedback,
          score: action.score,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      refreshAssignments();
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRejectProject = async () => {
    if (!action.feedback) {
      setValidationError("Please fill the feedback");
      setTimeout(() => setValidationError(""), 3000);
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        `http://localhost:3000/api/mentor/reject-assignment/${assignment.submission_id}`,
        {
          status: "rejected",
          score: "0",
          feedback: action.feedback,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      refreshAssignments();
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
          <ProjectModalTitle>
            {assignment.assignment.assignment_title}
          </ProjectModalTitle>
        </ProjectModalHeader>
        <HrLine />
        <ProjectModalSubContainer>
          <ProjectInfoContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Student</ProjectInfoLabel>
              <ProjectInfoValue>{assignment.student.name}</ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Status</ProjectInfoLabel>
              <ProjectStatus
                style={{
                  color: `${assignment?.status === "approved" ? "#16a34a" : assignment?.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                  backgroundColor: `${assignment?.status === "approved" ? "#def2e6" : assignment?.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                }}
              >
                {assignment?.status}
              </ProjectStatus>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Submitted Date</ProjectInfoLabel>
              <ProjectInfoValue>
                <Calendar size={18} color="#00000099" />
                {assignment?.submittedAt.split("T")[0]}
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Assignment Deadline</ProjectInfoLabel>
              <ProjectInfoValue>
                <Calendar size={18} color="#00000099" />
                {assignment?.assignment.assignment_deadline}
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
            <ProjectInfoSubContainer>
              <ProjectInfoLabel>Assignment File</ProjectInfoLabel>
              <ProjectInfoValue style={{ color: "#0b75ff" }}>
                <FileIcon style={{ color: "#0b75ff", fontSize: "18px" }} />
                <Link
                  href={`http://localhost:3000${assignment?.fileUrl}`}
                  target="_blank"
                >
                  {assignment?.assignment.assignment_title}
                </Link>
              </ProjectInfoValue>
            </ProjectInfoSubContainer>
          </ProjectInfoContainer>

          {assignment?.status === "submitted" && (
            <>
              <ProjectInfoSubContainer>
                <ProjectInfoLabel>Score (out of 10)</ProjectInfoLabel>
                <ScoreInput
                  type="number"
                  min={0}
                  max={10}
                  placeholder="Enter score out of 10"
                  value={action.score}
                  onChange={(e) =>
                    setAction({ ...action, score: e.target.value })
                  }
                />
              </ProjectInfoSubContainer>
              <ProjectInfoSubContainer>
                <ProjectInfoLabel>Evaluation Feedback</ProjectInfoLabel>
                <FeedbackInput
                  placeholder="Enter feedback"
                  value={action.feedback}
                  onChange={(e) =>
                    setAction({ ...action, feedback: e.target.value })
                  }
                />
              </ProjectInfoSubContainer>
              <ActionButtonContainer>
                <ApproveButton onClick={handleApproveProject}>
                  <CircleCheckBig size={18} />
                  {loading ? "Approving..." : "Approve"}
                </ApproveButton>
                <RejectButton onClick={handleRejectProject}>
                  <CircleX size={18} />
                  {loading ? "Rejecting..." : "Reject"}
                </RejectButton>
              </ActionButtonContainer>
            </>
          )}

          {assignment?.status === "approved" && (
            <>
              <FeedbackSection>
                <ProjectInfoLabel>Feedback</ProjectInfoLabel>
                <Feedback>{assignment?.feedback}</Feedback>
              </FeedbackSection>
              <ProjectInfoSubContainer>
                <ProjectInfoLabel>Score</ProjectInfoLabel>
                <Feedback>{assignment?.score}/10</Feedback>
              </ProjectInfoSubContainer>
            </>
          )}
        </ProjectModalSubContainer>
      </ProjectModalContainer>
    </FormModal>
  );
};
