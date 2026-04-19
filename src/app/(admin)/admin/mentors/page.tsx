"use client";

import { mentorTableColumns, User } from "@/types/type";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
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
import { MentorContainer } from "./styled";
import { useRouter } from "next/navigation";

export default function MentorsPage() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchMentor, setSearchMentor] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [mentors, setMentors] = useState<User[]>([]);

  const fetchMentor = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/all-mentors",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      const data = await response.data;
      setMentors(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredMentors = useMemo(() => {
    return mentors.filter((r) =>
      r.name.toLowerCase().includes(searchMentor.toLowerCase()),
    );
  }, [mentors, searchMentor]);

  const paginatiedMentors = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredMentors.slice(start, start + rowsPerPage);
  }, [filteredMentors, page, rowsPerPage]);

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
    fetchMentor();
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
      if (response.status === 200) {
        setSuccess(response.data.message);
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
      console.log(response);
      fetchMentor();
    } catch (error) {
      setError("Failed to approve mentor");
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
      if (response.status === 200) {
        setSuccess(response.data.message);
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
      console.log(response);
      fetchMentor();
    } catch (error) {
      setError("Failed to reject mentor");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.log(error);
    }
  };

  return (
    <MentorContainer>
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
            <TableHeading>New Mentor Requests</TableHeading>
            <HeaderSubContainer>
              <TableSubHeading>
                Review newly registered mentors, moderate approvals, and keep
                mentor
                <br /> data accurate across departments.
              </TableSubHeading>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  placeholder="Search mentor"
                  value={searchMentor}
                  onChange={(e) => setSearchMentor(e.target.value)}
                />
              </SearchContainer>
            </HeaderSubContainer>
          </HeadingContainer>
        </PaperContainer>

        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {mentorTableColumns.map((column) => (
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
              {paginatiedMentors?.length < 1 ? (
                <TableRow>
                  <TableCell colSpan={5} align="left">
                    No mentors found
                  </TableCell>
                </TableRow>
              ) : (
                paginatiedMentors?.map((mentor) => (
                  <TableRow key={mentor.email}>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {mentor.name}
                    </TableCell>

                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {mentor.email}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {mentor.createdAt?.split("T")[0]}
                      </Box>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            backgroundColor: `${mentor.status === "approved" ? "#def2e6" : mentor.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                            padding: "10px 20px",
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            width: "fit-content",
                            color: `${mentor.status === "approved" ? "#16a34a" : mentor.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                            fontSize: "12px",
                          }}
                        >
                          {mentor.status}
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
                        {mentor.status === "pending" ? (
                          <Box sx={{ display: "flex", gap: "10px" }}>
                            <ApproveButton
                              style={{ fontFamily: "Poppins" }}
                              onClick={() =>
                                mentor.user_id && handleApprove(mentor.user_id)
                              }
                            >
                              Approve
                            </ApproveButton>
                            <RejectButton
                              style={{ fontFamily: "Poppins" }}
                              onClick={() =>
                                mentor.user_id && handleReject(mentor.user_id)
                              }
                            >
                              Reject
                            </RejectButton>
                          </Box>
                        ) : mentor.status === "approved" ? (
                          <ViewProfile
                            onClick={() => {
                              router.push(`/admin/mentors/${mentor.user_id}`);
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
            count={paginatiedMentors.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </MentorContainer>
  );
}
