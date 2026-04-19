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
import { Search } from "lucide-react";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AssignmentContainer } from "../styled";
import { submittedAssignmentTableColumns } from "@/types/type";

export default function AssignmentPage() {
  const { assignment_id } = useParams();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchAssignmentStudent, setSearchAssignmentStudent] = useState("");
  const [submittedAssignments, setSubmittedAssignments] = useState([]);

  const getSubmittedAssignments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/mentor/submitted-assignments/${assignment_id}`,
      );
      setSubmittedAssignments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/mentor/approve-assignment/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      if (response.status === 200) {
        setSuccess(response.data.message);
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
      getSubmittedAssignments();
    } catch (error) {
      setError("Failed to approve assignment");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.log(error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/mentor/reject-assignment/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      if (response.status === 200) {
        setSuccess(response.data.message);
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
      getSubmittedAssignments();
    } catch (error) {
      setError("Failed to reject assignment");
      setTimeout(() => {
        setError("");
      }, 2000);
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
                        }}
                      >
                        {assignment.submittedAt}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {assignment.assignment.deadline}
                      </Box>
                    </TableCell>
                    <TableCell>
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
                        {assignment.status}
                      </Box>
                    </TableCell>

                    <TableCell>
                      <ViewProfile
                        onClick={() => {
                          window.open(
                            `http://localhost:3000${assignment.fileUrl}`,
                            "_blank",
                          );
                        }}
                      >
                        View Assignment
                      </ViewProfile>
                      {assignment.status === "pending" && (
                        <ViewProfile
                          onClick={() =>
                            handleApprove(assignment.submission_id)
                          }
                        >
                          Approve
                        </ViewProfile>
                      )}
                      {assignment.status === "pending" && (
                        <ViewProfile
                          onClick={() => handleReject(assignment.submission_id)}
                        >
                          Reject
                        </ViewProfile>
                      )}
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
    </AssignmentContainer>
  );
}
