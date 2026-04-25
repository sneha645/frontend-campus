"use client";

import { Job, mentorTableColumns, User } from "@/types/type";
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
} from "../../../(admin)/admin/recruiters/styled";
import { MentorContainer } from "../../../(admin)/admin/mentors/styled";
import { useRouter } from "next/navigation";

export default function AppliedJobsPage() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchAppliedJobs, setSearchAppliedJobs] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [appliedJobs, setAppliedJobs] = useState<any[]>([]);

  const fetchAppliedJobs = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "http://localhost:3000/api/student/appliedJobs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      const data = await response.data;
      setAppliedJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredAppliedJobs = useMemo(() => {
    return appliedJobs.filter((r) =>
      r.job.title.toLowerCase().includes(searchAppliedJobs.toLowerCase()),
    );
  }, [appliedJobs, searchAppliedJobs]);

  const paginatiedAppliedJobs = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredAppliedJobs.slice(start, start + rowsPerPage);
  }, [filteredAppliedJobs, page, rowsPerPage]);

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
    fetchAppliedJobs();
  }, []);

  return (
    <MentorContainer>
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
            <TableHeading>Applied Jobs</TableHeading>
            <HeaderSubContainer>
              <TableSubHeading>
                Review applied jobs, moderate approvals, and keep mentor
                <br /> data accurate across departments.
              </TableSubHeading>
              <SearchContainer>
                <Search size={16} color="#666" />
                <SearchInput
                  placeholder="Search applied jobs"
                  value={searchAppliedJobs}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchAppliedJobs(e.target.value)
                  }
                />
              </SearchContainer>
            </HeaderSubContainer>
          </HeadingContainer>
        </PaperContainer>

        <TableContainer style={{ height: "100%", position: "relative" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f7f8fa" }}>
              <TableRow>
                <TableCell style={{ fontWeight: "600", fontFamily: "Poppins" }}>
                  Job Title
                </TableCell>
                <TableCell style={{ fontWeight: "600", fontFamily: "Poppins" }}>
                  Salary
                </TableCell>
                <TableCell style={{ fontWeight: "600", fontFamily: "Poppins" }}>
                  Company
                </TableCell>
                <TableCell style={{ fontWeight: "600", fontFamily: "Poppins" }}>
                  Location
                </TableCell>
                <TableCell style={{ fontWeight: "600", fontFamily: "Poppins" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatiedAppliedJobs?.length < 1 ? (
                <TableRow>
                  <TableCell colSpan={5} align="left">
                    No applied jobs found
                  </TableCell>
                </TableRow>
              ) : (
                paginatiedAppliedJobs?.map((job, index) => (
                  <TableRow key={index}>
                    <TableCell>{job.job.title}</TableCell>
                    <TableCell>{job.job.salary}</TableCell>
                    <TableCell>{job.job.company.companyName}</TableCell>
                    <TableCell>{job.job.company.location}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          backgroundColor: `${job.status === "shortlisted" ? "#def2e6" : job.status === "rejected" ? "#fbdfe5" : "#fdefd8"}`,
                          padding: "10px 20px",
                          borderRadius: "30px",
                          display: "flex",
                          alignItems: "center",
                          width: "fit-content",
                          color: `${job.status === "shortlisted" ? "#16a34a" : job.status === "rejected" ? "#e11d48" : "#f59e0b"}`,
                          fontSize: "12px",
                        }}
                      >
                        {job.status}
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
            count={paginatiedAppliedJobs.length}
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
