"use client";

import { studentTableColumns, User } from "@/types/type";
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
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import {
  ApproveButton,
  HeaderSubContainer,
  HeadingContainer,
  PaperContainer,
  RejectButton,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
  ViewProfile,
} from "../recruiters/styled";
import { StudentContainer } from "./styled";
import { useRouter } from "next/navigation";

export default function StudentsPage() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchStudent, setSearchStudent] = useState("");
  const [students, setStudents] = useState<User[]>([]);

  const fetchStudents = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/all-students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.data;
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredStudents = useMemo(() => {
    return students.filter((r) =>
      r.name.toLowerCase().includes(searchStudent.toLowerCase()),
    );
  }, [students, searchStudent]);

  const paginatiedStudents = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredStudents.slice(start, start + rowsPerPage);
  }, [filteredStudents, page, rowsPerPage]);

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

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleApprove = async (id: string) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `http://localhost:3000/api/admin/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setSuccess(response.data.message);
      setTimeout(() => {
        setSuccess("");
      }, 5000);

      fetchStudents();
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to approve student");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.log(error);
    }
  };

  const handleReject = async (id: string) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `http://localhost:3000/api/admin/reject/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setSuccess(response.data.message);
      setTimeout(() => {
        setSuccess("");
      }, 2000);
      fetchStudents();
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to reject student");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.log(error);
    }
  };

  return (
    <StudentContainer>
      {success && (
        <Alert
          style={{ position: "absolute", top: "10px", right: "100px", zIndex: '99999' }}
          severity="success"
        >
          {success}
        </Alert>
      )}
      {error && (
        <Alert
          style={{ position: "absolute", top: "10px", right: "100px", zIndex: '99999' }}
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
            <TableHeading>New Student Requests</TableHeading>
            <HeaderSubContainer>
              <TableSubHeading>
                Review newly registered students, moderate approvals, and keep
                student
                <br /> data accurate across departments.
              </TableSubHeading>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  placeholder="Search student"
                  value={searchStudent}
                  onChange={(e) => setSearchStudent(e.target.value)}
                />
              </SearchContainer>
            </HeaderSubContainer>
          </HeadingContainer>
        </PaperContainer>
        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {studentTableColumns.map((column) => (
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
              {paginatiedStudents?.length < 1 ? (
                <TableRow>
                  <TableCell colSpan={5} align="left">
                    No students found
                  </TableCell>
                </TableRow>
              ) : (
                paginatiedStudents?.map((student) => (
                  <TableRow key={student.email}>
                    <TableCell style={{ fontFamily: "Poppins", fontWeight: '600' }}>
                      {student.name}
                    </TableCell>

                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {student.email}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {student.createdAt
                          ?.split("T")[0]
                          .split("-")
                          .reverse()
                          .join("-")}
                      </Box>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            backgroundColor: `${student.status === "approved" ? "#def2e6" : student.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                            padding: "10px 20px",
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            width: "fit-content",
                            color: `${student.status === "approved" ? "#16a34a" : student.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                            fontSize: "12px",
                          }}
                        >
                          {student.status}
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell style={{ display: "flex", gap: "10px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        {student.status === "pending" ? (
                          <Box sx={{ display: "flex", gap: "10px" }}>
                            <ApproveButton
                              style={{ fontFamily: "Poppins" }}
                              onClick={() =>
                                student.user_id &&
                                handleApprove(student.user_id)
                              }
                            >
                              Approve
                            </ApproveButton>
                            <RejectButton
                              style={{ fontFamily: "Poppins" }}
                              onClick={() =>
                                student.user_id && handleReject(student.user_id)
                              }
                            >
                              Reject
                            </RejectButton>
                          </Box>
                        ) : student.status === "approved" ? (
                          <ViewProfile
                            onClick={() => {
                              router.push(`/admin/students/${student.user_id}`);
                            }}
                          >
                            View Profile
                          </ViewProfile>
                        ) : (
                          ""
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30]}
            component={"div"}
            count={paginatiedStudents.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ fontFamily: "Poppins" }}
          />
        </TableContainer>
      </Paper>
    </StudentContainer>
  );
}
