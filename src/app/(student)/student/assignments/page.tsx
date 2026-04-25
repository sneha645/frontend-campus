"use client";

import {
  ApproveButton,
  HeaderSubContainer,
  HeadingContainer,
  PaperContainer,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
  ViewProfile,
} from "@/app/(admin)/admin/recruiters/styled";
import {
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
import { Search } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FormModal } from "../projects/styled";
import {
  AssignmentContainer,
  AssignmentDescriptionContainer,
  AssignmentInfoContainer,
  AssignmentInfoLabel,
  AssignmentInfoSubContainer,
  AssignmentInfoValue,
  AssignmentModalContainer,
  AssignmentModalHeader,
  AssignmentModalSubContainer,
  AssignmentModalTitle,
  AssignmentUploadInput,
  HrLine,
  SubmitButton,
  UploadAssignmentContainer,
  UploadAssignmentDescriptionStyled,
  UploadAssignmentHeader,
  UploadAssignmentSubContainer,
  UploadAssignmentTitle,
  UploadAssignmentTitleStyled,
  UploadedAssignmentContainer,
} from "./styled";
import { Assignment, recentAssignmentsTableColumns } from "@/types/type";

export default function AssignmentsPage() {
  const [searchAssignment, setSearchAssignment] = useState("");
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openAssignmentModal, setOpenAssignmentModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string>("");
  const [selectedMentorId, setSelectedMentorId] = useState<string>("");
  const [uploadAssignmentModal, setUploadAssignmentModal] = useState(false);

  const fetchAssignments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/student/assignments",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      setAssignments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const filteredAssignments = useMemo(() => {
    return assignments.filter((p) =>
      p.assignment_title
        ?.toLowerCase()
        .includes(searchAssignment.toLowerCase()),
    );
  }, [assignments, searchAssignment]);

  const paginatedAssignments = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredAssignments.slice(start, start + rowsPerPage);
  }, [filteredAssignments, page, rowsPerPage]);

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
    <AssignmentContainer>
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
            <TableHeading>Assignments</TableHeading>
            <HeaderSubContainer>
              <TableSubHeading>
                Review newly assigned assignments, upload files, and keep
                assignment
                <br /> data accurate across departments.
              </TableSubHeading>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  placeholder="Search assignment"
                  value={searchAssignment}
                  onChange={(e) => setSearchAssignment(e.target.value)}
                />
              </SearchContainer>
            </HeaderSubContainer>
          </HeadingContainer>
        </PaperContainer>

        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {recentAssignmentsTableColumns.map((column) => (
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
              {paginatedAssignments?.length < 1 ? (
                <TableRow>
                  <TableCell colSpan={5} align="left">
                    No assignments found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedAssignments?.map((assignment, index) => (
                  <TableRow key={index}>
                    <TableCell
                      style={{
                        fontFamily: "Poppins",
                      }}
                    >
                      {assignment.assignment_title}
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "Poppins",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {assignment.assignment_deadline}
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "Poppins",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {assignment.submissiontype}
                      </Box>
                    </TableCell>

                    <TableCell
                      style={{
                        fontFamily: "Poppins",
                      }}
                    >
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
                            backgroundColor: `${
                              assignment.assignment_status === "submitted"
                                ? "#def2e6"
                                : "#fdefd8"
                            }`,
                            padding: "10px 20px",
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            width: "fit-content",
                            color: `${assignment.assignment_status === "submitted" ? "#16a34a" : "#f59e0b"}`,
                            fontSize: "12px",
                          }}
                        >
                          {assignment.assignment_status}
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        {assignment.assignment_status === "assigned" && (
                          <>
                            <ApproveButton
                              style={{ width: "fit-content" }}
                              onClick={() => {
                                setUploadAssignmentModal(true);
                                setSelectedAssignmentId(
                                  assignment.assignment_id,
                                );
                                setSelectedMentorId(
                                  assignment.mentor.user_id || "",
                                );
                              }}
                            >
                              Upload File
                            </ApproveButton>

                            <ViewProfile
                              onClick={() => {
                                setSelectedAssignment(assignment);
                                setOpenAssignmentModal(true);
                              }}
                            >
                              View Assignment
                            </ViewProfile>
                          </>
                        )}

                        {assignment.assignment_status === "submitted" && (
                          <ViewProfile>View Submission</ViewProfile>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredAssignments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <AssignmentModal
        open={openAssignmentModal}
        onClose={() => {
          setOpenAssignmentModal(false);
          setSelectedAssignment(null);
        }}
        assignment={selectedAssignment}
      />

      <FormModal
        open={uploadAssignmentModal}
        onClose={() => setUploadAssignmentModal(false)}
        style={{ display: "flex", alignItems: "center", justifySelf: "center" }}
      >
        <UploadAssignmentForm
          mentorId={selectedMentorId}
          assignmentId={selectedAssignmentId}
          fetchAssignments={fetchAssignments}
          setUploadAssignmentModal={setUploadAssignmentModal}
        />
      </FormModal>
    </AssignmentContainer>
  );
}

const AssignmentModal = ({
  open,
  onClose,
  assignment,
}: {
  open: boolean;
  onClose: () => void;
  assignment: any;
}) => {
  if (!assignment) return null;

  return (
    <FormModal open={open} onClose={onClose}>
      <AssignmentModalContainer>
        <AssignmentModalHeader>
          <AssignmentModalTitle>
            {assignment.assignment_title}
          </AssignmentModalTitle>
        </AssignmentModalHeader>
        <HrLine />

        <AssignmentModalSubContainer>
          <AssignmentInfoContainer>
            <AssignmentInfoSubContainer>
              <AssignmentInfoLabel>Assigned To:</AssignmentInfoLabel>
              <AssignmentInfoValue>
                {assignment.assignment_assignto} Year
              </AssignmentInfoValue>
            </AssignmentInfoSubContainer>
            <AssignmentInfoSubContainer>
              <AssignmentInfoLabel>Submission Type:</AssignmentInfoLabel>
              <AssignmentInfoValue>
                {assignment.submissiontype}
              </AssignmentInfoValue>
            </AssignmentInfoSubContainer>
            <AssignmentInfoSubContainer>
              <AssignmentInfoLabel>Deadline:</AssignmentInfoLabel>
              <AssignmentInfoValue>
                {assignment.assignment_deadline}
              </AssignmentInfoValue>
            </AssignmentInfoSubContainer>
          </AssignmentInfoContainer>
          <AssignmentInfoSubContainer>
            <AssignmentInfoLabel>Description:</AssignmentInfoLabel>
            <AssignmentDescriptionContainer>
              <AssignmentInfoValue>
                {assignment.assignment_description}
              </AssignmentInfoValue>
            </AssignmentDescriptionContainer>
          </AssignmentInfoSubContainer>
        </AssignmentModalSubContainer>
      </AssignmentModalContainer>
    </FormModal>
  );
};

export const UploadAssignmentForm = ({
  assignmentId,
  mentorId,
  fetchAssignments,
  setUploadAssignmentModal,
}: {
  assignmentId: string;
  mentorId: string;
  fetchAssignments: () => void;
  setUploadAssignmentModal: (open: boolean) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);

  const handleUploadAssignment = async () => {
    const formDataToSend = new FormData();

    if (file) {
      formDataToSend.append("file", file);
    }
    formDataToSend.append("assignmentId", assignmentId);
    formDataToSend.append("mentorId", mentorId);

    try {
      await axios.post(
        `http://localhost:3000/api/student/submitAssignment`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      fetchAssignments();
      setFile(null);
      setUploadAssignmentModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UploadAssignmentContainer>
      <UploadAssignmentHeader>
        <UploadAssignmentTitle>Upload Assignment</UploadAssignmentTitle>
      </UploadAssignmentHeader>
      <HrLine />
      <UploadedAssignmentContainer>
        <UploadAssignmentSubContainer>
          <UploadAssignmentTitleStyled>
            Upload Resume
          </UploadAssignmentTitleStyled>
          <UploadAssignmentDescriptionStyled>
            PDF, DOC, DOCX Recommended 512x512px Used across job listings and
            candidate search.
          </UploadAssignmentDescriptionStyled>
          <AssignmentUploadInput
            type="file"
            id="resume"
            style={{ cursor: "pointer" }}
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </UploadAssignmentSubContainer>
        <SubmitButton onClick={handleUploadAssignment}>
          Submit Assignment
        </SubmitButton>
      </UploadedAssignmentContainer>
    </UploadAssignmentContainer>
  );
};
