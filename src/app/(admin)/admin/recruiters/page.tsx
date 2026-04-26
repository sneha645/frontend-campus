"use client";

import { recruiterTableColumns, User } from "@/types/type";
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
  RecruiterContainer,
  RejectButton,
  SearchContainer,
  SearchInput,
  TableHeading,
  TableSubHeading,
  ViewProfile,
} from "./styled";
import { useRouter } from "next/navigation";

export default function RecruiterPage() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchRecruiter, setSearchRecruiter] = useState("");
  const [recruiters, setRecruiters] = useState<User[]>([]);

  const fetchRecruiters = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/all-recruiters",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.data;
      setRecruiters(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredRecruiters = useMemo(() => {
    return recruiters.filter((r) =>
      r.name.toLowerCase().includes(searchRecruiter.toLowerCase()),
    );
  }, [recruiters, searchRecruiter]);

  const paginatiedRecruiter = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredRecruiters.slice(start, start + rowsPerPage);
  }, [filteredRecruiters, page, rowsPerPage]);

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
    fetchRecruiters();
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
      }, 2000);

      console.log(response);
      fetchRecruiters();
    } catch (error) {
      setError("Failed to approve recruiter");
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

      console.log(response);
      fetchRecruiters();
    } catch (error) {
      setError("Failed to reject recruiter");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.log(error);
    }
  };

  return (
    <RecruiterContainer>
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
            <TableHeading>New Recruiter Requests</TableHeading>
            <HeaderSubContainer>
              <TableSubHeading>
                Review newly registered recruiters, moderate approvals, and keep
                employer
                <br /> data accurate across departments.
              </TableSubHeading>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  placeholder="Search recruiter"
                  value={searchRecruiter}
                  onChange={(e) => setSearchRecruiter(e.target.value)}
                />
              </SearchContainer>
            </HeaderSubContainer>
          </HeadingContainer>
        </PaperContainer>
        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                {recruiterTableColumns.map((column) => (
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
              {paginatiedRecruiter?.length < 1 ? (
                <TableRow>
                  <TableCell colSpan={5} align="left">
                    No recruiters found
                  </TableCell>
                </TableRow>
              ) : (
                paginatiedRecruiter?.map((recruiter) => (
                  <TableRow key={recruiter.email}>
                    <TableCell style={{ fontFamily: "Poppins", fontWeight: '600' }}>
                      {recruiter.name}
                    </TableCell>

                    <TableCell style={{ fontFamily: "Poppins" }}>
                      {recruiter.email}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Poppins" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {recruiter.createdAt
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
                            backgroundColor: `${recruiter.status === "approved" ? "#def2e6" : recruiter.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                            padding: "10px 20px",
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            width: "fit-content",
                            color: `${recruiter.status === "approved" ? "#16a34a" : recruiter.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                            fontSize: "12px",
                          }}
                        >
                          {recruiter.status}
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
                        {recruiter.status === "pending" ? (
                          <Box sx={{ display: "flex", gap: "10px" }}>
                            <ApproveButton
                              style={{ fontFamily: "Poppins" }}
                              onClick={() =>
                                recruiter.user_id &&
                                handleApprove(recruiter.user_id)
                              }
                            >
                              Approve
                            </ApproveButton>
                            <RejectButton
                              style={{ fontFamily: "Poppins" }}
                              onClick={() =>
                                recruiter.user_id &&
                                handleReject(recruiter.user_id)
                              }
                            >
                              Reject
                            </RejectButton>
                          </Box>
                        ) : recruiter.status === "approved" ? (
                          <ViewProfile
                            onClick={() => {
                              router.push(
                                `/admin/recruiters/${recruiter.user_id}`,
                              );
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
            count={paginatiedRecruiter.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ fontFamily: "Poppins" }}
          />
        </TableContainer>
      </Paper>
    </RecruiterContainer>
  );
}
