"use client";

import {
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
import { Search, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AssignmentContainer,
  AssignmentForm,
  AssignmentFormContainer,
  AssignmentFormContent,
  AssignmentHeader,
  AssignmentHeading,
  AssignmentTable,
  Hrline,
  Input,
  InputContainer,
  InputLabel,
  Option,
  PublishButton,
  Select,
  TextArea,
} from "./styled";
import { assignmentTableColumns } from "@/types/type";

export default function AssignmentsPage() {
  const router = useRouter();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchProject, setSearchProject] = useState("");
  const [assignments, setAssignments] = useState<any[]>([]);
  const [assignmentData, setAssignmentData] = useState({
    assignment_title: "",
    assignment_description: "",
    assignment_assignto: "",
    assignment_deadline: "",
    submissiontype: "",
  });

  const fetchAssignments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/mentor/get-assignments",
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

  const filteredAssignments = useMemo(() => {
    return assignments.filter((p) =>
      p.assignment_title.toLowerCase().includes(searchProject.toLowerCase()),
    );
  }, [assignments, searchProject]);

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

  const createAssignment = async () => {
    if (
      !assignmentData.assignment_title ||
      !assignmentData.assignment_description ||
      !assignmentData.assignment_assignto ||
      !assignmentData.assignment_deadline ||
      !assignmentData.submissiontype
    ) {
      setValidation("Please fill all the fields");
      setTimeout(() => {
        setValidation("");
      }, 2000);
      return;
    }
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/mentor/assignment",
        assignmentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchAssignments();
      setSuccess(response.data.message);
      setLoading(false);
      setAssignmentData({
        assignment_title: "",
        assignment_description: "",
        assignment_assignto: "",
        assignment_deadline: "",
        submissiontype: "",
      });
    } catch (error) {
      const backendMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Error resetting password";
      const message = Array.isArray(backendMessage)
        ? backendMessage.join(", ")
        : backendMessage;
      setError(message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <AssignmentContainer>
      {success && (
        <Alert
          severity="success"
          sx={{
            mb: 2,
            position: "absolute",
            right: "20px",
            top: "10px",
          }}
        >
          {success}
        </Alert>
      )}
      {error && (
        <Alert
          severity="error"
          sx={{
            mb: 2,
            position: "absolute",
            top: "10px",
            right: "20px",
          }}
        >
          {error}
        </Alert>
      )}
      {validation && (
        <Alert
          severity="warning"
          sx={{
            mb: 2,
            position: "absolute",
            top: "10px",
            right: "20px",
          }}
        >
          {validation}
        </Alert>
      )}
      <HeadingContainer>
        <TableHeading>Assignments</TableHeading>
        <HeaderSubContainer>
          <TableSubHeading>
            Create and manage assignments for students.
            <br />
            Track progress and provide feedback.
          </TableSubHeading>
          <PublishButton onClick={createAssignment}>
            <Send color="#fff" size={16} />
            {loading ? "Creating..." : "Create Assignment"}
          </PublishButton>
        </HeaderSubContainer>
      </HeadingContainer>
      <AssignmentFormContainer>
        <AssignmentForm>
          <AssignmentHeader>
            <AssignmentHeading>Assignment Details</AssignmentHeading>
          </AssignmentHeader>
          <Hrline />
          <AssignmentFormContent>
            <InputContainer>
              <InputLabel htmlFor="">Assignment Title</InputLabel>
              <Input
                value={assignmentData.assignment_title}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    assignment_title: e.target.value,
                  })
                }
                placeholder="UX Research case study - Phase 1"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="">Instructions & Description</InputLabel>
              <TextArea
                value={assignmentData.assignment_description}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    assignment_description: e.target.value,
                  })
                }
                rows={5}
                placeholder="In this assignment, students will be required to conduct preliminary user research and define user personas. Please include specific constraints..."
              />
            </InputContainer>
          </AssignmentFormContent>
        </AssignmentForm>
        <AssignmentForm
          style={{
            width: "30%",
          }}
        >
          <AssignmentHeader>
            <AssignmentHeading>Assignment Details</AssignmentHeading>
          </AssignmentHeader>
          <Hrline />
          <AssignmentFormContent>
            <InputContainer>
              <InputLabel htmlFor="">Assign to</InputLabel>
              <Select
                value={assignmentData.assignment_assignto}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    assignment_assignto: e.target.value,
                  })
                }
                id="jobType"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              >
                <Option value="">Select year</Option>
                <Option value="1">1st Year</Option>
                <Option value="2">2nd Year</Option>
                <Option value="3">3rd Year</Option>
                <Option value="4">4th Year</Option>
              </Select>
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="">Submission Date</InputLabel>
              <Input
                type="date"
                value={assignmentData.assignment_deadline}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    assignment_deadline: e.target.value,
                  })
                }
              />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="">Submission type</InputLabel>
              <Select
                value={assignmentData.submissiontype}
                onChange={(e) =>
                  setAssignmentData({
                    ...assignmentData,
                    submissiontype: e.target.value,
                  })
                }
                id="jobType"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              >
                <Option value="">Select type</Option>
                <Option value="file">File</Option>
                <Option value="link">Link</Option>
                <Option value="text">Text</Option>
              </Select>
            </InputContainer>
          </AssignmentFormContent>
        </AssignmentForm>
      </AssignmentFormContainer>
      <AssignmentTable>
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
                  View all assigned student assignments
                </TableSubHeading>
                <SearchContainer>
                  <Search size={16} color="#666" />
                  <SearchInput
                    placeholder="Search assignment"
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
                  {assignmentTableColumns.map((column) => (
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
                {paginatedAssignments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="left">
                      No assignments found
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedAssignments.map((assignment, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {assignment.assignment_title}
                      </TableCell>

                      <TableCell style={{ fontFamily: "Poppins" }}>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {assignment.assignment_assignto} Year
                        </Box>
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {assignment.assignment_deadline}
                        </Box>
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {assignment.submissiontype}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <ViewProfile
                            onClick={() => {
                              router.push(
                                `/mentor/assignments/${assignment.assignment_id}`,
                              );
                            }}
                          >
                            View Submissions
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
              count={filteredAssignments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Paper>
      </AssignmentTable>
    </AssignmentContainer>
  );
}
